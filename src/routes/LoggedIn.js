import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { signNewToken } from '../actions/Auth.action'
import Community from '../components/community/Community'
import ViewCommunity from '../components/community/ViewCommunity'
import Friends from '../components/friends/Friends'
import LoggedInHome from '../components/home/LoggedInHome'
import CreateCommunityModal from '../components/modal/CreateCommunityModal'
import CreatePostModal from '../components/modal/CreatePostModal'
import Navbar from '../components/Navbar/Navbar'
import Profile from '../components/profile/Profile'
import Sidebar from '../components/sideTab/Sidebar'
import decode from 'jwt-decode'
import Loading from '../components/etc/Loading'

const LoggedIn = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)
  const accessToken = JSON.parse(localStorage.getItem('accessToken'))

  useEffect(() => {
    // exp -> s, Date.now() => ms
    const { exp } = decode(accessToken)
    if(Date.now()/1000 >= (exp- 5)) {
      dispatch(signNewToken())
      console.log("refresh! ")
    } else {
      const timeOutId = setTimeout(() => {
        dispatch(signNewToken())
        console.log("refresh! in timeout")
      }, (exp*1000 - Date.now())- 5000)
      dispatch({type: "DONE"})
      return function cleanup() {
        clearTimeout(timeOutId)
        console.log("cleanup function")
      }
    }
  }, [accessToken, dispatch])

  if (isLoading) return <Loading />
  return (
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
  )
}

export default LoggedIn
