import MyPosts from './Myposts/MyPosts';
import Post from './Myposts/Post/Post';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts  />
    </div>
  )
}

export default Profile;