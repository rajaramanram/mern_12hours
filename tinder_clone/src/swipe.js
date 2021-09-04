import './swipe.css';
import React from 'react'
import ReplyIcon from '@material-ui/icons/Reply';
import CloseIcon from '@material-ui/icons/Close';
import BugReportIcon from '@material-ui/icons/BugReport';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
//onClick={swiped}


function Swipe() {
    return (
        <div className="swipeButtons">
            <IconButton  className="swipeButtons__repeat">
                <ReplyIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="swipeButtons__left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="swipeButtons__star">
                <BugReportIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="swipeButtons__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Swipe
