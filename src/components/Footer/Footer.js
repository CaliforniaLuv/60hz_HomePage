import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    return(
        <footer className='Footer_Container'>
            <section className='Footer_List_Box'>
                <div>
                    <div>
                        <h3>채용문의</h3>
                        <Link
                            to='#'
                            onClick={(e) => {
                                window.location = "mailto:hello@60hz.io";
                                e.preventDefault();
                            }}
                            style={{ textDecoration: "none", color: "black"}}
                        >
                            <span>admin@60hz.io</span>
                        </Link>
                    </div>
                    <div>
                        <h3>기타문의</h3>
                        <Link
                            to='#'
                            onClick={(e) => {
                                window.location = "mailto:db.jung@60hz.io";
                                e.preventDefault();
                            }}
                            style={{ textDecoration: "none", color: "black"}}
                        >
                            <span>db.jung@60hz.io</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='Footer_Infor_Box'>
                        <h3>식스티헤르츠</h3>
                        <Link to="/about"
                            style={{ textDecoration: "none", color: "black", textAlign: "left" }}
                        >
                            <span>ABOUT</span>
                        </Link>
                        <Link to="/business"
                            style={{ textDecoration: "none", color: "black", textAlign: "left" }}
                        >
                            <span>BUSINESS</span>
                        </Link>
                        <Link to="/career"
                            style={{ textDecoration: "none", color: "black", textAlign: "left" }}
                        >
                            <span>CAREER</span>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='Footer_Company_Box'>
                <div>
                    <span className='Footer_Company_name'>
                        식스티헤르츠 주식회사
                    </span>
                    <span>
                        | 대표: 김종규
                    </span>
                </div>
                <div>
                    <span>사업자등록번호: 878-88-01768</span>
                </div>
                <div>
                    <span>기업부설연구소: 06168 서울시 강남구 테헤란로 507, 5층 </span>
                </div>
                <div>
                    <span>06083 서울특별시 강남구 영동대로 602 6층 에프111 </span>
                </div>
            </section>
        </footer>
    )
}

export default Footer