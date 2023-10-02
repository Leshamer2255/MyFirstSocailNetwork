import React from 'react';
import { connect } from 'react-redux';   
import { follow, unfollow, getUsers } from "../../Redux/Users-reducer.ts";
import Users from './Users.tsx';
import Preloader from '../common/preloader/Preloader.js';
import { compose } from 'redux';
import { getUser, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/users-selectors.ts';
import { UserType } from '../../types/types.js';
import { AppStateType } from '../../Redux/redux-store.js';

type MapStatePropsType = {
    currentPage:number
    pageSize:number
    isFetching: boolean
    totallUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    getUsers: (currentPage:number, pageSize:number) => void
    unfollow:(userId:number) => void
    follow: (userId:number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
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
        // toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totallUsersCount: state.usersPage.totallUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totallUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

 export default compose (
    // withAuthRedirect,
    connect <MapDispatchPropsType, MapStatePropsType, AppStateType> (
        mapStateToProps, {unfollow,follow,getUsers})
 ) (UsersContainer)

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
