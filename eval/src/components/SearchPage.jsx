import {Navbar} from "./Navbar"
import {axios} from "axios";
import{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getData,alpha,alphaDesc,date,dateDesc,quality,qualityDesc,filterExplicit } from "../redux/actions";
import { useEffect } from "react";

export const Search = ()=>{
   
    const {data}=useSelector((store)=>store.data);
    const dispatch=useDispatch();

    const fetchData = ()=>{
        axios.fetch("https://fast-reef-22226.herokuapp.com/data").then((dat)=>{
            console.log(dat);
        })
    }



    return (<div>
        <Navbar/>
        <div>Sorting</div>
        <div>

        </div>
    </div>);
            /*
            {data.map((elmnt)=>(
                <div></div>
            ))}
            */
}