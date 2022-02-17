import './navbar.styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import { showSidebar } from '../../store/actions/sidebar';

function Navbar() {

    const dispatch = useDispatch()
    const handleSidebarAction = () => {
        dispatch(showSidebar())
    }


    return (
        <nav id="navbar">
            <div className="nav__container">
                <div className="logo__container">
                    <Link to='/' className="nav__logo"> Joe Shepherd </Link>
                </div>

                <div className="nav__link__container">
                    <ul className="nav__links">
                        <li className="nav__option"> 
                            <Link to='/about' className='nav__link'> About </Link>
                        </li>

                        <li className="nav__option"> 
                            <Link to='/gallery' className='nav__link'> Gallery </Link> 
                        </li>

                        <li className="nav__option"> 
                            <Link to='/services' className='nav__link'> Services </Link> 
                        </li>

                        <li className="nav__option"> 
                            <Link to='/contact' className='nav__link'> Contact </Link> 
                        </li>
                        
                    </ul>
                    <GiHamburgerMenu onClick={ () => handleSidebarAction() } className='navbar__burger'/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;