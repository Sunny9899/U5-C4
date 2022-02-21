import {
    GET_DATA,
    SORT_ALPHABETICALLY,
    SORT_ALPHABETICALLY_DESC,
    SORT_BY_DATE,
    SORT_BY_DATE_DESC,
    SORT_BY_QUALITY,
    SORT_BY_QUALITY_DESC,
    FILTER_EXPLICIT,
    ID_SAVING_INDIVIDUAL
} 
from "./actionTypes"

export const getData=(payload)=>({
    type:GET_DATA,
    payload
})

export const alpha=(payload)=>({
    type:SORT_ALPHABETICALLY,
    payload
})

export const alphaDesc=(payload)=>({
    type:SORT_ALPHABETICALLY_DESC,
    payload
})

export const date=(payload)=>({
    type:SORT_BY_DATE,
    payload
})

export const dateDesc=(payload)=>({
    type:SORT_BY_DATE_DESC,
    payload
})

export const quality=(payload)=>({
    type:SORT_BY_QUALITY,
    payload
})

export const qualityDesc=(payload)=>({
    type:SORT_BY_QUALITY_DESC,
    payload
})

export const filterExplicit = (payload)=>({
    type:FILTER_EXPLICIT,
    payload
})

export const indIdSaving=(payload)=>({
    type:ID_SAVING_INDIVIDUAL,
    payload
})