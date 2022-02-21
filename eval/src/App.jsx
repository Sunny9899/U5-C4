import './App.css';
import {Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {Search} from "./components/SearchPage";
import { Individual } from './components/Individual';
 
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/Search" element={<Search/>}></Route>
       <Route path="search/page/:id" element={<Individual/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
