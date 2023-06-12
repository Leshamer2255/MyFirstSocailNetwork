import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
  return (
  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/profile'>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/users' className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/profile'>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/profile'>Settings</NavLink>
    </div>
  </nav>
  )
}

export default Nav