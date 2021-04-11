import React, { useEffect } from 'react';
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
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; 
import { keepAuth } from './actions/auth';

const App = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('token'));
  const { token } = useSelector((state) => ({ token: state.auth.token}), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(keepAuth());
  }, [])

  return (
    <>
      <BrowserRouter>
        <CreatePostModal />
        <Navbar />
        { !isLoggedIn && (
          <>
            <Switch>
              <Route path="/" exact component={LoggedOutHome} />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
              <Redirect to="/login" />
            </Switch>
          </>
        )}
        { isLoggedIn && (
          <>
            <Sidebar />
            <Switch>
              <Route path="/" exact component={LoggedInHome} />
              <Route path="/community" component={Community} />
              <Route path="/profile" component={Profile} />
              <Route path="/friends" component={Friends} />
              <Redirect to="/" />
            </Switch>
          </>
        )}
      </BrowserRouter>
    </>
  )
}

export default App;
