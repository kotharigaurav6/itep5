import { SET_TAGLINE } from "./actionTypes";

export const setTagline = (tagLine)=>{
    return {
        type:SET_TAGLINE,
        payload:{
            tagLine
        }
    }
};
