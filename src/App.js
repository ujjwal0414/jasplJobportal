import { NavBar } from './Components/NavBar';
import { Navigators } from './Components/Navigators';
import { useEffect, useState } from 'react';
import { ImCross } from "react-icons/im";
import { FileSection } from './Components/FileSection';
import { SignIn } from './Components/SignBox';

function App() {
  let [newStatus,setStatus]=useState(false)
  let [desc,setDesc]=useState(false);
  let [showSideBar,setSideBar]=useState(false);
  let [themeMode,setTheme]=useState(false);
  let [signBox,setBox]=useState(true);
  useEffect(()=>{
    setDesc(false)
    let theme=localStorage.getItem("jasplTheme");
    if(theme){
     let themeStat= localStorage.getItem("jasplTheme")
      themeStat=themeStat==="true"?true:false   
      setTheme(themeStat)   
    }
    else{
      localStorage.setItem("jasplTheme",false)
    }
    
   
    
  },[])
  useEffect(()=>{
       if(showSideBar){
        document.body.style.overflow="hidden"
       }
       else{
        document.body.style.overflow="scroll"
       }
  },[showSideBar])
  useEffect(()=>{
    if(newStatus){
     document.body.style.overflow="hidden"
    }
    else{
     document.body.style.overflow="scroll"
    }
},[newStatus])
useEffect(()=>{

     if(themeMode){
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor="#1c253b";
      localStorage.setItem("jasplTheme",true)
     
     }
     else{
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor="white";
      localStorage.setItem("jasplTheme",false)
     
     }
     
},[themeMode])
useEffect(()=>{
  if(localStorage.getItem("jasplComm")){
   setBox(false)
    
  }
},[])
  return (
    <> 
    {newStatus &&<div className="absolute top-0 left-0 w-[100%] h-[100vh] bg-slate-100  dark:bg-[#293555] z-30 flex  justify-center items-center ">
      <div className='bg-white  dark:bg-[#314168] dark:shadow-none opacity-100 text-black md:w-[80vw] w-[90vw] h-[80vh] shadow-slate-400 shadow-lg rounded-md '>
        <div className='flex py-5 items-center justify-between dark:text-white'>
          <div className='ml-8 font-semibold text-2xl'>Create Job</div>
          <div className='mr-8 text-slate-500 dark:text-white'><ImCross className='cursor-pointer' onClick={()=>{setStatus(!newStatus)}} /></div>
        </div>
      <FileSection newStatus={newStatus} setStatus={setStatus}/>
      </div>
    </div>
}
{
  desc && <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-slate-100  flex items-center justify-center  z-10">
  <div className="w-[70vw] h-[30vh] bg-white text-lg flex flex-col items-center">
    <h2 className="w-[60vw]">Respected User,</h2>
    
    <h2 className="w-[60vw] mt-4">It's to kindly inform you that no database has been deployed therefore currently without any authentication the page launches and the data/records are displayed.</h2>
    <h2 className="w-[60vw] mt-1">Kindly launch the app on some IDE like Vs code and then changing directory to onboardservice write <span className="text-slate-500">npm start</span> and again opening another terminal chang directory to backend and write <span className="text-slate-500">nodemon</span> to start the server at 4000 port .</h2>
     <h2 className="w-[60vw] mt-1"><button onClick={()=>{setDesc(!desc)}} className='p-1 rounded-md bg-indigo-700 text-white px-3'>Continue</button></h2>
  </div>
</div>

}  
/
    <NavBar setSignShow={setBox} darkModeStat={themeMode} setDarkModeStat={setTheme} status={newStatus} setStatus={setStatus} setSideBar={setSideBar} showside={showSideBar} />
    <Navigators darkModeStat={themeMode} setDarkModeStat={setTheme} showside={showSideBar} setSideBar={setSideBar}  />
   
{
  signBox && <SignIn show={signBox} setShow={setBox} />
}

    </>
  );
}

export default App;
