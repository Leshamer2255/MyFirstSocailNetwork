
import './App.css';
import Header from './components/Header/Header';
import Nav from './components//Navbar/Nav';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



function App(props) {
return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
    <div className='app-wrapper-content'>
    <Routes>
      <Route path='/dialogs/*'  element={<DialogsContainer store={props.store}/>} />  
      <Route path='/profile' element={<Profile store={props.store} />} />  
      <Route path='/users' element={<UsersContainer />} />  
    </Routes>
    </div>
    </div>
    )
}

export default App;
