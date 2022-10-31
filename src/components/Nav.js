import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./Nav.css";

function Nav() {

  const [show, handleShow] =  useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if(window.scrollY > 100){
        handleShow(true);
    } else {
        handleShow(false);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
            <img 
                src="./logo.png" 
                alt="Netflix logo" 
                className="nav__logo"
                onClick={() => { history.push("/")}}
                />
            <img 
                src="./profile.webp" 
                alt="Profile"
                className="nav__avatar"
                onClick={() => { history.push("/profile")}}
            />
        </div>
    </div>
  )
}

export default Nav