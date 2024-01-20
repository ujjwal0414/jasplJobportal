import { useRef ,useState,useEffect} from "react"
const FileSection=(props)=>{
    let pref=useRef();

    let reportref=useRef();
    let [file,setFile]=useState(null);
    let [projectname,setName]=useState("");
    let [type,setType]=useState("");
    let [statusProject,setStatusProject]=useState("");
    let [desc,setDesc]=useState("");
    let [upload,setStatUpload]=useState(null);   
    
    let uploadProject=()=>{
        pref.current.click();
    }
    let uploadReport=async()=>{
        if(projectname==="" ){
            alert("Empty ProjectName or Description")
        }
        else{
            let formData=new FormData();
        formData.append("file",file)
        formData.append("Name",projectname);
        formData.append("type",type);
        formData.append("status",statusProject);
        formData.append("desc",desc);
        let response=await fetch(`http://localhost:4000/uploadProject/${file.name}`,{
            method:"post",
            body:formData
        });
        response=await response.json();
        if(response.result){
            setStatUpload(true);
         setTimeout(()=>{
            props.setStatus(!props.newStatus)
            window.location.reload();
         },2000)

        }
       
        }
    }
   
    return(
        <div className="md:flex md:items-center md:justify-evenly  h-[80%]">
            <div className="md:w-[35vw] w-[90vw]  md:h-[55vh] flex flex-col items-center dark:text-white">
                 <div className="md:w-[25vw] w-[80vw]  min-h-[2vh] mt-[2vh]">
                    <h3 className="text-md font-medium">Position Name</h3>
                    <p className="mt-1"><input onChange={(e)=>{setName(e.target.value)}} className="w-[100%] dark:bg-[#1c253b] p-2 rounded-lg focus:outline-none border-2  border-slate-400 focus:border-slate-600" type="text" placeholder="Enter Job Title"/></p>
                 </div>
                 <div className="md:w-[25vw] w-[80vw]  min-h-[2vh] mt-[2vh]">
                    <h3 className="text-md font-medium">Form Link</h3>
                    <p className="mt-1"><input onChange={(e)=>{setType(e.target.value)}} className="w-[100%] dark:bg-[#1c253b] p-2 rounded-lg focus:outline-none border-2  border-slate-400 focus:border-slate-600" type="url" placeholder="place google form link here"/></p>
                 </div>
                 <div className="md:w-[25vw] w-[80vw]  min-h-[2vh] mt-[2vh]">
                    <h3 className="text-md font-medium">Status</h3>
                    <p className="mt-1"><input onChange={(e)=>{setStatusProject(e.target.value)}} className="w-[100%] dark:bg-[#1c253b] p-2 rounded-lg focus:outline-none border-2  border-slate-400 focus:border-slate-600" type="text" placeholder="e.g Completed"/></p>
                 </div>
                 
            </div>
            <div className="md:w-[35vw] w-[90vw] md:h-[55vh] flex flex-col items-center dark:text-white">
            <div className="md:w-[25vw] min-h-[2vh] w-[80vw] mt-[2vh]">
                    <h3 className="text-md font-medium dark:text-white">Description of Job</h3>
                    <p className="mt-1"><textarea placeholder="Description of job" onChange={(e)=>{setDesc(e.target.value)}} className="w-[100%] dark:bg-[#1c253b] h-[16vh] p-2 rounded-lg focus:outline-none border-2  border-slate-400 focus:border-slate-600"></textarea></p>
                 </div>
                 <div className="md:w-[25vw] w-[80vw] min-h-[2vh] mt-[2vh] text-center md:text-start">
                    <button className="bg-indigo-700 p-2 px-4 rounded-md text-white cursor-not-allowed">Create</button>
                 </div>
            </div>
        </div>
    )
}
export {FileSection}