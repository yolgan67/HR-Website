import "./App.css";
import AppRouters from "./config/routes";
import  NavBar  from "./components/NavBar";


function App() {  
  return (
    <div className="App">
      <NavBar/>
     <AppRouters/>
    
    </div>
  );
}

export default App;
