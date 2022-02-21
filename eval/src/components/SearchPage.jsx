import {Navbar} from "./Navbar"
import {axios} from "axios";

export const Search = ()=>{
  
let data = axios.fetch("https://fast-reef-22226.herokuapp.com/data");


    return (<div>
        <Navbar/>
        <div>Sorting</div>
        <div>
            {data.map((elmnt)=>(
                <div></div>
            ))}
        </div>
    </div>);

}