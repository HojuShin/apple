import './scrollslide.css'
import React, { useState, useEffect } from 'react';
import VisionPro_item02 from '../../assets/item02.png';

export default function ScrollSlide() {

    // 현재 스크롤 위치값 저장
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // 현재 스크롤 위치값 상태값 업데이트 함수
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        }

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시 이벤트 리스너 해제
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <article className='article-1'>
            <div className='item-desc'>
                <div className='image-container'>
                    <img
                        src={VisionPro_item02}
                        alt='VisionPro'
                        className={`VisionPro_item02 ${scrollPosition > 500 && scrollPosition <= 1700 ? 'animation' : ''}`}></img>
                </div>
                  <div className={`horizontality ${scrollPosition > 500 && scrollPosition <= 1700 ? 'show' : 'horizontality'}`}></div>
                <div className={`animation-desc ${scrollPosition > 500 && scrollPosition <= 1700 ? 'show' : 'scrollPosition'}`}>
                  
                    <p className='desc-title'>Head bands</p>
                    <p className='desc-text'>The Solo Knit Band provides cushioning, breathability, <br />and stretch,and a Fit Dial lets you adjust Apple Vision Pro<br />precisely to your head. </p>
                </div>
                <div  className={`line ${scrollPosition > 500 && scrollPosition <= 1700 ? 'show' : 'line'}`}></div>
                <div className={`animation-desc-02 ${scrollPosition > 500 && scrollPosition <= 1700 ? 'show' : 'animation-desc-02'}`}>
                    <p className='desc-title'>Power</p>
                    <p className='desc-text'>The external battery supports up to 2 hours of <br /> general use and up to 2.5 hours of video playback. </p>
                </div>
            </div>
        </article >
    );
};