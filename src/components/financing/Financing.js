import React from 'react'
import HeaderTwo from "../header/HeaderTwo";
import Footer from "../footer/Footer";
import SidenavTwo from "../mainProperty/sidenav2/SidenavTwo";
import 'antd/dist/antd.css';
import {Layout} from "antd";
import styles from '../mainProperty/property/property.module.css'

const {Content} = Layout;

function Financing() {

  return (


    <div style={{background:'white'}}>


      <HeaderTwo/>

      <Layout>
        <Content style={{padding: '0 50px'}}>
          <Layout className="site-layout-background" style={{padding: '24px 0'}}>

            <SidenavTwo/>

            <Content className="ant-layout-content-second">

              <div className={"flex-container"}>
                <div className={"flex-child"}>

                  <div className="row">
                    <label>Financing The Renovation</label>
                    <input list="RenovationOptions" id={styles.inputIcon}/>
                    <datalist id={"RenovationOptions"}>
                      <option value={"value1"}/>
                      <option value={"value2"}/>
                      <option value={"value3"}/>
                    </datalist>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Interest Rate</label>
                    <input type="text"/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Interests Only</label>
                    <input list="Interests" id={styles.inputIcon}/>
                    <datalist id={"Interests"}>
                      <option value={"value1"}/>
                      <option value={"value2"}/>
                      <option value={"value3"}/>
                    </datalist>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Grace Period</label>
                    <input type="text"/>
                  </div>
                  <br/>



                </div>

                <div className={"flex-child"}>
                  <div className="row">
                    <label>Down Payment (%)</label>
                    <input type="text"/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Term</label>
                    <input type="text" placeholder={"yyyy / mm"}/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>How Many Months</label>
                    <input type="text"/>
                  </div>
                  <br/>
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

export default Financing