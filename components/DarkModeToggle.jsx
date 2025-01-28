import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    


        useEffect(() => {
            if(isDarkMode) {
                document.documentElement.classList.add('dark')
                
            } else {
                document.documentElement.classList.remove('dark')
               
            }
        },[isDarkMode])

        const toggleDarkMode = () => {
            setIsDarkMode(!isDarkMode)
        }

        return (
            <button className="bg-green-700 hover:bg-yellow-400 hover:text-black rounded-md p-2 text-white font-bold h-1/2 border-none" onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        )
}