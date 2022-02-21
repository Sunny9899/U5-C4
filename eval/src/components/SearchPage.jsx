import {Navbar} from "./Navbar"
import axios from "axios";
import{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getData,alpha,alphaDesc,date,dateDesc,quality,qualityDesc,filterExplicit,indIdSaving } from "../redux/actions";
import { useEffect } from "react";
import {Link} from "react-router-dom";

export const Search = ()=>{
   
    const {loading,initdata}=useSelector((store)=>store.search);
    const dispatch=useDispatch();


    useEffect(()=>{
    fetchData();
    },[])

    const fetchData = ()=>{
        axios.get("https://fast-reef-22226.herokuapp.com/data").then(({data})=>{
            dispatch(getData(data));
        })
    }

    const Save = (ID)=>{
        dispatch(indIdSaving(ID));
    }


    return loading ? "Loading...":(<div>
        <Navbar/>
        <hr/>
        <div>
        <button onClick={()=>{
            initdata.sort(function(a,b){
                return (a.title-b.title);
            })
            dispatch(alpha(initdata));
        }}>
            Sort A-Z
        </button>



        </div>
        <hr/>
        <div id="search-result">

            <div id="result">

            {initdata.map((elmnt)=>(
                <div key={elmnt.id}>
                  {elmnt.url}
                  <br/>
                 <Link to={`page/${elmnt.id}`} ><b onClick={()=>{Save(elmnt.id)}}>{elmnt.title}</b></Link> | {elmnt.author}
                  <br/>
                  {elmnt.description}
                  <br/>
                  Creation Date: {elmnt.creation_date}
                  <br/>
                  Explicit: {elmnt.explicit ===true ? "Yes" : "No"}
                  <br/>
                  <br/>
                </div>
            ))}

            </div>

        </div>
    </div>);
            

      /*

      */
}