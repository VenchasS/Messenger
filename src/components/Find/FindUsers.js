import React from 'react';
import Search from './Search.js';
import FindUsersresultate from './FindUsersresultateV2.js';
import MoreButton from './Morebutton.js';
import './FindUsers.css';
import { connect } from 'react-redux';
import {getUsersThunk} from './../../redux/reducerForSearchUser';
import {takeUsers} from './../../redux/reducerForSearchUser';
import {setFollow} from './../../redux/reducerForSearchUser';


const FindUser = (props) => {
    
    return(
    <div className="FindUserWindow"> 
        <Search />
        <FindUsersresultate {...props}  />
        <MoreButton />
    </div>
    
    )
};

let mapStateToProps = (state) => {
    
    return{
        users: state.ForUsersPage.users,
        pageSize: state.ForUsersPage.pageSize,
        totalUsersCount: state.ForUsersPage.totalUsersCount,
        currentPage: state.ForUsersPage.currentPage,
        loading: state.ForUsersPage.loading

    }
 }
 let mapDispatchtoProps = (dispatch) => {
     return{
         follow: (id) => {dispatch({type:'FOLLOW', userid:id})},
         unfollow: (id) => {
             dispatch({type:'UNFOLLOW', userid:id})
         },
         setusers:(newusers) => {
             dispatch({type:'SET_USERS', users:newusers})
         },
         setCurrentPage:(page) => {dispatch({type:'CURRENT_PAGE',currentPage:page})},
         setTotalUsersCount:(total) => {dispatch({type:'setTotalUsersCount', total:total })},
         setloading:(bool) => {dispatch({type:'LOADING',loading:bool})},
         getUsersThunk:(a,b)=>{ dispatch(getUsersThunk(a,b)) },
         takeUsers:(page) => { dispatch(takeUsers(page)) },
         setFollow:(a,b)=>{ dispatch(setFollow(a,b)) }
     }
 }

let FindUserContainer = connect(mapStateToProps,mapDispatchtoProps)(FindUser);
 
export default FindUserContainer;
