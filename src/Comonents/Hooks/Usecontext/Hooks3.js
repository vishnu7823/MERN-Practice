import React,{useContext} from "react";
import {color} from './Hooks2'

function Hooks3(){
  const {theme,toggletheme} = useContext(color)
    return(
        <div style={
            {background: theme === "light" ? "#fff" : "#333"}
        }>
     <h2>current theme:{theme}</h2>
     <button onClick={toggletheme}>Toggle theme</button>
        </div>
    )

}

export default Hooks3;