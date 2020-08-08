import React from 'react';
import { NavLink} from 'react-router-dom';

const Navbar =() => {
    return(
        
        <div className='Navbar'>
        <NavLink to='/me' className='BtnNavBar'>Моя страница</NavLink>
        <NavLink to='/news' className='BtnNavBar'>Новостни</NavLink>
        <NavLink to='/dialogs' className='BtnNavBar'>Сообщения</NavLink>
        <NavLink to='/friends' className='BtnNavBar'>Друзья</NavLink>
        <NavLink to='/groups' className='BtnNavBar'>Группы</NavLink>
        <NavLink to='/settings' className='BtnNavBar'>Настройки</NavLink>
        <NavLink to='/finduser' className='BtnNavBar'>Поиск</NavLink>
        </div>

    )
};

export default Navbar;
