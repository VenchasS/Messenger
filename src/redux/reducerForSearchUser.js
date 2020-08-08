import Axios from "axios";

let innitialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    loading: true
}

const setLoading = (bool) => {
    return { type: 'LOADING', loading: bool }
}

const reducerForSearchUser = (state = innitialState, action) => {
    switch (action.type) {
        case 'SHOW_MORE': return state

        case 'FOLLOW': return {
            ...state, users: state.users.map(user => {
                if (user.id === action.userid) { return { ...user, followed: true } }
                else { return user }

            })
        }
        case 'UNFOLLOW': return {
            ...state, users: state.users.map(user => {
                if (user.id === action.userid) { let newstate = { ...user }; newstate.followed = false; return newstate }
                else { return user }

            })
        }

        case 'SET_USERS': return { ...state, users: [...action.users] }
        case 'CURRENT_PAGE': return { ...state, currentPage: action.currentPage }
        case 'setTotalUsersCount': return { ...state, totalUsersCount: action.total }
        case 'LOADING': return { ...state, loading: action.loading }

        default: return state

    }
}
export default reducerForSearchUser;

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
            headers: { 'api-key': '871c5dc0-b5cf-47b8-b0e5-bbb084caa7ec' }
        })
            .then(response => {
                dispatch({ type: 'SET_USERS', users: response.data.items });
                dispatch({ type: 'setTotalUsersCount', total: response.data.totalCount });
                dispatch(setLoading(false))
            })
    }
}
export const takeUsers =(page)=>{
 return (dispatch) => { 
    dispatch({type:'SET_USERS', users:[]});  
    dispatch(setLoading(true));
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=10`, {
        withCredentials: true,
        headers:{'api-key':'871c5dc0-b5cf-47b8-b0e5-bbb084caa7ec'}
    })
    .then(response => { dispatch({type:'SET_USERS', users:response.data.items});    
    dispatch(setLoading(false));
         })
}
}
export const setFollow =(bool,id) => {

    if (bool) {
        return (dispatch)=>{
            Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {} 
            ,{withCredentials:true,headers:{'api-key':'871c5dc0-b5cf-47b8-b0e5-bbb084caa7ec'} })
            .then(response => {if(response.data.resultCode === 0){ dispatch( {type:'FOLLOW', userid:id} ) }} )
            
        }
    }

    return (dispatch)=>{
        Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}` ,
        {withCredentials:true,headers:{'api-key':'871c5dc0-b5cf-47b8-b0e5-bbb084caa7ec'} })
        .then( response => {if(response.data.resultCode === 0){ dispatch({type:'UNFOLLOW', userid:id})}} )
            
    }
}