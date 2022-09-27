import React from 'react';
import Login from "../../components/Auth/Login";
import {useSelector} from "react-redux";
import List from "../../components/List/List";

const Home = ({onFailure, onSuccess}) => {
    const { userInfo } = useSelector(state => state.auth);



    return (
        <div className='Home'>
            { (userInfo)
                ? <List/>
                : <Login onSuccess={onSuccess} onFailure={onFailure}/> }
        </div>
    );
};

export default Home;
