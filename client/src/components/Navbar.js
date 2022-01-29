import React from 'react'
import './navbar.css'


const Navbar = (props) => {
    return (
        <div className="container">
            <body>
                <nav>
                    <img className="img" src="https://ih1.redbubble.net/image.378357496.4455/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg" alt="piratecat"></img>
                    <a className="a" href="/">PAWrates of the Kittenbean</a>
                    <a  className="a" href="/create">Add One</a>
                    <div className="animation start-home"></div>
                </nav>
            </body>
        </div>
    )
}

export default Navbar;