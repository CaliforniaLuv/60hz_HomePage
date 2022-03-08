import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


function NotFound() {
    
    const navigate = useNavigate();

    
    useEffect(() => {
        return navigate('/')
    }, [])
    

    return null;
}

export default NotFound