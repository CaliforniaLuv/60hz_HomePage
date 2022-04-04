import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useScroll from "./useScroll";
import "./Header.css";

function Header({
  handleModal,
  handleAward,
  handleModalBool,
  MdCheck,
  nav,
  handleNav,
  setLinkScroll,
}) {
  const data = useScroll({
    scrollY: "",
    awardY: false,
  });
  // Header 상단 메뉴 Click에 의한 state 렌더링 관리(useEffect)
  const [click, setClick] = useState(0);

  useEffect(() => {
    if (MdCheck !== "") {
      setClick(click + 1);
    } else if (MdCheck === "home") {
      openClick(MdCheck);
    }
  }, [MdCheck]);

  useEffect(() => {
    handleAward(data.awardY);
  }, [data.awardY]);

  const openClick = (value) => {
    setLinkScroll(true);
    if (value === "check") {
      handleModalBool(true);
      handleModal("");
    }
    // 헤더 메뉴
    handleNav(value);
  };

  return (
    <>
      <header className={`Header_Container ${data.scrollY}`}>
        <div>
          <Link to="/" onClick={() => openClick(null)}>
            <img src="./logo/60hz.svg" alt="60hz_Logo" />
          </Link>
          <img
            onClick={() => openClick("check")}
            src="./icon/menu.svg"
            alt="Menu_Icon"
          />
        </div>
        <nav className="Header_Nav_Box">
          <div>
            <a
              href="https://map.60hz.io/index.html"
              target="_blank"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              햇빛바람지도
            </a>
          </div>
          <div style={{ width: "65px" }}>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => openClick("Header_About")}
            >
              <p
                style={{
                  fontFamily: nav === "Header_About" ? "SUIT-SemiBold" : "",
                }}
              >
                ABOUT
              </p>
            </Link>
          </div>
          <div style={{ width: "95px" }}>
            <Link
              to="/business"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => openClick("Header_Business")}
            >
              <p
                style={{
                  fontFamily: nav === "Header_Business" ? "SUIT-SemiBold" : "",
                }}
              >
                BUSINESS
              </p>
            </Link>
          </div>
          <div style={{ width: "77px" }}>
            <Link
              to="/career"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => openClick("Header_Career")}
            >
              <p
                style={{
                  fontFamily: nav === "Header_Career" ? "SUIT-SemiBold" : "",
                }}
              >
                CAREER
              </p>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
