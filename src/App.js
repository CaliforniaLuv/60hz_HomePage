import './App.css';
import './fonts/font.css';
import Header from './components/Header/Header';
import Together from './components/Together/Together';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import Home from './page/home/Home';
import About from './page/about/About';

import { useState } from 'react';

function App() {
  const [modal, setModal] = useState("Modal_Hiden")

  const handleModal = (value) => {
    setModal(value)
  }
  return (
    <div className="App">
      <Header handleModal={handleModal}/>
      <About/>
      <Together/>
      <Footer/>
      <Modal Modal_Hiden={modal} handleModal={handleModal}/>
    </div>
  );
}

export default App;
