import React from 'react'
import styles from './about.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer';

function About() {
    return (
        <div style={{backgroundColor:"white"}}>
            <Header />
                <div className={styles.color}>
                    <p className={styles.teamText1}> About </p>
                    {/* <img src={bgImage} alt="Background Image" /> */}
                        <div className={styles.center}>
                            <div className={styles.loginDiv}>
                                <p className={styles.loginDivp1}>
                                Luci is a real estate investing solution that is taylored to provide services from start 
                                to finish of a property investment Luci will provide anelysis of a potential property, calculat 
                                projecte rturns, track the development of the investment, and even calculate the actual returns of 
                                the investment.
                                </p>

                                <div className={styles.loginDivp2}>
                                    <p>
                                        <b>Investment strategies</b> that <b>LUCI</b> can handle: <br />
                                        1. <b>Buy</b> and <b>Sold</b><br />
                                        2. New Construction - <b>Sell</b><br />
                                        3. New construction - <b>Sold </b><br />
                                        4. <b>Fix</b> and <b> FLIP</b><br />
                                        5. <b>whole saling . </b><br />
                                    <br /> <br /> Automate the backend of real estate investing .
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                </div>
            <Footer />
        </div>
    )
}

export default About;
