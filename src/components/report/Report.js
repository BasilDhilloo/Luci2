import React from 'react'
import HeaderTwo from "../header/HeaderTwo";
import Footer from "../footer/Footer";
import SidenavTwo from "../mainProperty/sidenav2/SidenavTwo";
import 'antd/dist/antd.css';
import {Layout} from "antd";

const {Content} = Layout;

function Report() {

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

                  <div style={{textAlign: 'left'}}>
                    <h5 style={{color: '#4B176A', fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '25px'}}>Select the items to be included in the report
                    </h5>

                    <input type={"checkbox"} id={"point1"}/>
                    <label htmlFor={"point1"}>Generate Additional Graphs</label>

                    <input type={"checkbox"} id={"point1"}/>
                    <label htmlFor={"point1"}>Generate Amortization Schedule</label>

                    <input type={"checkbox"} id={"point1"}/>
                    <label htmlFor={"point1"}>Attach Sales History</label>


                    <input type={"checkbox"} id={"point1"}/>
                    <label htmlFor={"point1"}>Attach Rent Report</label>


                    <input type={"checkbox"} id={"point1"}/>
                    <label htmlFor={"point1"}>Generate 30 yr Performa</label>


                    <input type={"checkbox"} id={"point1"} checked/>
                    <label htmlFor={"point1"}>Attach Loaded Images</label>

                    <input type={"checkbox"} id={"point1"}/>
                    <label htmlFor={"point1"}>Generate Projected Cashflow Statement</label>


                    <input type={"checkbox"} id={"point1"}/>
                    <label htmlFor={"point1"}>Generate Market Report</label>


                    <input type={"checkbox"} id={"point1"}/>
                    <label htmlFor={"point1"}>Attach Renovation Distributions</label>





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

export default Report