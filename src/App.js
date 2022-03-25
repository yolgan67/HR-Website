import "./App.css";
import AppRouters from "./config/routes";
import  NavBar  from "./components/NavBar";
import Footer from "./components/Footer";

function App() {  
  return (
    <div className="App">
      <NavBar/>
     <AppRouters/>
     <Footer/>
    </div>
  );
}

export default App;
