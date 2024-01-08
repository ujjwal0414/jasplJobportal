import { FaCameraRetro } from "react-icons/fa6";
import { useEffect, useRef ,useState} from "react";
const Profile=()=>{
    let pref=useRef();
    let [pic,setpic]=useState(null);
    let setPic=()=>{
        pref.current.click();
       
    }
    useEffect(()=>{
//    if(pic){
//     console.log(pic);
//    }
    },[pic])
    return(
        <div className="md:w-[80%] w-[100%] h-[80vh] flex  justify-center">
            <div className="w-[95%] bg-slate-200 h-[90vh] pb-4 overflow-y-auto rounded-lg flex flex-col items-center">
                <div className=" relative w-[95%] bg-gradient-to-b from-cyan-500 to-blue-500 md:h-[30vh] h-[24vh] mt-5 flex items-center justify-center rounded-lg">
                      <div className="md:w-[30vh] w-[23vh]  md:h-[30vh]  h-[23vh] bg-white rounded-full absolute md:bottom-[-15vh] bottom-[-12vh] flex justify-center items-center">
                       <div className="md:w-[29vh] w-[22vh]  md:h-[29vh]  h-[22vh]  rounded-full relative">
                        <img  draggable="false" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwcRgFA-KFW6u0wScyvZEBWMLME5WkdeCUg&usqp=CAU" alt="pic" className="md:w-[29vh] w-[22vh]  md:h-[29vh]  h-[22vh] rounded-full object-cover"/>
                       </div>
                       <div onClick={setPic} className="absolute md:translate-x-[10vh] translate-x-[8vh] md:translate-y-[10vh] translate-y-[8vh] bg-indigo-700 p-2 rounded-full  cursor-pointer"><FaCameraRetro className=" text-white"/></div>
                       <input ref={pref} type="file" onChange={(e)=>{setpic(e.target.files[0])}} className="hidden"/>
                      </div>
                     
                </div>
                <div className=" w-[100%] mt-[15vh] md:flex ">
                    <div className="md:w-[50%] h-[22vh] flex flex-col items-center">
                <div className="md:w-[75%] w-[90%]">
                    <h3 className="text-md font-medium select-none">Username</h3>
                    <p className="mt-1 "><input className="w-[100%] p-2 rounded-lg focus:outline-none border-2  border-slate-400 focus:border-slate-600" type="text" placeholder="Username"/></p>
                 </div>
                 <div className="md:w-[75%] mt-1 w-[90%]">
                    <h3 className="text-md font-medium select-none">Email</h3>
                    <p className="mt-1"><input className="w-[100%] p-2 rounded-lg focus:outline-none border-2  border-slate-400 focus:border-slate-600" type="text" placeholder="Email"/></p>
                 </div>

                    </div>
                    <div className="md:w-[50%]  h-[22vh] flex flex-col items-center">
                 <div className="md:w-[75%] w-[90%]">
                    <h3 className="text-md font-medium select-none">About</h3>
                    <p className="mt-1"><textarea className="w-[100%] h-[16vh] p-2 rounded-lg focus:outline-none border-2  border-slate-400 focus:border-slate-600" placeholder="Enter description about yourself and job preferences"></textarea></p>
                 </div>
                    </div>
                </div>
                <div className=""><button className="md:p-1  bg-indigo-700 text-white rounded-md mt-1 md:px-3 px-8 py-2 shadow-md shadow-indigo-800 cursor-not-allowed w-[100%]">Save</button></div>
            </div>

        </div>
    )
}
export {Profile}