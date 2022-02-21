import {Navbar} from "./Navbar"
import axios from "axios";
import{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getData,alpha,alphaDesc,date,dateDesc,quality,qualityDesc,filterExplicit } from "../redux/actions";
import { useEffect } from "react";

export const Search = ()=>{
   
    const {initdata}=useSelector((store)=>store.data);
    const dispatch=useDispatch();

useEffect(()=>{
    fetchData();
},[])

    const fetchData = ()=>{
        axios.get("https://fast-reef-22226.herokuapp.com/data").then(({data})=>{
            dispatch(getData(data));
        })
    }

   


    return (<div>
        <Navbar/>
        <hr/>
        <div>Sorting</div>
        <hr/>
        <div id="search-result">

            <div id="result">



            </div>

        </div>
    </div>);
            

      /*
                  {initdata.map((elmnt)=>(
                <div>
                  {elmnt.title}
                </div>
            ))}
      */
}