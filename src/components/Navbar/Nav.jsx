import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import profile from '../../assets/images/profile.png'
import dialogs from '../../assets/images/dialog.svg'
import news from '../../assets/images/news.png'
import users from '../../assets/images/users.svg'
import music from '../../assets/images/music.png'
import setting from '../../assets/images/settings.svg'

const Nav = () => {
  return (
  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }><img src={profile} alt=''></img></NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }><img src={dialogs} alt=''></img></NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/profile'><img src={news} alt=''></img></NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/users' className = { navData => navData.isActive ? s.active : s.item }><img src={users} alt=''></img></NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/profile'><img src={music} alt=''></img></NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/profile'><img src={setting} alt=''></img></NavLink>
    </div>
  </nav>
  )
}

export default Nav