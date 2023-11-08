import contactCss from "./contact.module.css";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";
import { menu } from "../../db/db";

export default function Contact() {
  const form = useRef();
  const navigate = useNavigate();

  const product = [...menu[1].subMenu];
  product.push({ title: "기타" });

  const formData = [
    {
      label: "성함",
      name: "name",
      type: "text",
    },
    {
      label: "직위",
      name: "position",
      type: "text",
    },
    {
      label: "회사명",
      name: "company",
      type: "text",
    },
    {
      label: "이메일",
      name: "email",
      type: "email",
    },
    {
      label: "연락처",
      name: "number",
      type: "text",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEAMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_API_KEY
      )
      .then(
        (result) => {
          alert("메일 전송이 완료되었습니다.");
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {}, []);

  return (
    <section>
      <div className={`container`}>
        <p>아래 서식을 통해 문의 주시기 바랍니다.</p>
        <p>
          문의하신 내용은 자동으로 담당자에게 전달되며 최대한 빠른 시일 내에
          답변 드리도록 하겠습니다.
        </p>
        <form ref={form} onSubmit={sendEmail} className="">
          <div className="d-flex">
            {formData.map((data, i) => {
              return (
                <div className="" key={i}>
                  <label>{data.label}</label>
                  <input type={data.type} name={data.name} />
                </div>
              );
            })}
            <div className="">
              <label>제품</label>
              <select name="product">
                {product.map((prod, i) => {
                  return (
                    <option key={i} name="product">
                      {prod.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}
