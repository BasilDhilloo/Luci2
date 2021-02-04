import React from 'react'
import HeaderTwo from "../header/HeaderTwo";
import Footer from "../footer/Footer";
import SidenavTwoLong from "../mainProperty/sidenav2/SidenavTwoLong";
import 'antd/dist/antd.css';
import {Layout} from "antd";

const {Content} = Layout;

function Renovation() {

  return (


    <div style={{background:'white'}}>


      <HeaderTwo/>

      <Layout>
        <Content style={{padding: '0 50px'}}>
          <Layout className="site-layout-background" style={{padding: '24px 0'}}>

            <SidenavTwoLong/>


            <Content className="ant-layout-content-second">


              <div style={{textAlign: 'left'}}>
                <h5 style={{color: '#4B176A', fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '25px'}}>Itemize The Renre Budget :<span> </span>
                  <select style={{background:'rgba(244, 47, 244, 0.1)', color:'#4B176A'}}>
                    <option value={"Yes"}>Yes</option>
                    <option value={"No"}>No</option>
                  </select>
                </h5>
                <h5 style={{color: '#4B176A', fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '25px'}}>Fixed :</h5>


              </div>
              


              <div className={"flex-container"}>
                <div className={"flex-child"}>

                  <div className="row">
                    <label>Beds</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Permits</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Foundation</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Structure</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Flooring</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Heating/AC</label>
                    <input type="text"/>
                  </div>
                  


                  <div className="row">
                    <label>Windows</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Landscaping</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Kitchens</label>
                    <input type="text"/>
                  </div>
                  





                </div>

                <div className={"flex-child"}>
                  <div className="row">
                    <label>Baths</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Property Sq. ft</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Roof</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Drywall</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Electric</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Lighting</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Party/porch</label>
                    <input type="text"/>
                  </div>
                  

                  <div className="row">
                    <label>Appliances</label>
                    <input type="text"/>
                  </div>
                  


                </div>

                <div className={"flex-child"}>
                  <div className="row">
                    <label>Total</label>
                    <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>
                  </div>
                </div>


              </div>

              {/*<div className={"flex-container"}>*/}
              {/*  <div className={"flex-child"} >*/}
              {/*    <div className="row">*/}
              {/*      <label>Total</label>*/}
              {/*      <input type="text" placeholder={"00000"} style={{letterSpacing: '0.45em'}}/>*/}
              {/*    </div>*/}


              {/*  </div>*/}
              {/*</div>*/}


            </Content>
          </Layout>
        </Content>

      </Layout>


      <Footer/>
    </div>


  )

}

export default Renovation