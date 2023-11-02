import { contact } from "../../db/db";
import businessCss from "./business.module.css";

export default function Buisiness() {
  return (
    <>
      <section className={`${businessCss.business}`}>
        <div className={`container`}>
          <h2>Business</h2>
          <h2>사업분야</h2>
          <div className={`${businessCss.wrap}`}>
            {contact.map((contact, i) => {
              return (
                <div className={`${businessCss.content}`}>
                  <h4>{contact.title}</h4>
                  <p>{contact.content}</p>
                  <div>아이콘</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
