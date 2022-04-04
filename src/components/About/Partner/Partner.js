import "./Partner.css";

function Partner() {
  return (
    <section className="Partner_Container">
      <div className="Partner_Box">
        <span>엑셀러레이팅</span>
        <img src="./logo_png/ESG.png" alt="ESG_Logo" />
        <img src="./logo_png/LG.png" alt="LG_Logo" />
        <img src="./logo_png/온드림.png" alt="온드림_Logo" />
        <img src="./logo_png/신한.png" alt="신한_Logo" />
        <img src="./logo_png/Kwater.png" alt="Kwater_Logo" />
      </div>
      <div className="Partner_Box">
        <span>투자사</span>
        <img src="./logo_png/소풍.png" alt="소풍_Logo" />
        <img src="./logo_png/mysc.png" alt="mysc_Logo" />
        <img src="./logo_png/제로원.png" alt="제로원_Logo" />
      </div>
      <div className="Partner_Box">
        <span>파트너</span>
        <img src="./logo_png/굿네이버스.png" alt="굿네이버스_Logo" />
        <img src="./logo_png/그리드위즈.png" alt="그리드위즈_Logo" />
        <img
          className="Partner_Box_Img"
          src="./logo_png/인업스.png"
          alt="인업스_Logo"
        />
        <img
          className="Partner_Box_Mobile_Inups"
          src="./logo_png/인업스_2.svg"
          alt="인업스_Mob_Logo"
        />
      </div>
      <div className="Partner_Box">
        <span>소셜 임팩트</span>
        <img src="./logo_png/임팩트.png" alt="임팩트_Logo" />
        <img src="./logo_png/소셜혁신연구소.png" alt="소셜혁신연구소_Logo" />
        <img
          className="Partner_Box_Img"
          src="./logo_png/유쾌한반란.png"
          alt="유쾌한반란_Logo"
        />
        <img
          className="Partner_Box_Mobile"
          src="./logo_png/유쾌한반란_2.svg"
          alt="유쾌한반란_Mob_Logo"
        />
      </div>
    </section>
  );
}

export default Partner;
