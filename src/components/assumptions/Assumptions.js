import React from 'react'
import HeaderTwo from "../header/HeaderTwo";
import Footer from "../footer/Footer";
import SidenavTwo from "../mainProperty/sidenav2/SidenavTwo";
import 'antd/dist/antd.css';
import {Layout} from "antd";

const {Content} = Layout;

function Assumptions() {

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
                    <label>After Repair Value</label>
                    <input type="text"/>
                  </div>
                  <br/>



                </div>

                <div className={"flex-child"}>
                  <div className="row">
                    <label>Selling Costs</label>
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

export default Assumptions