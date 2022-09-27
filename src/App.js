import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { gapi } from 'gapi-script';
import './App.css'
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./pages/Profile/Profile";
import {userLoginFailure, userLoginSuccess} from "./store/Reducers/authSlice";
import {allPosts} from "./store/Actions/postsActions";
import Post from "./pages/Post/Post";
import NotFound from "./pages/NotFound/NotFound";

const App = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { userInfo } = useSelector(state => state.auth);

    const clientId = process.env['GOOGLE_CLIENT_ID'];
    useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
      });
    };
    gapi.load('client:auth2', initClient);
    dispatch(allPosts());
  });

    const onSuccess = (res) => {
        dispatch(userLoginSuccess(res.profileObj));
    };
    const onFailure = (err) => {
        dispatch(userLoginFailure(err));
    };
    const logOut = () => {
        dispatch(userLoginSuccess(null));
        navigate('/')
    };

  return (
      <div className='App'>
          <Navbar userInfo={userInfo}/>
          <Routes>
              <Route path='/' element={<Home onSuccess={onSuccess} onFailure={onFailure} />} />
              <Route path={'/posts/:id'} element={<Post/>}/>
              <Route path='/profile' element={<Profile logOut={logOut} clientId={clientId} userInfo={userInfo}/>} />
              <Route path={'*'} element={<NotFound/>}/>
          </Routes>
      </div>
  );
}
export default App;
