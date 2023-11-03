import companyCss from "./company.module.css";

export default function Company() {
  return (
    <>
      <section className={``}>
        <div className={`container`}>
          <div className={`${companyCss.companyWrap}`}>
            <div className={`${companyCss.title}`}>
              <h1>knpeople</h1>
              <p>
                풍부한 경험을 바탕으로 전반적인 IT 분야에 최고의 서비스를
                제공합니다.
              </p>
            </div>
            <div className={`${companyCss.content}`}>
              <p>
                (주)케이엔피플은 시스템/네트워크/보안 솔루션들의 개발과 공급, IT
                컨설팅, 유지보수에 이르기까지 IT 비즈니스에 필요한 전반적인
                서비스를 제공하는 IT 솔루션 전문 기업입니다.
              </p>
              <p>
                (주)케이엔피플은 클라우드 및 인공지능으로 대변되고 있는 최근의
                IT 흐름에서 그동안의 경험과 노하우로 IT 시장변화를 분석하여,
                다가오는 차세대 IT 산업에서도 여러분의 IT 비즈니스에 최고의
                가치를 창출해낼 수 있는 최고의 파트너로 함께할 것 입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
