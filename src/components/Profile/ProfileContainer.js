import ProfileHeader from './ProfileHeader.js';
import ProfilePosts from './ProfilePosts.js';
import NewPost from './NewPost.js'
import React from 'react';
import ProfileAboutMe from './ProfileAbout';


class ProfileContainer extends React.Component {

    componentDidMount = () => {
        this.props.setProfile(this.props.id);
        this.props.getStatus(this.props.id);
    }

    componentWillUnmount = ()=>{
        this.props.setUserProfile();
    }
    
    render() {

        if (!this.props.data.profile) { return (<div class="lds-ring"><div></div><div></div><div></div><div></div></div>) }

        return (
            <div>
                <ProfileHeader url={this.props.data.profile.photos.small} fullname={this.props.data.profile.fullName} />
                <ProfileAboutMe status={this.props.status} lookingForAJobDescription={this.props.data.profile.lookingForAJobDescription} job={this.props.data.profile.lookingForAJob} about={this.props.data.profile.aboutMe} />
                {/* <NewPost newPost={this.props.newPost} add={this.props.data.CreateNewPost} /> */}
                <ProfilePosts url={this.props.data.profile.photos.small} text={this.props.data.Posts} />
            </div>
        )
    }
}


export default ProfileContainer;