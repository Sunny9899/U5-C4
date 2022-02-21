import {
    GET_DATA,
    SORT_ALPHABETICALLY,
    SORT_ALPHABETICALLY_DESC,
    SORT_BY_DATE,
    SORT_BY_DATE_DESC,
    SORT_BY_QUALITY,
    SORT_BY_QUALITY_DESC,
    FILTER_EXPLICIT,
    ID_SAVING_INDIVIDUAL,
} 
from "./actionTypes"

const init={
    search:{
    loading:true,
    initdata:[],
    IndID:0,
    }
}


export const reducer =(store=init,{type,payload})=>{
    switch(type){
        case SORT_ALPHABETICALLY:
            return{...store,search:{...store.search, initdata:payload}};
        case SORT_ALPHABETICALLY_DESC:
            return{...store,search:{...store.search, initdata:payload}};
        case SORT_BY_DATE:
            return{...store,search:{...store.search, initdata:payload}};
        case SORT_BY_DATE_DESC:
            return{...store,search:{...store.search, initdata:payload}};
        case SORT_BY_QUALITY:
            return{...store,search:{...store.search, initdata:payload}};
        case SORT_BY_QUALITY_DESC:
            return{...store,search:{...store.search, initdata:payload}};
        case FILTER_EXPLICIT:
            return{...store,search:{...store.search, initdata:payload}};
        case GET_DATA:
            return{...store,search:{...store.search, initdata:payload ,loading:false}} 
        case ID_SAVING_INDIVIDUAL:
            return {...store,search:{...store.search,IndID:payload,loading:false}}; 



        default:
            return {...store};
    }
}