import React from 'react';

const SomeMessage = (props) => {
        return(
            <div className={`${'SimpleMessage'} ${props.from}`}>
                <div className="PhotoForMessage"></div>
                <div className="TextOfMessage">{props.text}</div>
            </div>
        )
};

const Messages = (props) => {

    return(
        props.messages.u1.map( obj => (<SomeMessage from={obj.from} text={obj.text} />)  )
    )
};

export default Messages;
