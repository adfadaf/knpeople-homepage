//main components
import Banner from "../components/main/banner";
import Contact from "../components/main/contact";
import mainCss from "./main.module.css";
import Buisiness from "../components/main/business";
import Slogan from "../components/main/slogan";
import Company from "../components/main/company";

export default function Main() {
  return (
    <>
      <main>
        <Banner />
        <Buisiness />
        <Company />
        <Slogan />
        <Contact />
      </main>
    </>
  );
}
