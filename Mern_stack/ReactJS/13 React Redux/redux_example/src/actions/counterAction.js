import { INCREMENT,DECREMENT,RESET,SET_COUNTER_TITLE } from "./actionTypes";

export const incrementCounter = ()=>{type:INCREMENT};
export const decrementCounter = ()=>{type:DECREMENT};
export const resetCounter = ()=>{type:RESET};
export const setCounterTitle = (titleTag)=>{
    return {
        type:SET_COUNTER_TITLE,
        payload:{
            title:titleTag
        }
    }
};
