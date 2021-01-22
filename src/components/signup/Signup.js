import React from 'react'
import styles from './signup.module.css'
import signImg from './../../../src/assets/log-in.png'
import loginImg from './../../../src/assets/Group 10.png'
import luciImage from './../../../src/assets/LuciLogin.png';
import bgImage from './../../../src/assets/background.jpeg';
import Header from './../header/Header'


const Signup = () => {
    return (
        // <div className={styles.color}>
        //         <img src={bgImage} alt="Background Image" />
        //         <div className={styles.center}>
        //             {/* <img src={bgImage} alt="Background Image" /> */}

        //           <div className={styles.loginDiv}>
        //                 <form>
        //                     <div>
        //                         <img src={luciImage} alt="Avatar" />
        //                         <p> An interactive real estate investing assistant</p>
        //                     </div>

        //                     <div className="form-group">
        //                         {/* <label for="inputdefault">Default input</label> */}
        //                         <input className="form-control"  type="text"  placeholder="Alpha Name"></input> 
        //                     </div>

        //                     <div>
        //                         <li><input className={styles.loginInput}  type="text" placeholder="First Name" /></li>
        //                         <li><input className={styles.loginInput}  type="text" placeholder="Last Name" /></li>
        //                         <li><input className={styles.loginInput}  type="text" placeholder="Address" /></li>
        //                         <li><input className={styles.loginInput}  type="text" placeholder="Town/City" /></li>
        //                         <li><input className={styles.loginInput}  type="text" placeholder="State" /></li>
        //                         <ul className={styles.myrow}>
        //                             <li style={{marginRight:"-15px"}}><input className={styles.loginInputSingle}  type="text" placeholder="Zip Code" /></li>
        //                             <li><input className={styles.loginInputSingle}  type="text" placeholder="Instant Strategy" /></li>
        //                         </ul>
                               
        //                     </div>
                            
        //                     <div className="container" style={{marginLeft:"185px"}}>
        //                         <div className="row" id={styles.marginClass}>
        //                             <button className={styles.homeButtonSign}> <img src={signImg} alt="SignIn Image" /> Sign up</button>
        //                         </div>

        //                         <div className="row" id={styles.marginClass}>
        //                             <button className={styles.homeButtonLogin}> <img className={styles.buttonIcon} src={loginImg} alt="LogIn Image" /> Login </button>
        //                         </div>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>

        <div className="container">
                 <div className={styles.color}>
                 <img src={bgImage} alt="Background Image" />
                 <div className={styles.center}></div>
  <h2>Input Sizing</h2>
  <p>The form below shows input elements with different heights using .input-lg and .input-sm:</p>
  <form>
    <div className="form-group">
      <label for="inputdefault">Default input</label>
      <input className="form-control" id="inputdefault" type="text" />
    </div>
    <div className="form-group">
      <label for="inputlg">input-lg</label>
      <input className="form-control input-lg" id="inputlg" type="text" />
    </div>
    <div className="form-group">
      <label for="inputsm">input-sm</label>
      <input className="form-control input-sm" id="inputsm" type="text" />
    </div>
    <div className="form-group">
      <label for="sel1">Default select list</label>
      <select className="form-control" id="sel1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
    <div className="form-group">
      <label for="sel2">input-lg</label>
      <select className="form-control input-lg" id="sel2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
    <div className="form-group">
      <label for="sel3">input-sm</label>
      <select className="form-control input-sm" id="sel3">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  </form>
</div>
</div>

    )
}

export default Signup;
