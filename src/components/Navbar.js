import React, { useState } from "react";

const Navbar = () => {
    const [linkedin] = useState('https://www.linkedin.com/in/anderson-mendoza-aguiar-1b47a7203');
    const [isShowMenu, setIsShowMenu] = useState(false);
    
    return (
        <React.Fragment>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" >
                <div className="navbar-brand">
                    <button className={`navbar-burger ${isShowMenu ? 'is-active' : ''}`} onClick={() => setIsShowMenu( !isShowMenu )} aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navbarMenu" className={`navbar-menu ${isShowMenu ? 'is-active' : ''}`} onClick={() => setIsShowMenu( !isShowMenu )}>
                    <div className="navbar-end p-5">
                        <a href="#profile" className="nav-item m-2 is-primary button">Home</a>
                        <a href="#description" className="nav-item m-2 is-primary button">About me</a>
                        <a href="#skills" className="nav-item m-2 is-primary button">Skills</a>
                        <a href="#works" className="nav-item m-2 is-primary button">Projects</a>
                        <a href={ linkedin } target="_blank" rel="noreferrer" className="nav-item m-2 is-primary button contacme">Contact me</a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar
