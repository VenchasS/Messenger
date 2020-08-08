import React from 'react';
import {NavLink} from 'react-router-dom';

const DialogFriend = (props) => {
        return(
            <NavLink  to={'/dialogs/'+props.Id} title={props.Name +' '+ props.Surname} className="SimleFriendDialog" >
                {props.Name + " " + props.Surname[0]+'.'}
            </NavLink>
        )
};

export default DialogFriend;
