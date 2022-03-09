import './App.css';
import './fonts/font.css';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Together from './components/Together/Together';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import Home from './page/home/Home';
import About from './page/about/About';
import Business from './page/business/Business';
import Career from './page/career/Career';
import ScrollToTop from './router/ScrollToTop';
import NotFound from './router/NotFound';

import { useState } from 'react';

function App() {

  // 태블릿/모바일 버전 모달(Header 메뉴) 상태 관리
  const [modal, setModal] = useState("Modal_Hiden")

   // 모달 ClassName 제어 ("" / Modal_Hiden) 
   const handleModal = (value) => {
    setModal(value)
  }


  // 수상기록 ul 엘리먼트에 따른 Y축 스크롤 상태 관리
  const [award, setAward] = useState(false)
  
  // 수상 기록 애니메이션 제어(true / false)
  const handleAward = (e) => {
    setAward(e)
  }


  // props
  const [partnerY, setParterY] = useState(0)

  // 
  const handleParterY = (e) => {
    setParterY(e)
    console.log("app.js에서 찍힌거",e)
  }

  return (
    <HashRouter>
 
      <ScrollToTop partnerY={partnerY}/>
      <div className="App">
        <Header handleModal={handleModal} handleAward={handleAward}/>
        <Routes>
          <Route exact path="/" element={<Home handleParterY={handleParterY} partnerY={partnerY}/>} />
          <Route  path="/about" element={<About award={award} partnerY={partnerY} handleParterY={handleParterY}/>} />
          <Route  path="/business" element={<Business/>} />
          <Route  path="/career" element={<Career/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Together/>
        <Footer/>
        <Modal Modal_Hiden={modal} handleModal={handleModal}/>
      </div>
    </HashRouter>
  );
}

export default App;
