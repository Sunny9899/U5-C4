import { useSelector } from "react-redux"
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

export const Individual = ()=>{
  
    const {IndID,loading} =useSelector((store)=>store.search);
    const [show,setShow]=useState([]);
  
    useEffect(()=>{showData()},[])

        const showData = ()=> {
            axios.get(`https://fast-reef-22226.herokuapp.com/data/${IndID}`).then(({data})=>{    
            setShow(data);
        })
        }     

    return loading ?"Loading..." :<div id="detailed-result">
      <div className="title">{show.title}</div>
      <div className="desc">{show.description}</div>
      <div className="author">{show.author}</div>
      <div className="creation-date">{show.creation_date}</div>
      <div className="explicit">{show.explicit === true ? "Yes" : "No"}</div>      
      <div className="quality">{show.quality}</div>
    </div>;

}