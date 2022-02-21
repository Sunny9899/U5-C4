import {Link} from "react-router-dom";


export const Home = ()=>{
  

     return (<div className="home">
         <h1>Google</h1>
         <input placeholder="search Google" className="search-box" style={{"width":"400px"}} 
         onKeyDown={(()=>(
            <Link to="/search"/>
         ))}/>
     </div>);

}