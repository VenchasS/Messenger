import React from 'react';
import DialogFriend from './DialogFriends.js';
import './Dialogs.css'
import { Redirect } from 'react-router-dom';
import Messages from './someMessages';
import { connect } from 'react-redux';
import AuthControl from '../../hoc/authRedirect';

let MessageRef = React.createRef();

const Dialogs = (props) => {
    
    

    return (
        <div className="DialogWindow">
            <div className="AllFriendsDialog">

                {props.data.ForMessage.Friends.map(friend => <DialogFriend className='SimleFriendDialog' Id={friend.id} Name={friend.name} Surname={friend.surname} />)}
            </div>
            <div className="DialogWithUser">

                <div className='Messages'> <Messages messages={props.data.ForMessage.Messages} /> </div>
                <div className='SendMessage'>
                    <form method='post' onSubmit={() => MessageRef.current.value = 0}>
                        <textarea id="textareamessageFriends" ref={MessageRef} placeholder='Ведите сообщение' autoFocus={true}>
                        </textarea>
                        <span onClick={props.func} >отправить</span>
                    </form>

                </div>
            </div>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        data: state,
        auth:state.auth.auth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        dispath: dispatch,
        func: () => {
            dispatch({
                type: 'SEND_MESSAGE'
                , id: 1
                , message: MessageRef.current.value
            });
            MessageRef.current.value = '';
            dispatch({ type: 'RERENDER' })
        }
    }
    
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);



export default AuthControl(DialogsContainer); 
