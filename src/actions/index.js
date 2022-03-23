import axios from 'axios';

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'

export const getGifs = () => {
    return((dispatch => {
        dispatch({ type: FETCH_START })
        axios.get('https://api.giphy.com/v1/gifs/search?api_key=eF68i1SpJhoVnYQRTDKYcXdtpZlGeJDP&q=cats')
            .then(res => {
                dispatch({ type: FETCH_SUCCESS, payload: res.data.data })
            })
            .catch(err => {
                console.log(err)
            })
    }))
}

export const fetchStart = () => {
    return({ type: FETCH_START })
}

export const fetchSuccess = gifs => {
    return({ type: FETCH_SUCCESS, payload: gifs })
}