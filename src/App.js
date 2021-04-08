import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Feed from './components/feed/Feed';
import Community from './components/community/Community';
import Profile from './components/profile/Profile';
import Friends from './components/friends/Friends'
import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';
import Sidebar from './components/sideTab/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/community" component={Community} />
        <Route path="/profile" component={Profile} />
        <Route path="/friends" component={Friends} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
