import './Partner.css'


function Partner() {
    return(
        <section className="Partner_Container">
            <div className="Partner_Box">
                <span>
                    엑셀러레이팅
                </span>
                <img src="./logo_png/ESG.png"/>
                <img src="./logo_png/LG.png"/>
                <img src="./logo_png/온드림.png"/>
                <img src="./logo_png/신한.png"/>
                <img src="./logo_png/Kwater.png"/>
            </div>
            <div className="Partner_Box">
                <span>
                    투자사
                </span>
                <img src="./logo_png/소풍.png"/>
                <img src="./logo_png/mysc.png"/>
                <img src="./logo_png/제로원.png"/>
            </div>
            <div className="Partner_Box">
                <span>
                    파트너
                </span>
                <img src="./logo_png/굿네이버스.png"/>
                <img src="./logo_png/그리드위즈.png"/>
                <img className='Partner_Box_Img' src="./logo_png/인업스.png"/>
                <img className='Partner_Box_Mobile_Inups' src="./logo_png/인업스_2.svg"/>
            </div>
            <div className="Partner_Box">
                <span>
                    소셜 임팩트
                </span>
                <img src="./logo_png/임팩트.png"/>
                <img src="./logo_png/소셜혁신연구소.png"/>
                <img className='Partner_Box_Img' src="./logo_png/유쾌한반란.png"/>
                <img className='Partner_Box_Mobile' src="./logo_png/유쾌한반란_2.svg"/>
            </div>
        </section>
    )
}

export default Partner