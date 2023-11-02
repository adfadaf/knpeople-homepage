import { useEffect, useState } from "react";
import { menu } from "../db/db";
import headerCss from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOn, setMenuOn] = useState("");
  const [bgOn, setBgOn] = useState("");

  useEffect(() => {
    if (menuOn === headerCss.menuOn) {
      setBgOn(headerCss.headerBgOn);
    } else {
      setBgOn("");
    }
  }, [menuOn]);

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
              <img src="/logo.png" />
            </Link>
          </div>
          <nav
            className={`${headerCss.nav} `}
            onMouseOver={() => setMenuOn(headerCss.menuOn)}
          >
            <ul className={`${headerCss.menu} nav`}>
              {menu.map((main) => {
                return (
                  <>
                    <li key={main.menu} className={`nav-item`}>
                      <span className={`${headerCss.mainMenu}`}>
                        {main.menu}
                      </span>
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
                  </>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <div className={`${headerCss.headerBg} ${bgOn}`} />
    </>
  );
}
