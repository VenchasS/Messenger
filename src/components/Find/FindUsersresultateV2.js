import React from 'react';


import { NavLink } from 'react-router-dom';


const TypicalFriend = (props) => {
    let Status = (status) => { if (status === true) { return 'отписаться' } else { return 'подписаться' } };
    
    return (
        <div className="TypicalFriend" >
            {props.status ? 
            <div onClick={() => { props.setFollow(false,props.id) }} className={`followButton redbgc`}>{Status(props.status)}</div> : 
            <div onClick={() => { props.setFollow(true,props.id) }} className={`followButton greenbgc`}>{Status(props.status)}</div>}
           <NavLink   to={"/profile/"+props.id}>
            <img alt="avatar" width='50px' className="circle" src={props.image}></img>
            </NavLink>
            <div className="blabla" >
                <div className="SearchFriendBlock" >
                    <div className="NameOfUserInSearch"> {`${props.name} ${props.surname}.`} </div>
                    <div> {props.city} </div>
                </div>
            </div>
         
        </div>
    )
}




class Resultate extends React.Component {
    componentDidMount() {
         this.props.getUsersThunk(this.props.currentPage,this.props.pageSize);      
    }

    takeUsers = (page) => { 
        this.props.takeUsers(page);      
    }

    render() {
        let PageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= PageCount; i++) {
            pages.push(i);
        }

        let pagesNavigation = [];
        
        for(let i = this.props.currentPage-3;i< this.props.currentPage+4;i++){if(i<1){continue} pagesNavigation.push( <span onClick={() => { this.props.setCurrentPage(i); this.takeUsers(i); }} className={i === this.props.currentPage ? "active" : null}  > {i} </span> ) }

        
        return (
            <div className="FindUsersresultate">
                <div> { pagesNavigation.map(count => {return(count)}) } </div>
                { this.props.loading === true ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : null }
                {this.props.users.map((user) => {

                    return (
                        <TypicalFriend  {...this.props} follow={this.props.follow} image={user.photos.small != null ? user.photos.small: "https://via.placeholder.com/50"}
                            unfollow={this.props.unfollow} id={user.id} status={user.followed} name={user.name} surname={user.surName == null ? '' : user.surName} 
                            city={"user.location.city"} />
                    )
                })}
            </div>
        )
    }



}

export default Resultate;