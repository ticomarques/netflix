import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebaseConfig';
import Nav from '../components/Nav';
import PlansScreen from './PlansScreen';
import "./ProfileScreen.css";


function ProfileScreen() {

    const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
        <Nav />

        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img 
                    src="https://preview.redd.it/ty54wbejild91.jpg?width=320&auto=webp&s=e8f363bbbeee8561e3aa66fb6979dc6f669b06bd"
                    alt="Profile"
                />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <PlansScreen />
                        <button className="profileScreen__signOut" onClick={() => { auth.signOut()}}>Sign out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen