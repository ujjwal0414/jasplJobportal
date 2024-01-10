import { FaPlus } from "react-icons/fa6"

const Update=()=>{
   return(
    <div className="md:w-[80%] md:h-[80vh] flex  justify-center">
    <div className="w-[95%] bg-slate-200  overflow-y-auto rounded-lg flex flex-col items-center pb-6">
        <div className="w-[95%] mt-6">
            <div className="text-2xl font-semibold">Profile Page</div>
            <div className="text-slate-700 text-sm">Dear User, the profile page component is still not completed due to the time limitations but in future if possiblw many functionalities will be added thus enhancing the user experience.But currently you will be able to update your photo and delete it too.</div>
            <ul>
                <li className="text-slate-800 text-sm font-semibold">In the users description a ML model might be implemented which will fetch job/internship according to user preferences.</li>
            </ul>
        </div>
        <div className="w-[95%] mt-6">
            <div className="text-sm font-semibold flex items-center"><button className="flex items-center gap-1 p-2 rounded-md bg-indigo-600 text-white"><FaPlus/> New Job</button>
            <p className="ml-2 text-2xl">Component</p></div>
            <div className="text-slate-700 text-sm">Currently this component is for the firm who will create job postings for the candidates,since right now its a common web app which will be used by both client and firm workers. Right now no backend has been integrated for this component but if deployed all jobs created will be listed in the Jobs component.</div>
            
        </div>
        <div className="w-[95%] mt-6">
            <div className="text-xl font-semibold">Search functionalities in Home component
            </div>
            <div className="text-slate-700 text-sm">The search component in Home section is not functional and therefore now action or filtering will take place if anything written there.</div>
            
        </div>
        <div className="w-[95%] mt-6">
            <div className="text-xl font-semibold">Page Responsiveness
            </div>
            <div className="text-slate-700 text-sm">Currently this web page is not made responsive so it might not look good in mobile phones but if time allows it will be made accordingly so that the page appears responsive on different devices.</div>
            
        </div>
        <div className="w-[95%] mt-6">
            <div className="text-xl font-semibold">Getting users reason score for the job .
            </div>
            <div className="text-slate-700 text-sm">Every User card component has been provided with a Get analysis button which will classify his/her preference of emotions and it's score .Its using an nlp api for this,but if in future you are unable to access the sentiments kindly contact so that new api pin can be generated for availing the api.</div>
            
        </div>
        <div className="w-[95%] mt-6">
            <div className="text-xl font-semibold">Dark mode feature.
            </div>
            <div className="text-slate-700 text-sm">Currently website is using white background ,soon a dark mode feature will be available allowing user to toogle between two contrasts.</div>
            
        </div>
    </div>
   </div>
   )
}
export {Update}