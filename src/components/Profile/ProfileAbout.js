import React from 'react';

const AboutMeProfileBlock = (props) => {
   return(
       <div className='aboutBlock'>
           <div>Статус: {props.status}</div>
           <div>Обо мне: {props.about}</div>
           <div>Ищу работу:  { props.job === true ? 'Да':'Нет' } </div>
           <div>О работе: {props.lookingForAJobDescription} </div>
       </div>
   )
}

export default AboutMeProfileBlock;