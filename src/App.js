import "./App.css";
import "./fonts/font.css";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Together from "./components/Together/Together";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Business from "./page/business/Business";
import Career from "./page/career/Career";
import ScrollToTop from "./router/ScrollToTop";
import NotFound from "./router/NotFound";

import { useState } from "react";

function App() {
  // 태블릿/모바일 버전 모달(Header 메뉴) 상태 관리
  const [modal, setModal] = useState("Modal_Hiden");
  const [modalBool, setModalBool] = useState(true);

  // 모달 ClassName 제어 ("" / Modal_Hiden)
  const handleModal = (value) => {
    setModal(value);
  };

  // 모달 x축 반응형에 따라 애니메이션 효과가 계속 보이는 관계로 settimeout을 통해
  // 직접 bool 기준으로 0.1초 사이에 제거함
  const handleModalBool = (value) => {
    setTimeout(() => {
      setModalBool(value);
    }, 100);
  };

  //
  const [MdCheck, setMdCheck] = useState("");

  const handleMdCheck = (value) => {
    setMdCheck(value);
  };

  // 헤더 상단 메뉴 현위치 지정
  const [nav, setNav] = useState("");

  const handleNav = (value) => {
    setNav(value);
  };

  // 수상기록 ul 엘리먼트에 따른 Y축 스크롤 상태 관리
  const [award, setAward] = useState(false);

  // 수상 기록 애니메이션 제어(true / false)
  const handleAward = (e) => {
    setAward(e);
  };

  // link 이동 효과 상태 관리
  const [linkScroll, setLinkScroll] = useState(false);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {linkScroll ? <ScrollToTop /> : null}

      <div className="App">
        <Header
          handleModal={handleModal}
          handleAward={handleAward}
          handleModalBool={handleModalBool}
          MdCheck={MdCheck}
          nav={nav}
          handleNav={handleNav}
          setLinkScroll={setLinkScroll}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home handleNav={handleNav} setLinkScroll={setLinkScroll} />
            }
          />
          <Route
            path="/about"
            element={<About award={award} handleNav={handleNav} />}
          />
          <Route
            path="/business"
            element={<Business handleNav={handleNav} />}
          />
          <Route path="/career" element={<Career handleNav={handleNav} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Together />
        <Footer setLinkScroll={setLinkScroll} />
        {modalBool ? (
          <Modal
            Modal_Hiden={modal}
            handleModal={handleModal}
            handleModalBool={handleModalBool}
            handleMdCheck={handleMdCheck}
          />
        ) : null}
      </div>
    </BrowserRouter>
  );
}

export default App;
