import { FaPlus } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import {Switch} from "@mui/material"
import CustomizedSwitches from "./muiSwitch";
const NavBar=(props)=>{
    
    return(
        <>
        
        <div className="py-[1vw] grid place-items-center mt-0 dark:">
            <div className="flex justify-between w-[96vw] lg:w-[90vw] bg-slate-100 dark:bg-[#222c45] border-2 dark:border-[#485c8a] items-center p-2 rounded-md backdrop-blur-2xl background-opacity-40">
            <div className="flex items-center">
                <div className="ml-4 md:hidden block dark:text-white"><FaBars onClick={()=>{props.setSideBar(!props.showside)}}/></div>
                <div className="ml-4 font-bold text-xl select-none dark:text-white"><span className="text-blue-600 text-2xl">J</span>ASPL</div></div>
            <div className="flex items-center">
            <div className="flex mr-3"><button onClick={()=>{props.setStatus(!props.status)}} className="flex items-center gap-1 p-2 rounded-md bg-indigo-600 text-white"><FaPlus/>New Job</button></div>
            <div className="mr-3 font-semibold select-none cursor-not-allowed dark:text-[#b7bac1]" onClick={()=>{localStorage.removeItem("jasplComm");props.setSignShow(true)}}>Logout</div>
            <div className="hidden md:block" onClick={()=>{props.setDarkModeStat(!props.darkModeStat)}}><CustomizedSwitches open={props.darkModeStat} /></div>
            </div>
            </div>

        </div>
        </>
    )
}
export {NavBar}