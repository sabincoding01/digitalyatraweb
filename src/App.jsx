import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Home from "./Home";
import UseEffect from "./useEffect";

function App() {
  return (
    <BrowserRouter>
    <Routes>

<Route path="/home" element ={<Home/>}/>
<Route path="/about" element ={<h1>About</h1>}/>
<Route path="/use_effect" element ={<UseEffect/>}/>



    </Routes>
    </BrowserRouter>

  )
}

export default App