import React, { Component } from 'react'
import styles from './propertycontent.module.css'
import "./propertycontent.css"
import calIMage from './../../../assets/calimage.png'


class PropertyContent extends Component {
    render() {
        return (
            <div>
                <div class="flex-container">
                    <div class="flex-child">
                        {/* <div class={styles.row}> */}

                        <div className="row">
                            <label>Property Address</label>
                            <input  type="text" />
                        </div> 

                        <div className="row">
                            <label for="State">State</label>
                            <input  list="States" name="state" id="state" placeholder="AK" id={styles.inputIcon} />
                            <datalist id="States">
                                <option value="Giorgia" />
                                <option value="New York" />
                                <option value="Washington" />
                                <option value="Utah" />
                                <option value="Ohio" />
                            </datalist>
                        </div> 

                        <div className="row">
                            <label>Prior Year Taxes USD</label>
                            <input id={styles.dollarIcon} type="text"/>
                        </div> 

                        <div className="row">
                            <label>Beds</label>
                            <input  type="text" />
                        </div> 

                        <div className="row">
                            <label>Lot -size</label>
                            <input  type="text" />
                        </div> 
                    </div>

                    <div class="flex-child">
                    <div className="row">
                            <label>City</label>
                            <input  type="text" />
                        </div> 

                        <div className="row">
                            <label>Zip Code</label>
                            <input type="number" />
                            
                        </div> 

                        <div className="row">
                            <label>Landload Insurance USD</label>
                            <input id={styles.dollarIcon} type="text"/>
                        </div> 

                        <div className="row">
                            <label>Baths</label>
                            <input  type="text" />
                        </div> 

                        <div className="row">
                            <label>Property Sq. ft</label>
                            <input  type="text" />
                        </div> 
                    </div>  
                </div>

                <div className="flex-container" >
                    
                    <div className="other-child">
                        <button className="flexbutton"> 
                            {/* <input type="file" />  */}
                            Upload Image(s) </button>
                            <img className="imgDiv" src={calIMage} />
                    </div>


                </div>
            </div>
        )
    }
}

export default PropertyContent;
