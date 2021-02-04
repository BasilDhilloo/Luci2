import React from 'react'
import HeaderTwo from "../header/HeaderTwo";
import Footer from "../footer/Footer";
import SidenavTwo from "../mainProperty/sidenav2/SidenavTwo";
import 'antd/dist/antd.css';
import {Layout} from "antd";

const {Content} = Layout;

function Expense() {

  return (


    <div style={{background:'white'}}>


      <HeaderTwo/>

      <Layout>
        <Content style={{padding: '0 50px'}}>
          <Layout className="site-layout-background" style={{padding: '24px 0'}}>

            <SidenavTwo/>


            <Content className="ant-layout-content-second">

              <div style={{textAlign: 'left'}}>
                <h5 style={{color: '#4B176A', fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '25px'}}>Projected Monthly
                  Expenses :</h5>
                <h5 style={{color: '#4B176A', fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '25px'}}>Fixed :</h5>


              </div>
              <br/>



              <div className={"flex-container"}>
                <div className={"flex-child"}>

                  <div className="row">
                    <label>Insurance</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Electric</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Water & sewer</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Other</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>

                </div>

                <div className={"flex-child"}>
                  <div className="row">
                    <label>HOA</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Taxes</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Management</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
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

export default Expense