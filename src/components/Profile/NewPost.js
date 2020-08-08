import React from 'react';
let newPostElement = React.createRef();
 const AddPost = (props) => {
     return  <div className='NewPost'>

        <textarea maxLength="600" placeholder='Новая запись' ref={newPostElement}></textarea>
        <button onClick={() => {
            //props.add(newPostElement.current.value);
            props.newPost(newPostElement.current.value)
            newPostElement.current.value = '';
        }} >Отправить</button>
     </div>

 };

 export default AddPost;
