import { company } from "../db/db";
import footerCss from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${footerCss.footer}`}>
        <div className="container">
          <div className={`${footerCss.footerWrap}`}>
            <div className={`${footerCss.logoBox}`}>
              <img src="/logo_white.png" />
            </div>
            <div className={`${footerCss.footerInfo}`}>
              <h2>{company.company}</h2>
              <address>
                <p>
                  대표이사 : {company.ceo} | {company.address}
                </p>
                <p>
                  사업자등록번호 : {company.businessNum} | TEL : {company.tel} |
                  E_mail : {company.email}
                </p>
                <p>Copyright© KNPEOPLE. All Right Rederved.</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
