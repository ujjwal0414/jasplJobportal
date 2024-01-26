import { GrSend } from "react-icons/gr";
import {doc,setDoc,getFirestore,getDoc,onSnapshot,collection,addDoc,orderBy,query,serverTimestamp} from "firebase/firestore"
import { useEffect, useState } from "react";
import { firebaseApp } from "../fireBaseFile";
import { ChatContainer } from "./chatContainer";
import { UsernameDialog } from "../Modals/UserNameModal";
let db=getFirestore(firebaseApp)
const ChatCommunity=()=>{
    let [chatArray,setArray]=useState([]);
    let [userName,setUserName]=useState("");
  
    useEffect(()=>{
        if(localStorage.getItem("jasplComm")){
          let data=JSON.parse(localStorage.getItem("jasplComm"));
          setUserName(data.name)
          
        }
      },[])
    return(
       <>
      
       <div className="md:w-[80%] w-[100%] md:h-[80vh] flex  justify-center">
            <div className="w-[95%] dark:bg-[#222c45] border-2 dark:border-[#485c8a] dark:text-white bg-slate-200 rounded-lg flex flex-col items-center pb-6">
             <div className="w-[94%] p-3 mt-3 border-2 dark:border-[#485c8a] bg-slate-600 text-white rounded-lg flex justify-between items-center font-semibold"><span>Community</span><span className="bg-slate-300 px-2 rounded-md text-slate-800">{`Hey ! ${userName}`}</span></div>
             <div className="w-[94%] mt-3 rounded-lg">
                {/*This div will contain in future list of chat users */}
            <ChatContainer user={userName}/>
             </div>
            </div>
        </div>
       </>
    )
}
export {ChatCommunity}