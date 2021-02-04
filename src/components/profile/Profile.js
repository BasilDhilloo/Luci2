import React from 'react'
import Header from '../header/Header'
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {Layout} from "antd";
import ProfileImage from '../../assets/profile_image.png'
import styles from "../mainProperty/property/property.module.css";
const {Content} = Layout;

function Profile() {

  return (

    <div style={{background:'white', color:'4B176A'}}>
      <Header/>

      <div className={"flex-container"}>
        <h3 className={"display-4"} style={{textAlign:'center', fontWeight:'bold', width:'100%', height:'76px'}}>Profile</h3>
      </div>

      <div className={"flex-container"}>
        <div className={"flex-child"} style={{marginLeft:'350px', marginTop:'50px'}}>
          <img src={ProfileImage}/>
        </div>

        <div className={"flex-child"} style={{marginLeft:'150px', marginTop:'50px'}}>

          <h6 style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}>UserName</h6>
          <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse<br/> tristique sit amet nibh sit amet sagittis. Mauris aliquet erat sit amet<br/> vestibulum lacinia.</p>
          <br/>
          <br/>
          <h6 style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}>Account Information</h6>

          <br/>
          <div className={"row"}>
            <label>Phone Number</label>
            <input type="text" id={"name"}/>
          </div>

          <div className={"row"}>
            <label>Address</label>
            <input type="text" id={"name"}/>
          </div>

          <div className={"row"}>
            <label>Gender</label>
            <input type="text" id={"name"}/>
          </div>

          <div className={"row"}>
            <label>Nationality</label>
            <input list="nationality" id={styles.inputIcon}/>
            <datalist id={"nationality"}>
              <option value={"value1"}/>
              <option value={"value2"}/>
              <option value={"value3"}/>
            </datalist>
          </div>

          <div className={"row"}>
            <label>Password</label>
            <input type="text" id={"name"}/>
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  )

}

export default Profile
