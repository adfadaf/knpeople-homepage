import { business } from "../../db/db";
import businessCss from "./business.module.css";

export default function Buisiness() {
  return (
    <>
      <section className={`${businessCss.business}`}>
        <div className={`container`}>
          <h3 className={`${businessCss.title}`}>business</h3>
          <span className={`${businessCss.subTitle}`}>사업분야</span>
          <div className={`${businessCss.wrap} py-4`}>
            {business.map((business, i) => {
              return (
                <div className={`${businessCss.content}`} key={i}>
                  <h4>{business.title}</h4>
                  <p>{business.content}</p>
                  <div className={`${businessCss.icon}`}>
                    <div className={`${businessCss.iconBox}`}>
                      <img src={`/img/${business.icon}.png`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
