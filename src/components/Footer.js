import React from 'react'
import './Footer.css';


function Footer() {


  return (
    <div className="footer">
        <h4>Questions? Call 1-111-111-1111</h4>
        <div className="footer__links">

            <img 
                src="./logo.png" 
                alt="Netflix logo" 
                className="footer__logo"
            />

            <ul>
                <li><a href="#1">FAQ</a></li>
                <li><a href="#1">Investors Relations</a></li>
                <li><a href="#1">Ways to Watch</a></li>
                <li><a href="#1">Corporate Information</a></li>
                <li><a href="#1">Only on Netflix</a></li>
            </ul>

            <ul>
                <li><a href="#1">Help Center</a></li>
                <li><a href="#1">Jobs</a></li>
                <li><a href="#1">Terms of Use</a></li>
                <li><a href="#1">Contact Us</a></li>
            </ul>

            <ul>
                <li><a href="#1">Account</a></li>
                <li><a href="#1">Redeem Gift Card</a></li>
                <li><a href="#1">Privacy</a></li>
                <li><a href="#1">Speed Test</a></li>
            </ul>

            <ul>
                <li><a href="#1">Media Center</a></li>
                <li><a href="#1">Buy Gift Cards</a></li>
                <li><a href="#1">Cookie Preferences</a></li>
                <li><a href="#1">Legal Notices</a></li>
            </ul>

        </div>
    </div>
  )
}

export default Footer