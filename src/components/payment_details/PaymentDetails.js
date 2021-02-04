import React from 'react'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {Layout} from "antd";
import BodyImage from '../../assets/payment_details_body_image.png'
import {Helmet} from "react-helmet";
const {Content} = Layout;

function PaymentDetails() {

  return (

    <div style={{background:'white'}}>

      <Helmet>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossOrigin="anonymous"/>
      </Helmet>


      <Header/>

      <div className={"flex-container"}>
        <h3 className={"display-4"} style={{textAlign:'center', fontWeight:'bold', width:'100%', height:'76px'}}>Payment Details</h3>
      </div>

      <div className={"flex-container"} style={{marginTop:'60px'}}>
        <div className={"flex-child"} style={{marginLeft: '83px'}}>
          <img src={BodyImage}/>
        </div>


        <div className={"flex-child"} style={{marginLeft: '100px'}}>
          <br/>
          <h6 style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}>Card Details</h6>
          <br/>
          <br/>

          <div className={"row"}>
            <label>Name Of Card</label>
            <input type="text" id={"name"}/>
          </div>
          <br/>


          <div className={"row"}>
            <label>Card Number</label>
            <input type="text" id={"name"}/>
          </div>
          <br/>


          <div className={"row"}>
            <label>Valid Through</label>
            <input type="text" id={"name"}/>
          </div>

          <br/>


          <div className={"row"}>
            <label>CVV</label>
            <input type="text" id={"name"}/>
          </div>
          <br/>
          <br/>

          <h6 style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}>Choose Type Of Plan</h6>
          <br/>




          {/*<div>*/}
          {/*  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>*/}
          {/*  <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>*/}
          {/*</div>*/}

          {/*<label className="checkbox_container">One*/}
          {/*  <input type="checkbox" checked=""/>*/}
          {/*  <span className="checkmark"></span>*/}
          {/*</label>*/}


          <br/>
          <br/>
          <br/>
          <div className={"other-child"}>
            <button className={"flexbutton"} style={{width: '85%', height:'86px', fontWeight: 'bold', borderRadius:'20px'}}>PAY</button>
          </div>


        </div>

      </div>

      <Footer/>

    </div>

  )

}

export default PaymentDetails
