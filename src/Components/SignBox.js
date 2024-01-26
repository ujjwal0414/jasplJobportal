import {Box, Modal} from "@mui/material"
import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import { auth } from "../fireBaseFile";
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth"
const SignIn=({show,setShow})=>{
    let [userName,setName]=useState("");
    let setUser=async()=>{
    const provider=new GoogleAuthProvider();
    try {
        let response=await signInWithPopup(auth,provider)
        let {firstName,refreshToken,photoUrl}=response._tokenResponse;
        setName(firstName)
        localStorage.setItem("jasplComm",JSON.stringify({token:refreshToken,url:photoUrl,name:firstName}))
        console.log(firstName,refreshToken);
        setShow(false);
    } catch (error) {
       console.log(error); 
    }
    }
useEffect(()=>{
  if(localStorage.getItem("jasplComm")){
    let data=JSON.parse(localStorage.getItem("jasplComm"));
    setName(data.name)
    console.log(data);
  }
},[])
    return(
        <Modal  open={true} className="grid place-items-center " >
      <div className="bg-white dark:bg-slate-700 rounded-lg w-[90vw]  md:w-[30vw] md:min-h-[20vh]  min-h-[20vh] border-none flex flex-col items-center justify-evenly">
      <div className="w-[90%] dark:text-white">
        <p>Username</p>
        <input type="text" readOnly value={userName} onChange={(e)=>{setName(e.target.value)}} required={true} className="w-[100%] outline-none border-2 dark:bg-slate-700 dark:border-slate-200 border-indigo-700 rounded-md p-1" placeholder="Will automatically be filled..."/>
      </div>
      <div className="w-[90%]">
       <button onClick={setUser} className="bg-indigo-700 p-1 text-white rounded-md px-3">Login Using Google</button>
      </div>

      </div>
        </Modal>
    )
}
export {SignIn}