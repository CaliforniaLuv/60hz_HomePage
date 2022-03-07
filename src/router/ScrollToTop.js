import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({partnerY}) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, partnerY === 0  ? 0 : 1929.5);
    }, [pathname]);

     console.log("scrollToTOp에서 찍힌거", partnerY)
    return null;
};

export default ScrollToTop