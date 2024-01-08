import { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import { LuLoader2 } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
let Nlp=(props)=>{
   let emotion="";
   let score=null;
   let [sc,setSc]=useState(null);
   let [seeScore,setScores]=useState(false);
   let [loader,setLoader]=useState(false);
    async function query() {
      setLoader(true)
       try{
        console.log(process.env.REACT_APP_NLP);
        const response = await fetch(
            "https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify({"inputs":`${props.nlpval}`}),
            }
        );
       let result = await response.json();
       result=result[0];
       
       console.log(props.username,result);

       result=result.slice(0,4);
       setSc(result);
       
       setScores(true);
      setLoader(false)
       }
       catch(err){
        if(err){
            toast.error('Error getting analysis,try refreshing page', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                setLoader(false)
        }
       }
    }
    useEffect(()=>{
       //query()
    },[])
 return(
    <p className="flex justify-between items-center w-[100%] relative">
        <div><button disabled={seeScore?true:false} onClick={query} className={`text-sm bg-slate-800 text-white p-1 rounded-md ${seeScore?"cursor-not-allowed":"cursor-pointer"}`}>{loader?<LuLoader2 className="transition-transform animate-spin"/>:"Get analysis"}</button></div>
        {seeScore && sc!==null &&<div className="flex bg-gray-100 opacity-80 shadow-slate-400 shadow-md mr-3 absolute top-0 right-0 flex-col p-1 px-3 z-10 rounded-md  hover:backdrop-blur-lg">
        <div className="flex opacity-100 items-center p-0 justify-between">
        <p className="text-sm "><span className="font-semibold">Emotion type</span>: {sc===null?"":sc[0]["label"]}</p>
        
        <p className="text-sm ml-2"><span className="font-semibold">Score</span> : {sc===null?"":sc[0]["score"]>0.1?Math.round(sc[0]["score"]*10):0}</p>
        <p className="text-xs ml-2 font-bold flex items-center pt-0.5"><RxCross1 className="cursor-pointer" onClick={()=>{setScores(false)}}/></p>
        </div>
        <div className="flex">
        <p className="text-sm "><span className="font-semibold">Emotion type</span>: {sc===null?"":sc[1]["label"]}</p>
        
        <p className="text-sm ml-2"><span className="font-semibold">Score</span> : {sc===null?"":sc[1]["score"]>0.1?Math.round(sc[1]["score"]*10):0}</p>
        </div>
        <div className="flex">
        <p className="text-sm "><span className="font-semibold">Emotion type</span>: {sc===null?"":sc[2]["label"]}</p>
        
        <p className="text-sm ml-2"><span className="font-semibold">Score</span> : {sc===null?"":sc[2]["score"]>0.1?Math.round(sc[2]["score"]*10):0}</p>
        </div>
        <div className="flex">
        <p className="text-sm "><span className="font-semibold">Emotion type</span>: {sc===null?"":sc[3]["label"]}</p>
        
        <p className="text-sm ml-2"><span className="font-semibold">Score</span> : {sc===null?"":sc[3]["score"]>0.1?Math.round(sc[3]["score"]*10):0}</p>
        </div>

        </div>}
    </p>
 )
}
export {Nlp}