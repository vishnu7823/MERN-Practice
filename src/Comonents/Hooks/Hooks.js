import React, { useState } from 'react'

const Hooks = ()=>{
const[cars,setCars] = useState({
    name:"Fortuner",
    enginetype:"BS6",
    price:100000,
    color:"red"
})

const colorupdate = ()=>{
    setCars(previousstate => {
        return {...previousstate,color :'blue'}  //passing a fun inside setcars that receives previous state and spread it and overwrite the color
    })
}


const foods = ["Briyani",'Parotta','chicken','curdrice'];
const listitems = foods.map((food,index)=>(
    <li key={index}>{food}</li>
    
        
));

    return(
        <>
        <h1>This is my {cars.name}</h1>
        <p>this is the engine model {cars.enginetype} and price is {cars.price}</p>
        <h1>color is {cars.color}</h1>
        <button onClick={colorupdate}>Click to color update</button>

        <ul>{listitems}</ul>

        
        </>

        
    
    )

}

export default Hooks;