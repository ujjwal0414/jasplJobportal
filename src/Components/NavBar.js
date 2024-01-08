import { FaPlus } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
const NavBar=(props)=>{
    
    return(
        <>
        
        <div className="py-[1vw] grid place-items-center mt-0">
            <div className="flex justify-between w-[96vw] lg:w-[90vw] bg-slate-100 items-center p-2 rounded-md backdrop-blur-2xl background-opacity-40">
            <div className="flex items-center">
                <div className="ml-4 md:hidden block"><FaBars onClick={()=>{props.setSideBar(!props.showside)}}/></div>
                <div className="ml-4 font-bold text-xl select-none"><span className="text-blue-600 text-2xl">J</span>ASPL</div></div>
            <div className="flex items-center">
            <div className="flex mr-3"><button onClick={()=>{props.setStatus(!props.status)}} className="flex items-center gap-1 p-2 rounded-md bg-indigo-600 text-white"><FaPlus/>New Job</button></div>
            <div className="mr-3 font-semibold select-none cursor-not-allowed" >Logout</div>
            </div>
            </div>

        </div>
        </>
    )
}
export {NavBar}