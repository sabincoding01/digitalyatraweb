import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [count , setCount] = useState(0);

    //type1 of UseEffect on then basis of execution 
/*
     useEffect(()=>{

        console.log("sabin");
    },[]) */

// Type-2 of useeffect on the basis pf execution

 useEffect(()=>{
console.log("sabin")

 },[count])




  return (
    <div><h1>Count</h1>
{count}
        <button onClick={()=> setCount(count+1)}>+</button>
    </div>
  )

}
export default UseEffect