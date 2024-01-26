import { GrSend } from "react-icons/gr";
import { doc, setDoc, getFirestore, getDoc, onSnapshot, collection, addDoc, orderBy, query, serverTimestamp } from "firebase/firestore"
import { useEffect, useState } from "react";
import { firebaseApp } from "../fireBaseFile";
import "./chatContainer.css"
let db = getFirestore(firebaseApp)
let ChatContainer = ({ user }) => {
    let [message, setMessage] = useState("");
    let [chatArray, setArray] = useState([]);
    let [userName, setUserName] = useState("");
    let [imgUrl,setURL]=useState("");
   
    let fetchMessages = async () => {
        const q = query(collection(db, "message"), orderBy("timestamp"));
        const unsubscribe = onSnapshot(q, snapshot => {
           
            setArray(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                    
                }
            )))
        });

    }
    useEffect(()=>{
        fetchMessages()
        if(localStorage.getItem("jasplComm")){
          let data=JSON.parse(localStorage.getItem("jasplComm"));
         
          setURL(data.url);
        }
      },[])
    let sendMess = async () => {
        if (message=="") return;
        try {
            let resp = await addDoc(collection(db, "message"), {
                uid: 123,
                displayName: userName,
                text: message,
                timestamp: serverTimestamp(),
                url:imgUrl
            })
            setMessage("")
            fetchMessages();

        } catch (error) {
            console.log(error);
        }

    }
    let sendMessString = (e) => {
        if (e.keyCode == 13 && message !== "") {
            sendMess()
        }

    }
    useEffect(()=>{
        if(localStorage.getItem("jasplComm")){
          let data=JSON.parse(localStorage.getItem("jasplComm"));
          setUserName(data.name)
          
        }
      },[])
    useEffect(() => {
        fetchMessages()
    }, [])
    useEffect(() => {
        if (chatArray.length !== 0) {
           
            document.querySelector(".chatContainer").scrollTop=document.querySelector(".chatContainer").scrollHeight;
        }
    }, [chatArray])
    
    return (
        <div className="w-[100%] dark:bg-slate-600 bg-slate-300 md:h-[64vh] h-[80vh] rounded-lg overflow-hidden">
            <div className="chatContainer md:h-[56vh] h-[72vh] p-3  overflow-y-auto">
                {/* <div className="flex justify-end  mt-1">
                    <span className="mr-3 bg-slate-700 text-white  py-1 px-3 rounded-xl max-w-[80%] md:max-w-[60%]">Express provides a robust routing API that allows you to perform complex routing tasks. With this API, you can split code on a per-route basis and not be strictly limited by Netlifys file-based routing for Functions.</span>
                </div>
                <div className="flex mt-1 justify-start ">
                    <span className="ml-3 bg-slate-200 text-black font-semibold max-w-[80%] md:max-w-[60%] py-1 px-3 rounded-xl">Receiver</span>
                </div> */}
                {
                    chatArray.length !== 0 ?
                        <>
                            {
                                chatArray.map((item, pos) => {
                                   if(item.data.displayName==userName){
                                    return (
                                        <div className="flex justify-end mt-2  md:mt-1  items-center">
                                            <span className="mr-3 dark:bg-slate-600 border-2 dark:border-[#8ca2d7] font-semibold bg-slate-700 text-white max-w-[70%] md:max-w-[60%]  py-1 px-3 rounded-xl">{item.data.text}</span><img alt="log" src={item.data.url} className="md:w-[25px] md:h-[25px] w-[30px] h-[30px] rounded-full" />
                                        </div>
                                    )
                                   }
                                   else{
                                    return (
                                        <div className="flex md:mt-1 mt-2 justify-start items-center">
                                           <img alt="log" src={item.data.url} className="md:w-[25px] md:h-[25px] w-[30px] h-[30px]  rounded-full" /> 
                    <span className="ml-3 bg-slate-200 text-black font-semibold max-w-[70%] md:max-w-[60%] py-1 px-3 rounded-xl">{item.data.text}</span>
                </div>
                                    )
                                   }
                                })
                            }

                        </>
                        : <></>
                }
               
            </div>
            <div className="input md:h-[8vh] h-[8vh] p-3  flex items-center justify-center">
                <input onKeyDown={sendMessString} value={message} onChange={(e) => { setMessage(e.target.value) }} type="text" placeholder="Message..." className="md:w-[70%] w-[80%] mr-3 dark:text-white dark:bg-[#485c8a] dark:placeholder:text-white dark:border-slate-200 rounded-md outline-none border-2 border-slate-500 p-1  md:p-2" />
                <button className="scale-150 dark:text-slate-200 text-slate-700" onClick={() => { sendMess() }}><GrSend /></button>
            </div>
        </div>
    )
}
export { ChatContainer }