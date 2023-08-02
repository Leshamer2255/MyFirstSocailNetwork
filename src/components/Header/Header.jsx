import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../assets/images/logootip.png'

const Header = (props) => {
  return <header className={s.header}>
    <div className={s.title}><img src={logo} alt=''></img></div>
    <div className={s.loginBlock}>
      {props.isAuth 
      ? <div> {props.login}  - <button onClick={props.logout}>EXIT</button> </div>
      : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  
  </header>
}

export default Header;