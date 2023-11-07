import introCss from "./intro.module.css";
import { company } from "../../db/db";

export default function Intro() {
  const info = [
    {
      title: "회사명",
      data: company.company,
    },
    {
      title: "설립일",
      data: company.since,
    },
    {
      title: "사업분야",
      data: company.business,
    },
    {
      title: "회사주소",
      data: company.address,
    },
    {
      title: "대표 연락처",
      data: company.tel,
    },
    {
      title: "대표 이메일",
      data: company.email,
    },
  ];
  return (
    <section>
      <div className={`container`}>
        <div className={` ${introCss.wrap}`}>
          <h3>
            <strong>케이엔피플</strong>은 IT 전문 기술을 바탕으로 다양한 사업을
            수행 경험을 가진 기업입니다.
          </h3>
          <table className={`${introCss.table}`}>
            <caption>기업정보</caption>
            <tbody>
              {info.map((companyIfno, i) => {
                return (
                  <tr key={i}>
                    <th>{companyIfno.title}</th>
                    <td>{companyIfno.data}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={`${introCss.contentBox}`}>
            <h2 className={`position-relative`}>
              <strong>케이엔피플</strong>은 글로벌 기업 IBM의 한국 파트너로
              <br />
              신뢰할 수 있는 소프트웨어, 솔루션을 제공 및 개발합니다.
            </h2>
            <img src="/img/people.png" alt="knp peoples" />
            <p className={`${introCss.content}`}>
              케이엔피플은 Global IT기업 IBM의 한국 파트너로써 IBM Software
              Business 와 B2C 모바일
              <br />
              Application 분야의 사업을 하고 있습니다. 저희 회사는 최고의 IT,
              최고의 솔루션 제공 업체가 아닙니다.
              <br />
              최고의 기술력, 최고의 모바일 분야 업체 또한 아닙니다.
              <br />
              <br />
              하지만 한번 맺은 인연 끝까지 책임지고 신뢰할 수 있는 그리고
              사람냄새 나는 <br />
              그런 Software 솔루션 제공 및 개발 업체입니다. 현재의 수준은 결코
              최고라 할 수 없지만 <br />
              World First Class 가 될 수 있는 잠재력이 충분한 회사입니다.
              <br />
              <br />
              십년수목백년수인(十年樹木百年樹人), 10년을 내다보며 나무를 심고
              100년을 내다보며 사람을 심는다의 <br />
              마음으로 사람을 키우고 기업을 키우겠습니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
