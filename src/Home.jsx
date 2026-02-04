import React, { useState } from 'react'

const Home = () => {

     const [count , setCount] = useState(0);
  return (
    <>

   {count}

<button onClick={()=> setCount(count+1)}>+</button>
</>
  )
}
export default Home;