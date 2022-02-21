import './App.css';
import {Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {Search} from "./components/SearchPage";
import {Individual} from "./components/Individual";
 
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
