import './login.css'
import googleImage from './assets/Google.png'
import logo from './assets/logo.png'
import frame from './assets/Frame.png'

const Login = () => {
    return(
    <login className="login">
        <div className="row">
          <div className="column1">
          <div className="frame">
          <img src={frame} />
          <div className="logo">
            <img src={logo} />
            </div>
         </div>
    </div>

        <div className="column2">
            <div className="container">
                <div className="header">
                    <h1>Welcome Back👋🏽</h1> 
                    <p className='space'>Creating and Learning Experience at your Doorstep!</p>
                </div>
                 
                    <div className="form">
                        <p>Let Us Meet You</p>
                   
                    <div className="input">
                        <input type="email" name="Email" placeholder="Email" /> 
                    </div>
                    <div className="input">
                        <input type="password" name="password" placeholder="password" /> 
                    </div>
                    <div className="checkbox">
                    <input type="checkbox"  />
                     &nbsp; Yes, I would like to receive emails about future updates, emmerging partnership, community information and so on
                     <br/><br/>
                    I agree to the <a>Term of Use</a> and <a>Privacy Policy</a>
                    </div>
                    <br/> <br />
                    <div className="submitContainer">
                        <div className="class">
                            Sign In
                        </div>
                        <br />
                        <div className="submitContainer-2">
                            <div className="class-2">
                                Sign Up
                        </div>
                            </div>
                          
                <br/> <br/>
                <p> <center> Or </center></p>
                            <div className="submitContainer">
                            <div className="class-2">
                            <div className="img"><img src={googleImage} /></div>  <p> &nbsp; Continue with Google </p>
                            </div>
                            </div>
                            </div>
                </div>
            </div>
        </div>
    </div>
</login>
    )
}

export default Login;