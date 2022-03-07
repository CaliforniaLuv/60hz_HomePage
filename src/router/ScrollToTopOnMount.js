import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

function ScrollToTopOnMount({props}) {
const { location } = useLocation();
  useEffect(() => {
    window.scrollTo(800, props);
  }, [location]);

  console.log("투마운트")
  return null
}

export default ScrollToTopOnMount;