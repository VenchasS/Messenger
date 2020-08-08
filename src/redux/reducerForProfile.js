import Axios from "axios";


let initialState = {
    Name: 'Veniamin',
    Surname: 'Bezborodov',
    Posts: [{
        text: 'lorem',
        id: 1
    }, {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 2
    }],
    Url: 'https://avatars.mds.yandex.net/get-yapic/36777/ppTgGpfZGMQPJdgGHbcF4s99hC0-1572379071/islands-300',
    profile: null,
    status:null
     //{
    // "aboutMe": "чисто чиил",
    // "lookingForAJob": true,
    // "lookingForAJobDescription": "я еще не готов",
    // "fullName": "Veniamin Bezborodov",
    // "photos": {
    //   "small": "https://avatars.mds.yandex.net/get-yapic/36777/ppTgGpfZGMQPJdgGHbcF4s99hC0-1572379071/islands-300",
      
    // }}
}

let CreateNewPost = (PostMessage, state) =>
    {
        if (PostMessage === '') {
        return state
    }
    let NewPost = {
        text: PostMessage,
        id: state.Posts[state.Posts.length - 1].id + 1
    };
    let newstate = {...state}
    newstate.Posts = [...state.Posts]
    
    newstate.Posts.push(NewPost)
    
    
    return newstate;
    };




const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'NEW-POST': let newstate = CreateNewPost(action.text, state);
            return newstate;
        case 'setUserProfile': return{...state, profile: action.profile}
        case 'SET_STATUS': return {...state, status:action.status }
       
        default: return state;

    };

   
};
export default Reducer;

export const setProfile = (id) => {
    return (dispatch) => {         
        if(!id){return;}
        if(id === 'me'){return;}
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                .then(response => { 
                    dispatch({type:'setUserProfile',profile:response.data});                                
                })
    }
    
}

export const getStatus = (id)=>{
    return (dispatch)=>{
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${id}`)
    .then(response => { 
        dispatch({type:'SET_STATUS', status:response.data});
    })

}  
}
export const setStatus = (status)=>{
   
    return (dispatch)=>{
        Axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`,{"status":status},{withCredentials:true,
        headers:{'API-KEY':'871c5dc0-b5cf-47b8-b0e5-bbb084caa7ec'}  })
    .then(response => {
        dispatch({type:'SET_STATUS', status:status}); 
    })

}}
    
  




