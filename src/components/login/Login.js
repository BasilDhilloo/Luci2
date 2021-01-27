import React from 'react'
import styles from './login.module.css'
import signImg from './../../../src/assets/log-in.png'
import loginImg from './../../../src/assets/Group 10.png'
import luciImage from './../../../src/assets/LuciLogin.png';
import bgImage from './../../../src/assets/background.jpeg';
import Header from './../header/Header'
import Footer from '../footer/Footer';
import {Link} from "react-router-dom"


const Login = () => {
    return (
        <div style={{backgroundColor:"whitez"}} className>
             <Header />
        <div className={styles.color}>
                <img src={bgImage} alt="Background Image" />
                <div className={styles.center}>
                    {/* <img src={bgImage} alt="Background Image" /> */}

                  <div className={styles.loginDiv}>
                        <form>
                            <div>
                                <img src={luciImage} alt="Avatar" />
                                <p> An interactive real estate investing assistant</p>
                            </div>

                            <div>
                                <li><input className={styles.loginInput} id={styles.userIcon} style={{textIndent:"17px"}} type="text" placeholder="User Name" /></li>
                                <li><input className={styles.loginInput} id={styles.passIcon} style={{textIndent:"17px", marginTop:"10px"}} type="password" placeholder="Password" /></li>
                            </div>
                            
                            <div className="container" style={{marginLeft:"185px"}}>
                                <div className="row" id={styles.marginClass}>
                                    <button component={Link} to="/signin" className={styles.homeButtonSign}> <img src={signImg} alt="SignIn Image" /> Sign up</button>
                                </div>

                                <div className="row" id={styles.marginClass}>
                                    <button className={styles.homeButtonLogin}> <img className={styles.buttonIcon} src={loginImg} alt="LogIn Image" /> Login </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
       
    )
}

export default Login
