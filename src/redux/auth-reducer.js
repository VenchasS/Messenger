import Axios from "axios";


let initialState = {
    email:null,
    userId: null,
    login: null,
    auth: false,
    loading: false
};

const setLoading = (bool)=>{
    return(dispatch)=>{
        dispatch({
            type:'SET_LOADING', loading:bool
        })
    }
}


const authReducer = (state = initialState, action)=>{
    
    switch (action.type) {
        case 'SET_USER_DATA': return{...state, ...action.data, auth:action.auth }
        case 'SET_LOADING': return{...state, loading:action.loading} 
    
        default:
            return state;
    }
};

export default authReducer;

export const makeAuth = (dispatch)=>{ 
        
        Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials: true})
        .then(response => { if(response.data.resultCode === 0){ dispatch({ type:'SET_USER_DATA', data:response.data.data, auth:true }); }
        dispatch(setLoading(false));})
    
}
export const sendDataToAuth = (data)=>{
    return(dispatch)=>{
        Axios.post('https://social-network.samuraijs.com/api/1.0/auth/login',{
            email:data.login,
            password:data.password,
            rememberMe:data.rememberMe,
            captcha:true
        },{withCredentials: true})
        .then(response => {
            dispatch(makeAuth)
        })
    }
}
export const logout = (dispatch)=>{
    Axios.delete('https://social-network.samuraijs.com/api/1.0/auth/login',{withCredentials:true})
    .then(response => { if (response.data.resultCode === 0) {
        dispatch( { type:'SET_USER_DATA', auth:false } );
    } })
}