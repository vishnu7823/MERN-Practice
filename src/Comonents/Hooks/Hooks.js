import React, { useState } from 'react'

const Hooks = ()=>{
const[cars,setCars] = useState({
    name:"Fortuner",
    enginetype:"BS6",
    price:100000,
    color:"red"
})

const[count,setCount] = useState(0);
const[value,setValue] = useState("");

const handlechange = (e)=>{
    setValue(e.target.value);


}

const handleincrement = ()=>{
    setCount(()=>count+1)
}

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

        <h1>Numbers: {count}</h1>
        <button onClick={handleincrement}> Click to increment</button>


        <label>Name</label>
        <input onChange={handlechange} value={value} placeholder='enter ' />
        <h1>{value}</h1>
        

        
        </>

        
    
    )

}

export default Hooks;