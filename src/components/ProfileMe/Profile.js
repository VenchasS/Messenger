import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import ProfileContainer from './ProfileContainer';
import { withRouter} from 'react-router-dom';
import {setProfile} from '../../redux/reducerForProfile';
import AuthRedirect from '../../hoc/authRedirect';
import { compose } from 'redux';
import {getStatus} from '../../redux/reducerForProfile';
import {setStatus} from '../../redux/reducerForProfile';

const Profile = (props) => {
    
    return(
        <ProfileContainer {...props} />
    )
};

let Props = (state) => {
    
    return{
        data: state.ForProfile,
        myid: state.auth.id,
        status:state.ForProfile.status
    }
};

let dispatchToProps = (dispatch) => {
    return{
        newPost: (text) =>  dispatch({type:'NEW-POST',text: text}),
        setUserProfile:(profile) => dispatch({type:'setUserProfile',profile}),
        setProfile: (id)=>{dispatch( setProfile(id)) },
        getStatus: id=>dispatch(getStatus(id)),
        setStatus: status => dispatch(setStatus(status)) 
    }
};



export default compose(
    AuthRedirect,
    connect(Props,dispatchToProps),
    withRouter
    )
    (Profile)

