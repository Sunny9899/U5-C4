import './App.css';
import {Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {Search} from "./components/SearchPage";
 
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/search" element={<Navbar/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
