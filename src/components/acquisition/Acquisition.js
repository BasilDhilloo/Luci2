import React from 'react'
import HeaderTwo from "../header/HeaderTwo";
import Footer from "../footer/Footer";
import SidenavTwo from "../mainProperty/sidenav2/SidenavTwo";
import 'antd/dist/antd.css';
import {Layout} from "antd";

const {Content} = Layout;

function Acquisition() {

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
                    <label>Asking Price</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Closing Date</label>
                    <input type="date"/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Earnest Money Deposit</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>



                </div>

                <div className={"flex-child"}>
                  <div className="row">
                    <label>Purchase Price</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Due Diligence</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Closing Costs</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                  <br/>
                </div>





              </div>

              <div className={"flex-container"} style={{width:'1210px'}}>
                <div className={"flex-child"} >
                  <div className="row">
                    <label>Notes</label>
                    <textarea rows={"10"} style={{background:'rgba(0, 0, 0, 0.1)', color:'black', borderRadius:'15px'}}/>
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

export default Acquisition