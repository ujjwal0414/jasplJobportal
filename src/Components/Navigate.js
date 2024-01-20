import { IoHome,IoFolderOpenSharp,IoPersonCircle } from "react-icons/io5";
import { Profile } from "./profile";
import { Report } from "./Reports";
import { Project } from "./projects";
import { PiMapPinDuotone } from "react-icons/pi";
import { Update } from "./uodates";
import { GrUpdate } from "react-icons/gr";
import CustomizedSwitches from "./muiSwitch";
const Navigate=(props)=>{
   
    let linkName=[
        {
            name:"Home",
            Icon:<IoHome  className=" ml-3 mr-2"/>,
            component:<Report index={0}/>
        },
        {
            name:"Jobs",
            Icon:<PiMapPinDuotone  className=" ml-3 mr-2"/>,
            component:<Project index={1}/>
        },
        {
            name:"Profile",
            Icon:<IoPersonCircle  className=" ml-3 mr-2"/>,
            component:<Profile index={2}/>
        },
        {
            name:"Page Updates",
            Icon:<GrUpdate  className=" ml-3 mr-2"/>,
            component:<Update index={3}/>
        }

    ]
    return(
        <div className={`md:w-[20%] w-[80%] md:static absolute h-[85%] md:h-[80vh] z-20 bg-slate-300 border-2 dark:border-[#485c8a] dark:bg-[#222c45] rounded-r-3xl flex justify-center pb-4 transition-all ease-in duration-300 ${props.showside?"left-0":"-left-[100%]"}`}>
            <div className="w-[80%] flex flex-col ">
                <h2 className="text-2xl mt-2 ml-3 mb-6 dark:text-white font-bold">Navigate</h2>
                <div className="flex flex-col">
                    {
                        linkName.map((item,pos)=>{
                            return(
                                <div  key={pos} onClick={()=>{props.setComponent(item.component);props.setSideBar(!props.showside)}}  className={`flex dark:text-white font-semibold items-center py-3 mb-2 hover:bg-slate-600 hover:text-white rounded-lg transform cursor-pointer ${props.index==pos?"bg-slate-600 text-white":""}`}>{item.Icon} {item.name}</div>
                            )
                        }
                        )
                    }
                </div>
                <div className="md:hidden block" onClick={()=>{props.setDarkModeStat(!props.darkModeStat);props.setSideBar(!props.showside)}}><CustomizedSwitches open={props.darkModeStat}  /></div>

            </div>
        </div>
    )
}
export {Navigate}