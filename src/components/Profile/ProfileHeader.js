import React from 'react';

const ProfileHeader = (props) => {
    return(
        <div className='ProfileHeader'>
            {!props.url ? <img alt='avatar' className="ProfilePhoto" width="90px" src='https://via.placeholder.com/50'/>:<img alt='avatar' className="ProfilePhoto" width="90px" src={props.url}/>}
            
            <div className="FullName">
                {props.fullname}
            </div>
        </div>
    )
};

export default ProfileHeader;
