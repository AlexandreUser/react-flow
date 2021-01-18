import React from "react"
import Styles from "../styles/selector.module.css"
import { ToastContainer, toast } from 'react-toastify';

export default function App(props)  {
    return <div className={Styles.mainContainer}>
         
                <div className={Styles.buttonContainer}>
                    <button  onClick={()=>{props.setSelected(0)}} className={props.selected === 0?Styles.initialButtonSelected:Styles.initialButton}>Workflow</button>
                   
                    <button onClick={()=>{props.setSelected(1)}} className={props.selected === 1?Styles.lastButtonSelected:Styles.lastButton}>Dashboard</button>
                    <div className={Styles.inputContainer}>
                        <input className={Styles.searchInput}/>
                        <button onClick={()=>{alert("Search function not working for this proof of concept")}} className={Styles.buttonHolder}>
                            <img className={Styles.searchImage} src="https://image.flaticon.com/icons/png/512/64/64673.png"/>
                        </button>
                    </div>
                </div>
              
            </div>
}