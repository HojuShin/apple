import VisionPro_logo from '../../assets/visionprologo.png'
import VisionPro_item from '../../assets/item01.png'
import ScrollSlide from '../../Component/Scroll/ScrollSlide';
import logo from '../../assets/logo.png';
import product from '../../assets/vison.jpg';
import Models from '../../Component/Models/Models';
import { useState } from 'react';

export default function Home() {

  const [modal, setmodal] = useState(false);

  const open = () => {
    setmodal(!modal);
  }

  return (
    <div className="App">
      <div className='container'>
        <article className='article-0'>
          <nav className='globalNav'>
            <div className='globalNav-link'>
              <a href='#' className='globalNav-list'>스토어</a>
              <a href='#' className='globalNav-list'>Mac</a>
              <a href='#' className='globalNav-list'>iPhone</a>
              <a href='#' className='globalNav-list'>
                <span className="globalNav-logo">
                  <svg height="55" viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
                </span>
              </a>
              <a href='#' className='globalNav-list'>엔터테인먼트</a>
              <a href='#' className='globalNav-list'>악세사리</a>
              <a href='#' className='globalNav-list'>고객지원</a>
            </div>
          </nav>
          <div className='main'>
            <img src={VisionPro_item} alt='VisionPro' className='VisionPro_item'></img>
            <img src={VisionPro_logo} alt='VisionPro_logo' className='VisionPro_logo'></img>
          </div>
        </article>

        <ScrollSlide />

        <div className='modelling-section'>
          <div className='modelling'>
            <div className='modelling-desc'>
              <img
                src={logo}
                alt='appleLogo'
                className='apple_logo'>
              </img>
              <h2>3D 모델링을 통해<br/> <img src={VisionPro_logo} alt='VisionPro_logo' className='VisionPro_logo2'></img> 를 탐색해보세요</h2>
            </div>
            <img
              src={product}
              alt='visonPro'
              className='product'>
            </img>
            <div className='modelling-btn'>
              <button type='button' id='modellingBtn'
                onClick={open}>
                <p>Click</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {modal
        ? (
          <div className='modellingCmp'>
            <div className='modelling-position'>
              <div className='closeBtn' onClick={() => { setmodal(false) }}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                  <path d="M 11.5 11 C 11.372 11 11.243984 11.048984 11.146484 11.146484 C 11.049484 11.244484 11 11.372 11 11.5 C 11 11.628 11.048484 11.755516 11.146484 11.853516 L 24.292969 25 L 11.146484 38.146484 C 10.951484 38.341484 10.951484 38.658516 11.146484 38.853516 C 11.244484 38.950516 11.372 39 11.5 39 C 11.628 39 11.755516 38.951516 11.853516 38.853516 L 25 25.707031 L 38.146484 38.853516 C 38.341484 39.048516 38.658516 39.048516 38.853516 38.853516 C 39.048516 38.657516 39.049516 38.342484 38.853516 38.146484 L 25.707031 25 L 38.853516 11.853516 C 39.048516 11.658516 39.048516 11.341484 38.853516 11.146484 C 38.657516 10.951484 38.342484 10.950484 38.146484 11.146484 L 25 24.292969 L 11.853516 11.146484 C 11.756016 11.048984 11.628 11 11.5 11 z"></path>
                </svg>
              </div>
              <Models />
            </div>
          </div>
        )
        : ''
      }
      <footer id='footer'>
        <div className='footer-section'>
          <div className='footer-top'>
            <span className="globalNav-logo-footer">
              <svg xmlns="http://www.w3.org/2000/svg">
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
              </svg>
            </span>
            <span className='footer-top-text'>
              Apple Vision Pro
            </span>
          </div>
          <div className='footer-middle'>
            <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
          </div>
          <div className='footer-bottom'>
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div >
  );
}


