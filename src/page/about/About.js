import "./About.css";
import Master_Plan from "../../components/About/Master_Plan/Master_Plan";
import Awards from "../../components/About/Award/Award";
import Partner from "../../components/About/Partner/Partner";
import Member from "../../components/About/Member/Member";
import { useEffect, useState } from "react";

function About({ award, handleNav }) {
  const [navText, setNavText] = useState("Header_About");

  useEffect(() => {
    handleNav(navText);
  }, []);

  return (
    <section>
      <main className="About_Intro_Box">
        <p>
          재생 에너지로 <br className="About_Br" />
          지구를 지키는 방법을 <br className="About_Br" />
          연구합니다.
        </p>
        <span>
          전세계 기후 변화를 막기 위해 <br className="About_Br" /> 재생에너지를
          늘리는 방안으로{" "}
        </span>
        <br className="About_Br_De" />
        <span>
          다양한 종류의 분산자원을 <br className="About_Br" /> IT기술로
          연결하고, 예측 및 관리 가능하도록 <br className="About_Br" />{" "}
          가상발전소를 구축합니다.
        </span>
        <div className="About_Intro_Img">
          <img
            className="About_Img_Desk"
            src="./ilerst/메인이미지.png"
            alt="Main_Img"
          />
          <img
            className="About_Img_Tab"
            src="./ilerst/메인이미지_태블릿.png"
            alt="Main_Mob_Img"
          />
        </div>
        <div className="About_Plan_Box">
          <Master_Plan />
        </div>
      </main>
      <div className="About_Award_Box">
        <Awards award={award} />
      </div>
      <div className="About_Partner_Box" id="scroll-section1">
        <div>
          <h1>함께하는 기업들</h1>
          <span>2021년 9월 28일 기준</span>
          <Partner />
        </div>
      </div>
      <div className="About_Member_Box">
        <h1>식스티헤르츠 멤버들</h1>
        <Member />
      </div>
    </section>
  );
}

export default About;
