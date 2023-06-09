import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUserAC, unfollowAC } from "../../Redux/Users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export default connect  (mapStateToProps, mapDispatchToProps) (Users); 