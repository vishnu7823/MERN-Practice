
import React, {useState,createContext}from "react";

const color = createContext();
function Hooks2({children}){

    const[theme,setTheme] = useState('light')

    const toggletheme = ()=>{
        setTheme(theme==='light'?"dark":"light")
    }

    return(
        <div>
           <color.Provider value={{theme,toggletheme}}>
           {children}
           </color.Provider>
        </div>
    )

}

export default Hooks2;
export {color}