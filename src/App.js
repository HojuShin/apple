import './App.css';
import VisionPro_logo from './assets/visionprologo.png'
import VisionPro_item from './assets/item01.png'
import ScrollSlide from './Component/Scroll/ScrollSlide';
import logo from './assets/logo.png'
import product from './assets/product.png'

function App() {
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
              <h2>3D 모델링을 통해 <img src={VisionPro_logo} alt='VisionPro_logo' className='VisionPro_logo2'></img> 를 탐색해보세요</h2>
            </div>
            <img
              src={product}
              alt='visonPro'
              className='product'>
            </img>
            <div className='modelling-btn'>
              <button type='button' id='modellingBtn'>
                <p>Click</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer id='footer'>
        {/* 내용 추가 */}
      </footer>

    </div >
  );
}

export default App;
