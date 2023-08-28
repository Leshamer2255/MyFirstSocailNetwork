import './App.css';
import Nav from './components//Navbar/Nav';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer, { withRouter } from './components/Profile/ProfilContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import React from 'react';
import { connect } from 'react-redux';
import { initialize } from './Redux/app-refucer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';



class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }


  render () {
    if(!this.props.initialized ) {
    return <Preloader />
    } 
    return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Nav />
    <div className='app-wrapper-content'>
    <Routes>
      <Route path='/dialogs/*'  element={<DialogsContainer />} />  
      <Route path='/profile/:userId?' element={<ProfileContainer  />} />  
      <Route path='/users' element={<UsersContainer />} /> 
      <Route path='/login' element={<Login />} /> 
      {/* <Route path='*' element={<div> 404 NOT FOUND</div>} />  */}
    </Routes>
    </div>
    </div>
    )
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
  withRouter,
  connect(mapStateToProps, {initialize})) (App);
