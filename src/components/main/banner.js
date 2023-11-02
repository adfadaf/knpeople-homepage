import { banner } from "../../db/db";
import bannerCss from "./banner.module.css";
export default function Banner() {
  return (
    <>
      <section className={`${bannerCss.banner}`}>
        <div className={`container`}>
          <div>
            배너 예정
            <div>
              <p>
                <h3>We Make Our SOLID VALUES</h3>
                <div>이미지</div>
                <p>
                  차이를 만드는 다름. 케이엔피플은 우리만의 견고한 가치를
                  만듭니다.
                </p>
              </p>
            </div>
          </div>

          <div className={`${bannerCss.contentWrap}`}>
            {banner.map((cont, i) => {
              return (
                <div className={`${bannerCss.content}`}>
                  <div>아이콘</div>
                  <h4>{cont.title}</h4>
                  <p>{cont.content}</p>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
      </section>
    </>
  );
}
