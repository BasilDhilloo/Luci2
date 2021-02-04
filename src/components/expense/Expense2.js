import React from 'react'
import HeaderTwo from "../header/HeaderTwo";
import Footer from "../footer/Footer";
import SidenavTwo from "../mainProperty/sidenav2/SidenavTwo";
import 'antd/dist/antd.css';
import {Layout} from "antd";

const {Content} = Layout;

function Expense2() {

  return (


    <div style={{background:'white'}}>


      <HeaderTwo/>

      <Layout>
        <Content style={{padding: '0 50px'}}>
          <Layout className="site-layout-background" style={{padding: '24px 0'}}>

            <SidenavTwo/>


            <Content className="ant-layout-content-second">


              <div style={{textAlign: 'left'}}>
                <h5 style={{color: '#4B176A', fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '25px'}}>Itemize The Renre Budget :<span> </span>
                  <select style={{background:'rgba(244, 47, 244, 0.1)', color:'#4B176A'}}>
                    <option value={"Yes"}>Yes</option>
                    <option value={"No"}>No</option>
                  </select>

                </h5>


              </div>
              <br/>


              <div className={"flex-container"}>
                <div className={"flex-child"}>

                  <div className="row">
                    <label>Renovation Budget</label>
                    <input type="text"/>
                  </div>
                  <br/>

                  <div className="row">
                    <label>Landload Insurance USD</label>
                    <input type="text"/>
                  </div>
                  <br/>



                </div>

                <div className={"flex-child"}>
                  <div className="row">
                    <label>Construction Time</label>
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

export default Expense2