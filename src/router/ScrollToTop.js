import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({partnerY}) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, partnerY !== 0  ? 0 : partnerY);
    }, [pathname]);

     console.log("아 뭐지", partnerY)
    return null;
};

export default ScrollToTop