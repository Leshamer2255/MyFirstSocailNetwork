import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile,status,updateStatus}) => {
  
  if (!profile) {
    return <Preloader />
  }

  return (

    <div>
      <div className='main__img'>
        <img src='https://dgdesign.ru/uploads/posts/2016-11/1478002805_zelenye-fony-dlya-shapok-sayta-176589.jpg' alt=''></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt=""></img>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;
