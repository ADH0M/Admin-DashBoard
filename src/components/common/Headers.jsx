import { Bell,MoonIcon,LucideSun} from "lucide-react";
import { useState } from "react";

const Headers = ({title}) => {
    const [darkMode  , setDarkMode ] =useState( true )
  return (
    <div className="bg-[#41368ac0] border-b border-b-[#cdc9f8b6] p-4 lg:px-8 ">
      <div className="flex ">

      {title}
      <div className="flex-1 gap-4 flex justify-end pr:4 lg:pr-8 ">
        {darkMode ? <MoonIcon onClick={()=>{setDarkMode(!darkMode)}} size={24} color="#8B5CF6"/> 
        : <LucideSun onClick={()=>{setDarkMode(!darkMode)}} size={24} color="#e8e7f7cc"/>} 
        
        <Bell size={24} color="#EC4899"/>

        
      </div>
      </div>

    </div>
  )
}

export default Headers
