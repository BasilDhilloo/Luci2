import React from 'react'
import {Helmet} from 'react-helmet'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {Layout} from "antd";
import jumbotronImage from './../../assets/contactus_jumbotron_image.png'
import bodyImage from './../../assets/contactus_body_image.png'

const {Content} = Layout;

function Contact() {

  return (


    <div style={{background: 'white'}}>
      <Helmet>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossOrigin="anonymous"/>
      </Helmet>


      <Header/>


      {/*<div className={"jumbotron jumbotron-fluid"}>*/}
      {/*  <img src={jumbotronImage} style={{width: '100%', height: '100%'}}/>*/}
      {/*</div>*/}



      <div  style={{textAlign:'center', color:'white', position:'relative'}}>
        <img src={jumbotronImage} style={{width: '100%', height: '100%'}}/>
        <h3 style={{fontSize:'65px', fontWeight:'bold', fontFamily:'Roboto', transform: 'translate(-50%, -50%)', top:'50%', left:'50%', position:'absolute' }}>Contact With Us</h3>
        <p style={{fontFamily:'Roboto', transform: 'translate(-50%, -50%)', top:'65%', left:'50%', position:'absolute' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique sit amet nibh sit amet sagittis. Mauris aliquet erat sit amet vestibulum lacinia.</p>
      </div>

      <div className={"flex-container"}>
        <div className={"flex-child"}>




        </div>
      </div>

      <div className={"flex-container"}>
        <div className={"flex-child"} style={{marginLeft: '150px'}}>
          <img src={bodyImage} style={{background: 'white', width: '722px', height: '617px'}}/>
        </div>

        <div className={"flex-child"} style={{alignContent: 'center', marginLeft: '150px'}}>
          <div className="row">
            <label>Your Name</label>
            <input type="text" id={"name"}/>
          </div>

          <div className="row">
            <label>Your Email</label>
            <input type="text" id={"email"}/>
          </div>

          <div className="row">
            <label>Write A Subject</label>
            <input type="text" id={"subject"}/>
          </div>

          <div className="row">
            <label>Your Message</label>
            <textarea id={"message"} rows={"5"}
                      style={{background: 'rgba(0, 0, 0, 0.1)', color: 'black', borderRadius: '15px', width: '480px'}}/>
          </div>
        </div>


      </div>
      <br/>

      <div className={"flex-container"}>
        <div className={"other-child"}>
          <button className={"flexbutton"} style={{width: '1420px', height:'86px', fontWeight: 'bold'}}>SUBMIT</button>
        </div>
      </div>

      <Footer/>


    </div>

  )

}

export default Contact

