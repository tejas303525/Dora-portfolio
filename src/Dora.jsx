import "./Dora.css"
import React, {useState} from "react"
export default function Dora(){

    const [action,setAction]=useState("Login")
 return <div className="container">
    <div className="Header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <label className="username">Username: </label>
                <input type="text" placeholder="Username"/>
            </div>
            <div className="input">
                <label className="Password">Password: </label>
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        <div className="Submit_Container">
            <div className={action==="Login"?"submit":"submit gray"} onClick={()=>{setAction("Login")}}>Login</div>
            <div className={action==="Sign up"?"submit":"submit gray"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
        </div>
 </div>   
}