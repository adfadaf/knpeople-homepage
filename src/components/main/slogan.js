import sloganCss from "./slogan.module.css";
export default function Slogan() {
  return (
    <section className={` ${sloganCss.sloganBg}`}>
      <div className={`container`}>
        <div className={`${sloganCss.contentBox}`}>
          <h4>
            경험을 가치있게 만드는 것. <br />
            그것이 바로 케이엔피플에 핵심 가치입니다.
          </h4>
          <p>
            고객과 함께 이야기를 나누며 만들어 갑니다. <br />
            경험을 공유하기 위한 케이엔피플의 고민과 회사소식을 공유합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
