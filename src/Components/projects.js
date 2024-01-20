import { useNavigate } from "react-router-dom"
const Project=()=>{
    return(
        <div className="md:w-[80%] w-[100%] h-[80vh] flex  justify-center ">
            <div className="w-[95%] bg-slate-100  overflow-y-auto pb-3 rounded-lg border-2 dark:border-[#485c8a] dark:bg-[#222c45]">
            <div className="grid md:grid-cols-3 gap-3 justify-evenly ml-5 mr-5 mt-5">
            <div className="bg-slate-300 dark:bg-[#4e5b7d] dark:text-white min-h-[8vh] rounded-lg pb-2">
                            <h3 className="flex items-center ml-3 mt-3 font-semibold text-xl justify-between">Internship Opportunity<span className="text-xs float-right mr-4">Date : YYYY-MM-DD</span></h3>
                            <p className="ml-3 mr-2 dark:text-[#d8d7d8]">We at JASPL are looking for skillful interns who will be collaborating with industry experts and will adorn their own skills.<br/>Below is the given google form to apply as your dream position.Good Luck!</p>
                            <button  className="ml-3 mt-2 p-2 px-4 bg-indigo-700 text-white rounded-lg"><a className="none" href="https://docs.google.com/forms/d/e/1FAIpQLSfC_asD_P7ZU6WmbdKOmhkmEFT0HR464uPi6sCkAnIU3Y2-jQ/viewform?usp=pp_url" target="_blanck">Fill form</a></button>
                        </div>
                        
                       

                    </div>
            </div>

        </div>
    )
}
export {Project}