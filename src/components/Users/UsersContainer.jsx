import React from 'react';
import { connect } from 'react-redux';   
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUserAC, toggleIsFetchingAC, unfollowAC } from "../../Redux/Users-reducer";
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
            then(Response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers (Response.data.items);
                this.props.setTotalUsersCount(Response.data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).
            then(Response => {
                this.props.toggleIsFetching(false); 
                this.props.setUsers (Response.data.items);
            });
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
        isFetching: state.usersPage.isFetching
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totallUsersCount) => {
            dispatch(setTotalUsersCountAC(totallUsersCount));
        },
        toggleIsFetching:(isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}

export default connect  (mapStateToProps, mapDispatchToProps) (UsersContainer); 