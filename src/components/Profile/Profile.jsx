import MyPostsContainer from './Myposts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'


const Profile = (props) => {
  return (
    <div className={s.mainBlock}>
      <ProfileInfo savePhoto={props.savePhoto} 
      isOwner={props.isOwner} profile={props.profile}
      status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile}/>
      <MyPostsContainer  />
    </div>
  )
}

export default Profile;