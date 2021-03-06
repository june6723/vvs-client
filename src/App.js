import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import Loading from './components/etc/Loading';
import { CHECK } from './constants/actionTypes';
import LoggedIn from './routes/LoggedIn';
import LoggedOut from './routes/LoggedOut';

const App = () => {
  const { isLoggedIn } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: CHECK })
  }, [dispatch])

  if(isLoggedIn === undefined) return <Loading />
  return (
    isLoggedIn ? <LoggedIn /> : <LoggedOut />
  )
}

export default App;
