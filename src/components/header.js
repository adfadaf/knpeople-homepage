import { useEffect, useRef, useState } from "react";
import { menu } from "../db/db";
import headerCss from "./header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
// import MobileMenu from "./mobileMenu";

export default function Header() {
  const [menuOn, setMenuOn] = useState("");
  const [line, setLine] = useState("");
  const [bgOn, setBgOn] = useState("");
  const [mbOn, setMbOn] = useState("");

  const moveToTop = () => {
    window.scroll({ top: 0 });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setLine(headerCss.borderBt);
    } else {
      setLine("");
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        className={`position-fixed w-100 top-0 ${headerCss.header} ${menuOn} ${line} `}
        onMouseLeave={() => setMenuOn("")}
      >
        <div className={`container position-relative`}>
          <div className={`position-absolute top-0 start-0 ${headerCss.logo}`}>
            <Link
              to={"/"}
              onClick={(e) => {
                moveToTop();
                setMenuOn("");
              }}
            >
              <img src="/logo.png" alt="knpeople-logo" />
            </Link>
          </div>
          <nav className={`${headerCss.nav} `}>
            <ul
              className={`${headerCss.menu} nav`}
              onMouseOver={(e) => setMenuOn(headerCss.menuOn)}
            >
              {menu.map((main, i) => {
                return (
                  <li key={i} className={`nav-item`}>
                    <span className={`${headerCss.mainMenu}`}>{main.menu}</span>
                    <ul className={`${headerCss.subMenu}`}>
                      {main.subMenu.map((sub, i) => {
                        return (
                          <li key={i}>
                            {sub.isLink ? (
                              <a
                                href={sub.link}
                                onClick={() => setMenuOn("")}
                                target="_blank"
                              >
                                {sub.title}
                                <FontAwesomeIcon
                                  icon={faArrowUpRightFromSquare}
                                />
                              </a>
                            ) : (
                              <Link
                                to={`/${sub.id}`}
                                onClick={(e) => {
                                  setMenuOn("");
                                  moveToTop();
                                }}
                              >
                                {sub.title}
                              </Link>
                            )}
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
