import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    
    return (
        <>
            <nav className="navbar has-background-black-bis is-fixed-top" role="navigation" aria-label="main navigation" >
                <div className="navbar-brand">
                    <button className={`navbar-burger has-text-green ${isShowMenu ? 'is-active' : ''}`} onClick={() => setIsShowMenu( !isShowMenu )} aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navbarMenu" className={`navbar-menu has-background-black-bis ${isShowMenu ? 'is-active' : ''}`} onClick={() => setIsShowMenu( !isShowMenu )}>
                    <div className="navbar-end pr-5 pt-5">
                        <Link to="/portfolio" className="nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch">00. Inicio</Link>
                        <Link to="/portfolio/description" className="nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch">01. Acerca de mí</Link>
                        <Link to="/portfolio/skills" className="nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch">02. Habilidades</Link>
                        <Link to="/portfolio/works" className="nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch">03. Proyectos</Link>
                        <a href="https://www.linkedin.com/in/anderson-mendoza-aguiar-1b47a7203" target="_blank" rel="noreferrer" className="nav-item button is-light is-outlined has-text-green is-block-touch">
                            04. Contáctame
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar
