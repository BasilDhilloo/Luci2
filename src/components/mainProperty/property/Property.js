import React, { Component } from 'react'
import HeaderTwo from '../../header/HeaderTwo';
import Sidenav from '../sidenav/Sidenav';
// import Footer from '../../footer/Footer'
import styles from './property.module.css'

class PropertyOne extends Component {
    render() {
        return (
            <div>
                <HeaderTwo />
                <Sidenav />
                
                <div className={styles.fullHeight}>
                    <div>
                        <h1> This is property component</h1>
                    </div>
                </div>
            </div>    
        ) 
       }
    }

export default PropertyOne;