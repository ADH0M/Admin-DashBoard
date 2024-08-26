import { Bell, MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Headers = ({ title }) => {

const [darkMode , setDarkMode] = useState(()=>{
  const saveDarkMode = localStorage.getItem("darkMode")
  return saveDarkMode ? JSON.parse(saveDarkMode) : false
 } )

useEffect(()=>{
  if(darkMode){
    document.documentElement.classList.add('dark')
  } else{
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem("darkMode" ,JSON.stringify(darkMode))
},[darkMode])

const toggleDarkMode =()=>{
  return setDarkMode(!darkMode)
}
  return (
    <div className="  bg-gray-50 text-gray-900 border-b-[#5446e7c5] dark:bg-[#41368ac0] border-b dark:text-gray-50 dark:border-b-[#cdc9f8b6] p-4 lg:px-8 ">
      <div className="flex ">
        {title}
        <div className="flex-1 gap-4 flex justify-end pr:4 lg:pr-8 ">
          {darkMode ? <button onClick={toggleDarkMode}><SunIcon size={24} color="#eee" /></button>:<button onClick={toggleDarkMode} ><MoonIcon size={24} color="#8B5CF6" /></button>  }
          <Bell size={24} color="#EC4899" />
        </div>
      </div>
    </div>
  );
};

export default Headers;
