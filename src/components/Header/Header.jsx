import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return <header className={s.header}>
    <img src='https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg' alt=''></img>
  
    <div className={s.loginBlock}>
      {props.isAuth 
      ? <div> {props.login}  - <button onClick={props.logout}>EXIT</button> </div>
      : <NavLink to={'/login'}>Login</NavLink>}

    </div>
  
  </header>
}

export default Header;