import React from 'react';
import { connect } from 'react-redux';   
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers } from "../../Redux/Users-reducer";
import Users from './Users';
import Preloader from '../common/preloader/Preloader';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render () {
        return <>
        {this.props.isFetching ? <Preloader />: null}
        <Users   
        totallUsersCount={this.props.totallUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage} 
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totallUsersCount: state.usersPage.totallUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUserAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totallUsersCount) => {
//             dispatch(setTotalUsersCountAC(totallUsersCount));
//         },
//         toggleIsFetching:(isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }


export default connect  (mapStateToProps,  
    {unfollow,follow,setCurrentPage,
    toggleFollowingProgress, getUsers})
 (UsersContainer); 



