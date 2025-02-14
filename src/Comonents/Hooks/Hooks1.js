//example of useeffect hooks

import React, { useEffect, useState } from "react";
const Hook1 = ()=>{

    const[count,setCount] = useState(0);
    const[calculation,setCalculation] = useState(0)

    // useEffect(()=>{
        // setTimeout(()=>{
            // setCount((count)=>count+1)
        // },1000)
    // },[])
useEffect(()=>{
    setCalculation(()=>   
        count*2)



 
},[count])   //adding variable to make effects based on variable change
    return(
        <>
        <h1>This is render {count} time</h1>
        <button onClick={()=>setCount((count)=>count+1)}>click</button>
        <h1>{calculation}</h1>
        
        </>
    )

}

export default Hook1;