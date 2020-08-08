import React from 'react';
import { NavLink } from 'react-router-dom';


const LoginTrue = (props)=>{ 
    return( 
        <>
    <div>
        {props.login}
    </div> 
    <div className='logout' onClick={props.logout} > Выйти </div>
    </>
    )
}

const Header = (props) => {
    return(
    <div className="header" >
            <div className="logo">
                <img src="http://clipart-library.com/images_k/letter-transparent/letter-transparent-18.png" width='50px' alt=""/>
            </div>
    {props.auth === true ? 
    <LoginTrue login={props.login} logout={props.logout} />:
    <NavLink className='Login' to='/login'>Войти</NavLink> }
    
    </div>
    );
}
export default Header;
