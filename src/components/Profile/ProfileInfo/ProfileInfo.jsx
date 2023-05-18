import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className='main__img'>
        <img src='https://dgdesign.ru/uploads/posts/2016-11/1478002805_zelenye-fony-dlya-shapok-sayta-176589.jpg' alt=''></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_Abbas_-_cartoon_transparent_200px.png' alt=""></img>
      </div>
    </div>
  )
}

export default ProfileInfo;