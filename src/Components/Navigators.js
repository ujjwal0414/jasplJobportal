import { Navigate } from "./Navigate"
import { Report } from "./Reports"
import { Profile } from "./profile"
import { Project } from "./projects"
import { useState } from "react"
const Navigators=({showside,setSideBar})=>{
    let [currentComponent,setComponent]=useState(<Report index={0}/>)
    
    
    return(
        <div className="min-h-[30vh]  w-[100%] flex justify-between mt-4 ">
            <Navigate setComponent={setComponent} showside={showside} setSideBar={setSideBar} index={currentComponent.props.index} />
            {showside && <div onClick={()=>{setSideBar(!showside)}} className="w-[100%] h-[100vh] md:hidden block absolute left-0 bg-gradient-to-b from-gray-50 to-gray-500 z-10 opacity-60"></div>}
            {currentComponent}
        </div>
    )
}
export {Navigators}