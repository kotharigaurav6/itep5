import { SET_TAGLINE } from "./actionTypes";

export const setTagline = (tagline)=>{
    return {
        type:SET_TAGLINE,
        payload:{
            tagline
        }
    }
};
