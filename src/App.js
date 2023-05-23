
import './App.css';
import Header from './components/Header/Header';
import Nav from './components//Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
    <div className='app-wrapper-content'>
    <Routes>
      <Route path='/dialogs/*'  element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />  
      <Route path='/profile' element={<Profile posts={props.posts}/>} />  
    </Routes>
    </div>
    </div>
  
    </BrowserRouter>
    )
}

export default App;
