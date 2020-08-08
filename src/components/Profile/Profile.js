import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import ProfileContainer from './ProfileContainer';
import { withRouter } from 'react-router-dom';
import {setProfile} from './../../redux/reducerForProfile';
import {getStatus} from '../../redux/reducerForProfile';

const Profile = (props) => {  
    
    return(
        <ProfileContainer  {...props}  id={props.match.params.userid}  />
    )
};

let Props = (state) => {
    
    return{
        data: state.ForProfile,
        status:state.ForProfile.status
    }
};

let dispatchToProps = (dispatch) => {
    return{
        newPost: (text) =>  dispatch({type:'NEW-POST',text: text}),
        setUserProfile:(profile) => dispatch({type:'setUserProfile',profile}),
        setProfile: (id)=>{ dispatch(setProfile(id))},
        getStatus: id=>dispatch(getStatus(id)),
    }
};

let blabla = withRouter(Profile);
let ProfileContainerConnect = connect(Props,dispatchToProps)(blabla);

export default ProfileContainerConnect;
