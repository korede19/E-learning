import './homepage.css'
import logo from './assets/logo.png'
import logo2 from './assets/logo 2.png'
import darkmode from './assets/darkmode.png'
import darkmode2 from './assets/darkmode-2.png'
import hero from './assets/hero image.png'
import heroImage from './assets/heroImages.png'
import sponsors from './assets/sponsors.png'
import image_1 from './assets/image_1.png'

const Home = () => {
    return ( 
        <div className="container_home">
            <div class="navbar">
      <div class="nav-logo">
        <a href="#"><img src={logo2} /> </a>
      </div>
      <div class="nav-items">
        <ul>
          <li><a href="#"> Home </a></li>
          <li><a href="#"> Courses </a></li>
          <li><a href="#"> Pricing </a></li>
          <li><a href="#"> Testimonials </a></li>
        </ul>
      </div>
      <img src={darkmode2} style={{width:'30px', cursor:'pointer'}} />
      <div class=".search-form">
      <div class="search-wrapper">
        <input class="search-input" type="text" placeholder='Search for course' /> &nbsp;    
        <button class="search-button" type="button" >Search</button> 
</div>
      </div>
      <div id="hamburger-menu">&#9776;</div>
    </div>

    <div id="mobile-menu">
      <div class="mobile-nav-items">
        <ul>
          <li><a href="#"> Home </a></li>
          <li><a href="#"> Courses </a></li>
          <li><a href="#"> Pricing </a></li>
          <li><a href="#"> Testimonials </a></li>
        </ul>
      </div>
      <div class="mobile-nav-button">
        <div class="anim-layer"></div>
        <a href="#">Sign Up</a>
      </div>
      <div id="hamburger-cross">&#10006;</div>
    </div>
    <div className="heroSection">
      <img src={hero} style={{width: '53px',
      height: '41px',
      top: '15px',
      left: '465px',
      position: 'relative',
  }} />
      <h1 class="heroHeader">
      Gain knowledge from <a class='eText'> expert instructors </a> <br />
      at your own pace, anytime and anywhere
      </h1>
      <p class="heroText">
      Unlock your potential with our engaging e-learning platform. Access high-quality courses anytime, anywhere and achieve your personal and professional goals with ease.
      </p>
    </div>
    <img src={hero} style={{width: '53px',
      height: '41px',
      top: '180px',
      left: '400px',
      position: 'relative',
  }} />
    <div className="heroButton">
      Start Learning
    </div>
<div className="heroimages">
    <img src={heroImage} style={{
      padding:'0px',
      margin: '0px',
      width: "100%",
    }} />
</div>
<div className='sponsors'>
<img src={sponsors} style={{
      padding:'0px',
      margin: '0px',
      width: "100%",
    }} />
</div>
<div class="wrapper">
		<div class="box a">
      <div className="head_two">
      Transform yourself by learning at your convenience
      </div>
      <div className="Text_2">
      Our goal is not only to provide students with education and experiences that prepare them for a successful career, but also to support them in achieving success in their chosen field by encouraging them to explore their passions and become leaders in their field.
      </div>
      <div className="Text_3">
      Applications are now open
      </div>
      <br /><br />
      <div className="Button_2">
      Apply Now
    </div>
    </div>
		<div class="box b">
      <img src={image_1} style={{
        borderRadius: '4px',
      }} />
    </div>

</div>
  </div>
     );
}
 
export default Home;