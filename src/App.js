import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoggedInHome from './components/home/LoggedInHome';
import Community from './components/community/Community';
import Profile from './components/profile/Profile';
import Friends from './components/friends/Friends'
import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';
import Sidebar from './components/sideTab/Sidebar';
import LoggedOutHome from './components/home/LoggedOutHome';
import CreatePostModal from './components/modal/CreatePostModal';

const App = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  return (
    <>
      <BrowserRouter>
        <CreatePostModal />
        <Navbar />
        <Sidebar />
        { !token && (
          <>
            <Switch>
              <Route path="/" exact component={LoggedOutHome} />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
              <Redirect to="/" />
            </Switch>
          </>
        )}
        { token && (
          <Switch>
            <Route path="/" exact component={LoggedInHome} />
            <Route path="/community" component={Community} />
            <Route path="/profile" component={Profile} />
            <Route path="/friends" component={Friends} />
            <Redirect to="/"   />
          </Switch>
        )}
      </BrowserRouter>
    </>
  )
}

export default App;
