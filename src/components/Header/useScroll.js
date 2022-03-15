import { useState, useEffect } from 'react'

export default function Scroll(initalValue = null) { 
    // const [scrollY, setScrollY] = useState('')
    const [data, setData] = useState(initalValue)

    // 코드 축소화 했지만,, 여전히 메모리 누수가 일어나지 않을까..?
    useEffect(() => {
        window.onscroll = () => {
            scroll()
        }
    }, [])

    // Header 백그라운드 UI
    const scroll = () => {
        const container = document.querySelector('.Award_Container')
        if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            // about 페이지에 있을 경우
            if(container) {
                if(container.getBoundingClientRect().y < 900) {
                    // 800 미만일 경우 애니메이션 On
                    setData({scrollY: 'Header_Container_Show', awardY: true})
                } else if(container.getBoundingClientRect().y > 500) {
                    // 600 초과일 경우 애니메이션 Off
                    setData({scrollY: 'Header_Container_Show', awardY: false})
                }
            // about 페이지에 없을 경우
            } else {
                setData({scrollY: 'Header_Container_Show', awardY: false})   
            }
        } else {
            setData({scrollY: '', awardY: false})
        }
    
        // ul 애니메이션 Y축 좌표
        // const container = document.querySelector('.Award_Container')        
        // if(container) {
        //     if(container.getBoundingClientRect().y < 900) {
        //         // 800 미만일 경우 애니메이션 On
        //         setData({scrollY: data.scrollY, awardY: true})
        //     } else if(container.getBoundingClientRect().y > 500) {
        //         // 600 초과일 경우 애니메이션 Off
        //         setData({scrollY: data.scrollY, awardY: false})
        //     }
        // }
    }

    return data
}