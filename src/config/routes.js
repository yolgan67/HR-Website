import { Route, Routes } from "react-router-dom";
import AboutUs from "../components/pages/AboutUs";
import Candidates from "../components/pages/Candidates";
import Homepage from "../components/pages/Homepage";


const AppRouters = () => {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/candidates/*" element={<Candidates />} />
    </Routes>
  );
};
export default AppRouters;
