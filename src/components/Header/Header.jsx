import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return <header className={s.header}>
    <div><a className={s.title}>AnimeGram</a></div>
    <div className={s.loginBlock}>
      {props.isAuth 
      ? <div> {props.login}  - <button onClick={props.logout}>EXIT</button> </div>
      : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  
  </header>
}

export default Header;