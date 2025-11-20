import './App.css';
import { useEffect, useState } from 'react';
import {LC,UC,NC,SC} from './data/passchar';



function App() {

    let [uppercase,setUppercase]=useState(false);
    let [lowercase,setLowercase]=useState(false);
    let [numbercase,setNumbercase]=useState(false);
    let [symbolcase,setSymbolcase]=useState(false);
    let [passwordlen,setPasswordlen]=useState(4);
    let [fpass,setFpass]=useState('');
  
    let createPassword=()=>{
      let finalCharSet="";
      let charSet="";
      if(uppercase || lowercase || numbercase || symbolcase){
         if(uppercase) charSet+=UC;
         if(lowercase) charSet+=LC;
         if(numbercase) charSet+=NC;
         if(symbolcase) charSet+=SC;

         for(let i=0;i<passwordlen;i++){
            finalCharSet+=charSet.charAt(Math.floor(Math.random()*charSet.length))
            }
            setFpass(finalCharSet);

      }else{
        alert("please select atleast one checkbox");
      }
      
    }

    let copyPass=()=>{
      navigator.clipboard.writeText(fpass);
    }

  return (

    <>
    <div className="passwordBox">
      <h1>Your Password Generator</h1>
      <div className='passwordBoxIn'>
      <input  type='text' value={fpass} readOnly/><button onClick={copyPass}>Copy</button>

    </div>
    <div className='passwordLength' >
      <lebel>Password Length</lebel>
      <input type='number' max={20} value={passwordlen} onChange={(event)=>setPasswordlen(event.target.value)}></input>
    </div>
    <div className='passwordLength'  >
      <lebel>Include uppercase Letter</lebel>
      <input type='checkbox' checked={uppercase}  onChange={()=>setUppercase(!uppercase)}></input>
    </div>
    <div className='passwordLength' >
      <lebel>Include lowercase Letter</lebel>
      <input type='checkbox' checked={lowercase}  onChange={()=>setLowercase(!lowercase)}></input>
    </div>
    <div className='passwordLength' >
      <lebel>Include Numbers</lebel>
      <input type='checkbox' checked={numbercase}  onChange={()=>setNumbercase(!numbercase)}></input>
    </div>
    <div className='passwordLength' >
      <lebel>Include Symbols</lebel>
      <input type='checkbox' checked={symbolcase}  onChange={()=>setSymbolcase(!symbolcase)}></input>
    </div>

    <button className='btn' onClick={createPassword}>Generate Password</button>
  
    </div> 


    

    </>
  );
}

export default App;
