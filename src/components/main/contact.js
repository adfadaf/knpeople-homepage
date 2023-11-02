import { Link } from "react-router-dom";
import contactCss from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <section className={``}>
        <div className={`container`}>
          <div className={`${contactCss.contactWrap}`}>
            <div className={`${contactCss.image}`}>
              <img src="/img/people.png" />
            </div>
            <div className={`${contactCss.content}`}>
              <h4>products inquiry</h4>
              <h3 className="pt-3">
                <strong>케이엔피플 제품</strong>에 대해 무엇이든{" "}
                <strong>문의</strong>하세요!
              </h3>
              <p className="py-3">
                케이엔피플의 다양한 제품 정보, 세일즈 및 마케팅, 기술 제휴 등
                <br />
                다양한 방면에서 궁금하신 점이 있으시면 문의해주세요. 최대한 빠른
                <br />
                답변을 드리겠습니다.
              </p>
              <Link className={`${contactCss.btn}`} to={"/test"}>
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
