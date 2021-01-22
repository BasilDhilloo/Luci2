import React, { Component } from 'react';
import styles from "./home.module.css";
import bgImage from './../../assets/bg-luci.jpg';
import luciImage from './../../assets/Luci.png';
import signImg from './../../assets/log-in.png'
import loginImg from './../../assets/Group 10.png'

export class Home extends Component {
    render() {
        return (
           <section className={styles.home}>
               <div className="container-fluid" style={{height:"800px"}}>
                   <div className="row" id="rowId">
                        <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                            <div className="row" id={styles.marginClass}>
                                <div className={styles.homeLuci}>
                                    <img className={styles.homeLuciImg} src={luciImage} alt="Lucy Image" />
                                </div>      
                            </div>
                        <div className="row" id={styles.marginClass}>
                            <div className={styles.homeLuciText}>
                                <p> An interactive real estate investting asssistant</p>
                            </div>
                        </div>
                        <div className="row" id={styles.marginClass}>
                            <button className={styles.homeButtonSign}> <img src={signImg} alt="SignIn Image" /> Sign up</button>    
                        </div>

                        <div className="row" id={styles.marginClass}>        
                            <button className={styles.homeButtonLogin}> <img src={loginImg} alt="LogIn Image" /> Login </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Home;
