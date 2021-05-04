import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoggedInHome from './components/home/LoggedInHome';
import Community from './components/community/Community';
import Profile from './components/profile/Profile';
import Friends from './components/friends/Friends';
import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';
import Sidebar from './components/sideTab/Sidebar';
import LoggedOutHome from './components/home/LoggedOutHome';
import CreatePostModal from './components/modal/CreatePostModal';
import { useDispatch, useSelector } from 'react-redux'; 
import { keepAuth, logOut } from './actions/auth';
import decode from 'jwt-decode';
import CreateCommunityModal from './components/modal/CreateCommunityModal';
import ViewCommunity from './components/community/ViewCommunity';

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  // const token = JSON.parse(localStorage.getItem('token'));
  

  useEffect(() => {
    dispatch(keepAuth());
  }, [dispatch])

  useEffect(() => {
    if (token && (decode(token).exp < Date.now()/1000)) {
      dispatch(logOut());
    }
  }, [token, dispatch])

  return (
    <>  
      { !token && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={LoggedOutHome} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Redirect to="/login" />
          </Switch>
        </BrowserRouter>
      )}
      { token && (
        <BrowserRouter>
          <CreatePostModal />
          <CreateCommunityModal />
          <Navbar />
          <Sidebar />
          <Switch>
            <Route path="/" exact component={LoggedInHome} />
            <Route path="/community" exact component={Community} />
            <Route path="/community/:communityId" component={ViewCommunity} />
            <Route path="/profile" component={Profile} />
            <Route path="/friends" component={Friends} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      )}
    </>
  )
}

export default App;
