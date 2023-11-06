import { useEffect, useState } from "react";
import { menu } from "../db/db";
import headerCss from "./header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import MobileMenu from "./mobileMenu";

export default function Header() {
  const [menuOn, setMenuOn] = useState("");
  const [bgOn, setBgOn] = useState("");
  const [mbOn, setMbOn] = useState("");

  useEffect(() => {
    if (menuOn === headerCss.menuOn || mbOn === headerCss.mbOn) {
      setBgOn(headerCss.headerBgOn);
    } else {
      setBgOn("");
    }
  }, [menuOn, mbOn]);

  return (
    <>
      <div className={`${headerCss.block}`} />
      <header
        className={`position-fixed w-100 top-0 ${headerCss.header} ${menuOn} `}
        onMouseLeave={() => setMenuOn("")}
      >
        <div className={`container position-relative`}>
          <div className={`position-absolute top-0 start-0 ${headerCss.logo}`}>
            <Link to={"/"}>
              <img src="/logo.png" alt="knpeople-logo" />
            </Link>
          </div>
          <nav
            className={`${headerCss.nav} `}
            onMouseOver={() => setMenuOn(headerCss.menuOn)}
          >
            <ul className={`${headerCss.menu} nav`}>
              {menu.map((main, i) => {
                return (
                  <li key={i} className={`nav-item`}>
                    <span className={`${headerCss.mainMenu}`}>{main.menu}</span>
                    <ul className={`${headerCss.subMenu}`}>
                      {main.subMenu.map((sub, i) => {
                        return (
                          <li key={i}>
                            <Link to={`/${sub.id}`}>{sub.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div
          className={`${headerCss.menuBtn}`}
          onClick={() => setMbOn(headerCss.mbOn)}
        >
          <FontAwesomeIcon icon={faBars} className={`${headerCss.btn}`} />
        </div>
      </header>
      <div
        className={`${headerCss.headerBg}  ${bgOn}`}
        onClick={() => setMbOn("")}
      />
      <MobileMenu mbOn={mbOn} />
    </>
  );
}

function MobileMenu(props) {
  const [isOn, setIsOn] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (isOn) {
      setActive(headerCss.mbSubActive);
    } else {
      setActive("");
    }
  }, [isOn]);

  return (
    <div className={`${headerCss.mobileWrap} ${props.mbOn}`}>
      <ul className={`${headerCss.mobileMain}`}>
        <li>
          <span
            className={` ${active}`}
            onClick={() => {
              if (isOn) {
                setIsOn(!isOn);
              } else {
                setIsOn(!isOn);
              }
              console.log(isOn);
            }}
          >
            asdfadf
          </span>
          <ul className={`${headerCss.mbSub}`}>
            <li>adsfas</li>
            <li>adsfas</li>
            <li>adsfas</li>
            <li>adsfas</li>
            <li>adsfas</li>
          </ul>
        </li>
        <li>
          <span
            className={` ${active}`}
            onClick={() => {
              if (isOn) {
                setIsOn(!isOn);
              } else {
                setIsOn(!isOn);
              }
              console.log(isOn);
            }}
          >
            asdfadf
          </span>
          <ul className={`${headerCss.mbSub}`}>
            <li>adsfas</li>
            <li>adsfas</li>
            <li>adsfas</li>
            <li>adsfas</li>
            <li>adsfas</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
