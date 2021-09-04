import React from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className='header'>
        
            <IconButton>
                <PersonIcon/>
            </IconButton>

            <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2017/06/Shell-Logo.png" alt=""/>
            <IconButton><ForumIcon className="header_logo" /></IconButton>
            
        </div>
    )
}

export default Header
