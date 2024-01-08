import { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { ToastContainer,toast } from "react-toastify";
import { Nlp } from "./NLPbar";
import { LuLoader2 } from "react-icons/lu";
import { backendUrl } from "../backendConnectionString.js";
import 'react-toastify/dist/ReactToastify.css';
const Report =()=>{
    const apiUrl = '';
    let [mailStatus,setMailStatus]=useState(false);
    let [cardindex,setIndex]=useState(null);
    let [datastatus,setdataStat]=useState(false);
    const notify = () => {
        toast.error('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress:null ,
            theme: "dark",
            });
    };
    let [response,setResponse]=useState(null);
     let [sentiment,setSentiment]=useState(null); 
  
    let getUsers=async()=>{
        try{response=await fetch("https://script.google.com/macros/s/AKfycbxaBnT6s4AmtJn4bm1Mw6DTc2WCVl-rvz7WTrnmZQ1OG3tzbZiz1YyvVHwe6q_zce4m/exec?action=getData");
        response=await response.json();

        setResponse(response);}
        catch(err){
            if(err){
                toast.error('Error loading data,try after sometime', {
                    position: "top-center",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress:null ,
                    theme: "dark",
                    });
                    setdataStat(true);
            }
        }
        
    }

    useEffect(()=>{
        
        getUsers();
      
       },[])
       async function sendEmail(email,index) {
        setIndex(index);
        setMailStatus(true)
        try {
            toast.info('Sending mail...', {
                position: "top-center",
                autoClose: 3400,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: null,
                theme: "dark",
                });
          let response = await fetch(`https://jobexbackend.onrender.com/sendmail/${email}`);
         // alert("Sent mail to shortlisted candidate");
         response=await response.json();
         if(response.success){
            toast.success('Mail sent to candidate', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:null ,
                theme: "colored",
                });
                setMailStatus(false)
         }
         else{
            toast.error('Mail could not be sent try refreshing page', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:null ,
                theme: "dark",
                });
                setMailStatus(false)
         }
        } catch (error) {
            toast.error('🦄 Error sending mail! Check server is running or not', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:null ,
                theme: "dark",
                });
                setMailStatus(false)
          console.error('Error sending email:', error);
        }
      }
    
    return(
        <div className="md:w-[80%] w-[100%] lg:h-[80vh]  flex  justify-center">
            <div className="w-[95%] bg-slate-100 min-h-[80vh]   overflow-y-auto rounded-lg overflow-x-hidden pb-3">
                <div className="flex lg:flex-row flex-col lg:justify-between py-5 lg:items-center items-start">
                    <h2 className="lg:ml-[2vw] ml-[3vw] text-2xl font-semibold w-[93%] md:w-[10vw]">Candidates</h2>
                    <div className="lg:mr-[2vw] ml-[3vw] lg:mt-0 mt-3 flex gap-2 items-center hover:border hover:border-black bg-white p-3 rounded-lg shadow-slate-200 shadow-md w-[93%] md:w-[30vw]"><LiaSearchSolid className="text-2xl font-bold" /><input disabled={response!==null?false:true}  type="text"  className={`bg-transparent border-none outline-0 ${response!==null?"cursor-default":"cursor-not-allowed"} md:w-auto w-[100%]`} placeholder="Search by Job or Candidate name..."/></div>
                    </div> 
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-evenly ml-5 mr-5 mt-5">
                    {
                        response?response.map((item,pos)=>{
                            return(
                                <div key={pos} className="bg-slate-300  rounded-lg flex flex-col justify-between shadow-slate-500 hover:shadow-xl  ">
                           <div> 
                            <h3 className="flex items-center ml-3 mt-3 font-semibold text-lg justify-between">Name : {item.Name}<span className="text-xs float-right mr-4">Date : {item.Timestamp.substring(0, 10)}</span></h3>
                            <p className="flex ml-3">
                                <p className="text-md font-semibold">Job Position - </p>
                                <p className="ml-2"> {item["Job Position you are looking for"]}</p>
                            </p>
                            <p className="flex ml-3">
                                <p className="text-md font-semibold">Education - </p>
                                <p className="ml-2"> {item["Education"]}</p>
                            </p>
                            <p className="flex ml-3">
                                <p className="text-md font-semibold">Commitments - </p>
                                <p className="ml-2"> {item["Current Commitments"]}</p>
                            </p>
                            <p className="ml-3">
                                <p className="text-md font-semibold underline">Description</p>
                                <p className="text-sm text-gray-700"> {item["Why are you applying for this position?"]}</p>
                            </p>
                            <p className="flex ml-3">
                                
                                <Nlp username={item.Name} position={pos} nlpval={item["Why are you applying for this position?"]}/>
                            </p></div>
                          <div className="mb-2">  <button onClick={()=>{sendEmail(item.Email,pos)}}  className="ml-3 mt-2 p-2 bg-indigo-700 text-white rounded-lg">{mailStatus && cardindex===pos?<LuLoader2 className="transition-transform animate-spin"/>:"Shortlist Candidate"}</button></div>
                       <ToastContainer/>
                        </div>
                            )
                        }):<h2>Loading Data...</h2>
                    }
 
                        
                       

                    </div>
            </div>
         
        </div>
    )
}
export {Report}