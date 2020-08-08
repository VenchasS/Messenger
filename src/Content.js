import React from 'react';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/Dialogs/Dialogs.js'
import News from './components/News/News.js'
import Settings from './components/Settings/Settings.js'
import { Route,} from "react-router-dom";
import FindUser from './components/Find/FindUsers.js';
import ProfileMe from './components/ProfileMe/Profile.js';
import Login from './components/login/login';

const Content =(props) => {

    return(
        
         
        <div className='Content'>
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/profile/:userid?" render={() => <Profile />} />
        <Route path="/me" render={() => <ProfileMe />} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
        <Route path="/finduser" render={() => <FindUser />} />
        <Route path="/login" render={() => <Login />} />
        {/* <Route path="/finduserv2" render={() => <FindUser />} /> */}
        </div> 
        
        

    )
};

export default Content;
