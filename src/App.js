import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";

//pages
import Main from "./pages/main";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
