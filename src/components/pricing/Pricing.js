// import React, { Component , Fragment } from "react";
// // import BlogContent from "../elements/blog/BlogContent";
// // import Header from "../component/header/Header";
// // import FooterTwo from "../component/footer/FooterTwo";
// // import Helmet from "../component/common/Helmet";
// // import { FiCast , FiLayers , FiUsers ,FiChevronUp , FiCheck } from "react-icons/fi";
// import vectorImage from '../../assets/Group 322.png'
// import starImage from '../../assets/Group 321.png'
// import crownImage from '../../assets/Group 320.png'
// import pricingImg from '../../assets/Pricing.png'
// // import styles from './pricing.module.css'



// class Pricing extends Component{
//     constructor () {
//         super()
//         this.state = {
//             isOpen: false
//         }
//         this.openModal = this.openModal.bind(this)
//     }
//     openModal () {
//         this.setState({isOpen: true})
//     }
//     render(){
        

//         return(
//             <Fragment> 
              

//                  {/* Start Pricing Tbale Area  */}
//                  <div className={styles.mainDivv}>
//                     <div className={styles.container} style={{backgroundColor:"blue",minHeight:"100vh"}}>
//                         <div className={styles.rowOne} style={{backgroundColor:"yellow"}}>
//                             <div className="col-lg-12">
//                                 <div className={styles.rowOneTitle}>
//                                     <h2> Pricing</h2>
//                                     <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
//                                 </div>

//                                 <div className="row" style={{marginTop:"70px"}}>
//                                     <div className="col-4">
//                                         <div className={styles.Card}>
//                                             <div className="row ">
//                                                 <div className={styles.CardHeader}>
//                                                     header
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-4">
//                                         <div className={styles.Card}>
//                                             <div className="row ">
//                                                 <div className={styles.CardHeader}>
//                                                     header
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-4">
//                                         <div className={styles.Card}>
//                                             <div className="row ">
//                                                 <div className={styles.CardHeader}>
//                                                     header
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         {/* <div className="row" style={{margin:"auto", backgroundColor:"purple", marginTop:"-230px", height:"450px"}}>
                            
                            
//                                             </div> */}
//                                             <div className="row">
//               <div className="col-4">
//                 <div className="Card">
//                 <div className="row">
//                 <h2>hello</h2>
//                 </div>
//                 </div>
//               </div>
//               <div className="col-4">
// heelo
//                 </div>
//                 <div className="col-4">
// heelo
//                 </div>
//                             {/* Start PRicing Table Area  */}
//                             {/* <div   style={{backgroundColor:"#00ffff"}}>
//                                 <div className="rn-pricing">
//                                     <div className="pricing-table-inner">
//                                         <div className="pricing-header">
//                                             <div className="pricing">
//                                                 <img src={vectorImage} alt="Basic Pricing Plan" /> */}
//                                                 {/* <span className="price">29</span>
//                                                 <span className="subtitle">USD Per Month</span> */}
//                                             {/* </div>
//                                             <h4 className="title">Basic</h4>
//                                         </div>
//                                         <div className="pricing-body">
//                                             <ul className="list-style--1">
//                                                 <li> 5.00$ / Month</li>
//                                                 <li> 54.00$ / Year</li>
//                                                 <li> Ability to analyze a prop based on a given strategy</li>
//                                                 <li> Print out deal overview reports to give to lenders</li>
//                                                 <li> Use your own Logo</li>
                                                
//                                             </ul>
//                                         </div>
//                                         <div className="pricing-footer">
//                                             <a className="rn-btn" href="#pricing">Subscribe</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> */}
//                             {/* End PRicing Table Area  */}

//                             {/* Start PRicing Table Area  */}
//                             {/* <div className="col-lg-4 col-md-6 col-12 mt--30">
//                                 <div className="rn-pricing">
//                                     <div className="pricing-table-inner">
//                                         <div className="pricing-header">
//                                             <div className="pricing">
//                                                 <img src={starImage} alt="Basic Pricing Plan" /> */}
//                                                 {/* <span className="price">29</span>
//                                                 <span className="subtitle">USD Per Month</span> */}
//                                             {/* </div>
//                                             <h4 className="title">Basic</h4>
//                                         </div>
//                                         <div className="pricing-body">
//                                             <ul className="list-style--1">
//                                                 <li> 5.00$ / Month</li>
//                                                 <li> 54.00$ / Year</li>
//                                                 <li> Ability to analyze a prop based on a given strategy</li>
//                                                 <li> Print out deal overview reports to give to lenders</li>
//                                                 <li> Use your own Logo</li>
                                                
//                                             </ul>
//                                         </div>
//                                         <div className="pricing-footer">
//                                             <a className="rn-btn" href="#pricing">Subscribe</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> */}
//                             {/* End PRicing Table Area  */}

//                             {/* Start PRicing Table Area  */}
//                             {/* <div className="col-lg-4 col-md-6 col-12 mt--30" style={{backgroundColor:"#00ffff"}}>
//                                 <div className="rn-pricing">
//                                     <div className="pricing-table-inner">
//                                         <div className="pricing-header">
//                                             <div className="pricing">
//                                                 <img src={crownImage} alt="Basic Pricing Plan" /> */}
//                                                 {/* <span className="price">29</span>
//                                                 <span className="subtitle">USD Per Month</span> */}
//                                             {/* </div>
//                                             <h4 className="title">Basic</h4>
//                                         </div>
//                                         <div className="pricing-body">
//                                             <ul className="list-style--1">
//                                                 <li> 5.00$ / Month</li>
//                                                 <li> 54.00$ / Year</li>
//                                                 <li> Ability to analyze a prop based on a given strategy</li>
//                                                 <li> Print out deal overview reports to give to lenders</li>
//                                                 <li> Use your own Logo</li>
                                                
//                                             </ul>
//                                         </div>
//                                         <div className="pricing-footer">
//                                             <a className="rn-btn" href="#pricing">Subscribe</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> */}
//                             {/* End PRicing Table Area  */}
//                         </div>
//                     </div>
//                 </div>
//                 {/* End Pricing Tbale Area  */}

//                 {/* Start Footer Style  */}
//                 {/* <FooterTwo /> */}
//                 {/* End Footer Style  */}

//             </Fragment>
//         )
//     }
// }
// export default Pricing;