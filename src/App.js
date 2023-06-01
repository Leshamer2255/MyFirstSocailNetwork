
import './App.css';
import Header from './components/Header/Header';
import Nav from './components//Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';


function App(props) {
return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
    <div className='app-wrapper-content'>
    <Routes>
      <Route path='/dialogs/*'  element={<Dialogs state={props.state.messagesPage} />} />  
      <Route path='/profile' element={<Profile profilePage={props.state.profilePage} 
      dispatch={props.dispatch} />} />  
    </Routes>
    </div>
    </div>
    )
}

export default App;
