import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";

//pages
import Main from "./pages/main";
import Header from "./components/header";
import Footer from "./components/footer";
import Intro from "./pages/company/intro";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/map" element={<Intro />} />
      </Routes>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
