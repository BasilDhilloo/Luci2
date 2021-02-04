import React, {Component} from 'react'
import styles from './property.module.css'
import "./property.css"
import calIMage from './../../../assets/calimage.png'
import HeaderTwo from "../../header/HeaderTwo";
import Footer from "../../footer/Footer";
import SidenavTwoLong from "../sidenav2/SidenavTwoLong";
import 'antd/dist/antd.css';
import {Layout} from "antd";


const {Content} = Layout;


class Property extends Component {
  render() {
    return (
      <div>

        <HeaderTwo/>

        <Layout>
          <Content style={{padding: '0 50px'}}>
            <Layout className="site-layout-background" style={{padding: '24px 0'}}>

              <SidenavTwoLong/>


              <Content className="ant-layout-content-second">

                <div className="flex-container">
                  <div className="flex-child">
                    {/* <div class={styles.row}> */}

                    <div className="row">
                      <label>Property Address</label>
                      <input type="text"/>
                    </div>

                    <div className="row">
                      <label htmlFor="State">State</label>
                      <input list="States" name="state" id="state" placeholder="AK"
                             id={styles.inputIcon}/>
                      <datalist id="States">
                        <option value="Giorgia"/>
                        <option value="New York"/>
                        <option value="Washington"/>
                        <option value="Utah"/>
                        <option value="Ohio"/>
                      </datalist>
                    </div>


                    <div className="row">
                      <label>Beds</label>
                      <input type="text"/>
                    </div>

                    <div className="row">
                      <label>Lot -size</label>
                      <input type="text"/>
                    </div>

                    <div className="row">
                      <label>Prior Year Taxes USD</label>
                      <input id={styles.dollarIcon} type="text"/>
                    </div>


                  </div>

                  <div className="flex-child">
                    <div className="row">
                      <label>City</label>
                      <input type="text"/>
                    </div>

                    <div className="row">
                      <label>Zip Code</label>
                      <input type="number"/>

                    </div>

                    {/*<div className="row">
                            <label>Landload Insurance USD</label>
                            <input id={styles.dollarIcon} type="text"/>
                        </div> */}

                    <div className="row">
                      <label>Baths</label>
                      <input type="text"/>
                    </div>

                    <div className="row">
                      <label>Property Sq. ft</label>
                      <input type="text"/>
                    </div>


                  </div>
                </div>
                <br/>


                <div className="flex-container">

                  <div className="other-child">
                    <button className="flexbutton">
                      {/* <input type="file" />  */}
                      Upload Image(s)
                    </button>
                    <img className="imgDiv" src={calIMage}/>
                  </div>


                </div>


              </Content>
            </Layout>
          </Content>
        </Layout>
        <Footer/>


      </div>
    )
  }
}

export default Property;
