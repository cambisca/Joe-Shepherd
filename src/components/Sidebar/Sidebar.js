import './sidebar.styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { hideSidebar } from '../../store/actions/sidebar';

function Sidebar(){

    const sidebar = useSelector((state) => state.sidebar)
    const dispatch = useDispatch();
    const handleCloseSidebar = () => {
        dispatch(hideSidebar())
    }

    return (
        <section id={sidebar ? 'show-sidebar' : 'hide-sidebar' }className='sidebar'>
            <ul className="sidebar__links">
                <li className="sidebar__link link-1"> 
                    <Link onClick={ ()  => handleCloseSidebar() } to='/' className='sidebar__link'> Home </Link>  
                </li>

                <li className="sidebar__link link-2"> 
                    <Link onClick={ ()  => handleCloseSidebar() } to='/about' className='sidebar__link'> About </Link> 
                </li>

                <li className="sidebar__link link-3"> 
                    <Link onClick={ ()  => handleCloseSidebar() } to='/gallery' className='sidebar__link'> Gallery </Link> 
                </li>
                
                <li className="sidebar__link link-4"> 
                    <Link onClick={ ()  => handleCloseSidebar() } to='/services' className='sidebar__link'> Services </Link>  
                </li>
                
                <li className="sidebar__link link-5"> 
                    <Link onClick={ ()  => handleCloseSidebar() } to='/contact' className='sidebar__link'> Contact </Link>   
                </li>
                
            </ul>
            <div className="sidebar__close">
                <ImCross onClick={ ()  => handleCloseSidebar() } className='close-icon'/>
            </div>
        </section>
    );
}

export default Sidebar;
