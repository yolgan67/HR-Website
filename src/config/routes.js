import { Route, Routes } from "react-router-dom";
import AboutUs from "../components/pages/AboutUs";
import Candidates from "../components/pages/Candidates";
import Homepage from "../components/pages/Homepage";
import UserCard from "../components/UserCard";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/candidates/*" element={<Candidates />}/>
        {/* <Route path="user/:id" element={<UserCard />} /> */}
    
    </Routes>
  );
};
export default AppRouters;
