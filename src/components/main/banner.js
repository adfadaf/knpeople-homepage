import { banner } from "../../db/db";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import bannerCss from "./banner.module.css";

export default function Banner() {
  return (
    <>
      <section className={`${bannerCss.banner}`}>
        <div className={`container`}>
          <div className={`${bannerCss.bannerBox}`}>
            <div className={`${bannerCss.innerBanenr}`}>
              <h3>
                we make
                <br />
                our solid values
              </h3>
              <span>
                차이를 만드는 다름.
                <br />
                케이엔피플은 우리만의 견고한 가치를 만듭니다.
              </span>
            </div>
          </div>

          <div className={`${bannerCss.contentWrap}`}>
            {banner.map((cont, i) => {
              return (
                <div className={`${bannerCss.content}`} key={i}>
                  <div>
                    <div className={`${bannerCss.iconBox}`}>
                      <FontAwesomeIcon
                        icon={cont.icon}
                        className={`${bannerCss.icon}`}
                      />
                    </div>
                  </div>
                  <h4>{cont.title}</h4>
                  <p>{cont.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
