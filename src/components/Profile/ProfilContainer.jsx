import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../Redux/Profile-reducer.ts'
import { useParams  } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}
class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 29370;
      // this.props.authUserId;  
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
 }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId ) {
    this.refreshProfile();
    }
  }

render() {
  return (
      <Profile {...this.props} 
       isOwner={!this.props.match.params.userId}
       profile={this.props.profile}
       status={this.props.status} 
       updateStatus={this.props.updateStatus}
       savePhoto={this.props.savePhoto}/>
    )}
}

let mapStateToProps = (state) => {
  return ({ 
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth
  })
}

export default compose (
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
) (ProfileContainer)