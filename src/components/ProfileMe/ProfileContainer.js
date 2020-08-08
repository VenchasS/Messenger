import ProfileHeader from './ProfileHeader.js';
import ProfilePosts from './ProfilePosts.js';
import NewPost from './NewPost.js'
import React from 'react';

import ProfileAboutMe from './ProfileAboutWithHook';




class ProfileContainer extends React.Component{
    
componentWillUnmount(){this.props.setUserProfile()}

    componentDidMount(){ this.props.setProfile(this.props.myid); this.props.getStatus(this.props.myid) }
    

    render() {

        if(!this.props.data.profile){return (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>)}
        return(
            <div>
        <ProfileHeader url={this.props.data.profile.photos.small}  fullname={this.props.data.profile.fullName} />
        <ProfileAboutMe setStatus={this.props.setStatus} status={this.props.status} lookingForAJobDescription={this.props.data.profile.lookingForAJobDescription} job={this.props.data.profile.lookingForAJob} about={'this.props.data.profile.aboutMe'}/>
        <NewPost newPost={this.props.newPost} add={this.props.data.CreateNewPost}/>
        <ProfilePosts url={this.props.data.profile.photos.small} text={this.props.data.Posts}/>
        </div>
        )
    }
}


export default ProfileContainer;