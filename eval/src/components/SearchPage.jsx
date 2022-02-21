import {Navbar} from "./Navbar"
import axios from "axios";
import{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getData,alpha,alphaDesc,date,dateDesc,quality,qualityDesc,filterExplicit } from "../redux/actions";
import { useEffect } from "react";

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





    return loading ? "Loading...":(<div>
        <Navbar/>
        <hr/>
        <div>Sorting</div>
        <hr/>
        <div id="search-result">

            <div id="result">

            {initdata.map((elmnt)=>(
                <div key={elmnt.id}>
                  {elmnt.url}
                  <br/>
                  {elmnt.title} | {elmnt.author}
                  <br/>
                  {elmnt.description}
                  <br/>
                  Creation Date: {elmnt.creation_date}
                  <br/>
                  Explicit: {elmnt.explicit}
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