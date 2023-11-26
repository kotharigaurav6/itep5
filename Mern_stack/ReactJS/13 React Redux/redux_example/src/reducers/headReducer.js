import { SET_TAGLINE } from "../actions/actionTypes";

const initialState = {
    tagline : 'This is an example of React Redux'
}

export default function common(state=initialState,action){
    switch(action.type){
        case SET_TAGLINE :
            const {tagline} = action.payload
            return{
                ...state,
                tagline
            }                   
        default : return state     
    }
}