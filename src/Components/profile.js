import { FaCameraRetro } from "react-icons/fa6";
import { useEffect, useRef ,useState} from "react";
// import 'firebase/storage';
import { storage } from "../fireBaseFile.js";
import { ToastContainer,toast } from "react-toastify";
import { LuLoader2 } from "react-icons/lu";
import { getDownloadURL, ref, uploadBytes,deleteObject } from "firebase/storage";
const Profile=()=>{
    let pref=useRef();
    let [pic,setpic]=useState(null);
    let setPic=()=>{
        pref.current.click();
       
    }
    let [loader,setLoader]=useState(false);
    //intiallize imag uploader
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    
      
      const handleImageChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
      const handleUpload = () => {
        if (image) {
            setLoader(true)
            toast.info('Uploading Profile pic', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: null,
                theme: "dark",
                });
            
            console.log(image.name);
            //check if there is any locally stored file in local storage or not
         if(true){
            const storageRef = ref(storage, `images/${image.name}`);
            
         uploadBytes(storageRef, image).then((snapshot) => {

           getDownloadURL(snapshot.ref).then((downloadURL) => {
             console.log("File available at", downloadURL);
             
             localStorage.removeItem("ppic");
             localStorage.setItem("ppic",JSON.stringify([downloadURL,image.name]));
             toast.success('Updating Photo please wait', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:null ,
                theme: "colored",
                });
             setImageUrl(downloadURL)
             setLoader(false);
             
           }).catch((error) => {
            toast.error('We were unable to fetch image try again', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:null ,
                theme: "dark",
                });
                setLoader(false);
           });
         }).catch((error) => {
            toast.error('Uploading Image was not success full try again', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:null ,
                theme: "dark",
                });
                setLoader(false);
         });
       }
       else{
        //first delete the image file

       }
         }
      };
      //added commits on first load
      const deleteImageFromStorage = () => {
        setLoader(true)
        let profilepic=localStorage.getItem("ppic");
        profilepic=JSON.parse(profilepic)
        const desertRef = ref(storage, `images/${profilepic[1]}`);

        // Delete the file
        deleteObject(desertRef).then(() => {
          
           localStorage.removeItem("ppic")
           toast.success('Deleted !!!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress:null ,
            theme: "colored",
            });
            setImageUrl(`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`);
            setLoader(false);
        }).catch((error) => {
            toast.error('Unable to delete file at the moment', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress:null ,
                theme: "dark",
                });
                setLoader(false);
                setImageUrl(`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`);

        });

      };
    useEffect(()=>{
let profilepic=localStorage.getItem("ppic");

if(profilepic){
    profilepic=JSON.parse(profilepic)
    setImageUrl(profilepic[0])
}
else{
    setImageUrl(`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`);
}
    },[])
    return(
        <div className="md:w-[80%] w-[100%] h-[80vh] flex  justify-center">
            <ToastContainer/>
            <div className="w-[95%] dark:bg-[#222c45] border-2 dark:border-[#485c8a]  bg-slate-200 h-[90vh] pb-4 overflow-y-auto rounded-lg flex flex-col items-center">
                <div className=" relative w-[95%]  border-2 dark:border-[#485c8a]  bg-gradient-to-b from-cyan-500 to-blue-500 md:h-[30vh] h-[24vh] mt-5 flex items-center justify-center rounded-lg">
                      <div className="md:w-[30vh] w-[23vh]  md:h-[30vh]  h-[23vh] bg-white rounded-full absolute md:bottom-[-15vh] bottom-[-12vh] flex justify-center items-center">
                       <div className="md:w-[29vh] w-[22vh]  md:h-[29vh]  h-[22vh]  rounded-full relative">
                        <img  draggable="false" src={`${imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}`} alt="pic" className="md:w-[29vh] w-[22vh]  md:h-[29vh]  h-[22vh] rounded-full object-cover"/>
                       </div>
                       <div onClick={setPic} className="absolute md:translate-x-[10vh] translate-x-[8vh] md:translate-y-[10vh] translate-y-[8vh] bg-indigo-700 p-2 rounded-full  cursor-pointer"><FaCameraRetro className={`text-white ${localStorage.getItem("ppic")?"cursor-not-allowed":"cursor-pointer"}`}/></div>
                       <input disabled={localStorage.getItem("ppic")?true:false} ref={pref} type="file" accept="image/png, image/gif, image/jpeg,image/jpg" onChange={handleImageChange} className="hidden"/>
                      </div>
                     <div className="absolute bottom-2 right-2">{!localStorage.getItem("ppic") && <button disabled={image?false:true} className={`bg-indigo-700 text-white rounded-md p-2 ${image==null?"cursor-not-allowed":"cursor-pointer"}`} onClick={handleUpload}>{loader?<LuLoader2 className=" transition-all animate-spin"/>:"Upload"}</button>}{localStorage.getItem("ppic") && <button className="bg-indigo-600 text-white rounded-md p-2 " onClick={deleteImageFromStorage}>{loader?<LuLoader2 className="transition-all animate-spin"/>:"Delete"}</button>}</div>
                </div>
                <div className=" w-[100%] mt-[15vh] md:flex dark:text-white">
                    <div className="md:w-[50%] h-[22vh] flex flex-col items-center">
                <div className="md:w-[75%] w-[90%]">
                    <h3 className="text-md font-medium select-none">Username</h3>
                    <p className="mt-1 "><input className="w-[100%] dark:placeholder:text-white dark:bg-[#445888] dark:shadow-none p-2 rounded-lg focus:outline-none border-2  border-slate-400 focus:border-slate-600" type="text" placeholder="Username"/></p>
                 </div>
                 <div className="md:w-[75%] mt-1 w-[90%]">
                    <h3 className="text-md font-medium select-none">Email</h3>
                    <p className="mt-1"><input className="w-[100%] dark:bg-[#445888] dark:shadow-none p-2 rounded-lg focus:outline-none border-2 dark:placeholder:text-white  border-slate-400 focus:border-slate-600" type="text" placeholder="Email"/></p>
                 </div>

                    </div>
                    <div className="md:w-[50%]  h-[22vh] flex flex-col items-center">
                 <div className="md:w-[75%] w-[90%]">
                    <h3 className="text-md font-medium select-none">About</h3>
                    <p className="mt-1"><textarea className="w-[100%] dark:bg-[#445888] dark:shadow-none h-[16vh] p-2 rounded-lg focus:outline-none border-2 dark:placeholder:text-white  border-slate-400 focus:border-slate-600" placeholder="Enter description about yourself and job preferences"></textarea></p>
                 </div>
                    </div>
                </div>
                <div className=""><button className="md:p-1  bg-indigo-700 text-white rounded-md mt-1 md:px-3 px-8 py-2 shadow-md dark:placeholder:text-white shadow-indigo-800 cursor-not-allowed w-[100%]">Save</button></div>
            </div>

        </div>
    )
}
export {Profile}