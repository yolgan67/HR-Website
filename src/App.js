import { Routes,Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/pages/Homepage";
import AboutUs from "./components/pages/AboutUs"
import Candidates from "./components/pages/Candidates"
import AppRouters from "./config/routes";
import  NavBar  from "./components/NavBar";

function App() {  
  return (
    <div className="App">
      <NavBar/>
     {/* <AppRouters/> */}
     <Routes>
      <Route index element={<Homepage />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="candidates/*" element={<Candidates />}/>
        {/* <Route path="user/:id" element={<UserCard />} /> */}
    
    </Routes>
    </div>
  );
}

export default App;
