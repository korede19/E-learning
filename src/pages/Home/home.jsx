import './homepage.css'
import logo from './assets/logo.png'
import logo2 from './assets/logo 2.png'
import darkmode from './assets/darkmode.png'
import darkmode2 from './assets/darkmode-2.png'

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
        </div>
     );
}
 
export default Home;