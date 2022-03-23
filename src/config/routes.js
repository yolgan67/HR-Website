import { Route,Routes } from "react-router-dom"
import AboutUs from "../components/AboutUs"
import Candidates from "../components/Candidates"
import Homepage from "../components/Homepage"

 

 const AppRouters = ()=>{
   return (
     <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/aboutUs" element={<AboutUs/>}/>
    <Route path="/candidates" element={<Candidates/>}/>
  </Routes>
)
}
export default AppRouters