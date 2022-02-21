import {
    GET_DATA,
    SORT_ALPHABETICALLY,
    SORT_ALPHABETICALLY_DESC,
    SORT_BY_DATE,
    SORT_BY_DATE_DESC,
    SORT_BY_QUALITY,
    SORT_BY_QUALITY_DESC,
    FILTER_EXPLICIT
} 
from "./actionTypes"

const init={
    data:[],
}


export const reducer =(store=init,{type,payload})=>{
    switch(type){
        case SORT_ALPHABETICALLY:
            return{...store,data:{...store.data, data:payload}};
        case SORT_ALPHABETICALLY_DESC:
            return{...store,data:{...store.data, data:payload}};
        case SORT_BY_DATE:
            return{...store,data:{...store.data, data:payload}};
        case SORT_BY_DATE_DESC:
            return{...store,data:{...store.data, data:payload}};
        case SORT_BY_QUALITY:
            return{...store,data:{...store.data, data:payload}};
        case SORT_BY_QUALITY_DESC:
            return{...store,data:{...store.data, data:payload}};
        case FILTER_EXPLICIT:
            return{...store,data:{...store.data, data:payload}};
        case GET_DATA:
            return{...store,data:{...store.data, data:payload}} 


        default:
            return {...store};
    }
}