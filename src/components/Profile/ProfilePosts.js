import React from 'react';

const AllPosts = (props) => {
    return(
            <div className="AllPosts">
                <div>Все записи:</div>
                {props.text.map(text => <Post Text={text.text} url={props.url} />  )}
            </div>
    )
};

const Post = (props) => {
    return(
            <div className="SimplePost">
                <img src={props.url}   width="50px"></img>
                <div className="PostText">{props.Text}</div>
            </div>
    )
};

export default AllPosts;
