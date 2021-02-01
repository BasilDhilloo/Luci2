import React, { Component } from 'react'
import Footer from '../../footer/Footer';
import HeaderTwo from '../../header/HeaderTwo';
import Sidenav from '../sidenav/Sidenav';
import SidenavTwo from '../sidenav2/SidenavTwo';
import SideNavThree from '../sidenavthree/SideNavThree';
// import Footer from '../../footer/Footer'
import styles from './property.module.css'

class Property extends Component {
    render() {
        return (
            <div>
                <HeaderTwo />
                {/* <Sidenav /> */}
                {/* <Sidenav pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
                {/* <SideNavThree /> */}
                <SidenavTwo />
                {/* <div className={styles.fullHeight}>
                    <div>
                        <h1> This is property component</h1>
                    </div>
                </div> */}
                <Footer />
            </div>    
        ) 
       }
    }

export default Property;