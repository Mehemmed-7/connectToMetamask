import React, { Component } from 'react'
import "./button.css";
import {useWeb3React} from "@web3-react/core";
import {injected} from "./connects/index.js";


export default function Button(props) {
    const {active, account, activate, deactivate} = useWeb3React();

    const {addClassName} = props;
    addClassName(active);

    const connect = async () => {
       try{
           await activate(injected)
       }catch(err){
           console.log(err)
       }
   }
    return (
      <div>
        <button onClick={connect} className={active ? "active" : ""} id="connect">{active ? "Connected to wallet" : "Connect wallet"}</button>
      </div>
    )
}

