import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);


  if (!profile) {
    return <Preloader />
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData);
    setEditMode(false)
}

  return (
    <div className={s.mainBlock}>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.user} alt=""></img>
        {isOwner && <input type={"file"} onChange={onPhotoSelected} />}
      </div>
      <div>
      {editMode 
      ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
      : <ProfileData toEditMode={ () => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>

  )
}

const ProfileData = ({profile, isOwner, toEditMode}) => {
  return  <div className={s.infoBlock}>
      {isOwner && <div><button className={s.button} onClick={toEditMode}></button></div>}
        <div>
          <div>
            <b>Full name</b>: {profile.fullName}
          </div>
          <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? " yes" : " no"}
          </div>
          {profile.lookingForAJob &&
            <div>
              <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
          }
          <div>
            <b>About me</b>: {profile.aboutMe}
          </div>
          <div>
            <b>Contact</b>:{Object.keys(profile.contacts).map(key => {
              return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
          </div>
        </div>
      </div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
