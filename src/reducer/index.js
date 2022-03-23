import data from './../data/gifs'

import { FETCH_START } from '../actions'

const initialState = {
    gifs: data,
    loading: false, 
    error: '' 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return{
                ...state,
                loading: true,
                error: ''
            }
        default:
            return(state)
    }
}

export default reducer;