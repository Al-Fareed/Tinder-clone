import { IconButton } from '@mui/material'
import React from 'react'
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavaoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const SwipeButtons = () => {
  return (
    <div className="SwipeButtons">
        <IconButton className="swipeButtonRepeat">
            <ReplayIcon fontSize='large'/>
        </IconButton>
    <IconButton className="swipeButtonleft">
            <CloseIcon fontSize='large'/>
        </IconButton>
    <IconButton className="swipeButtonStar">
            <StarRateIcon fontSize='large'/>
        </IconButton>
    <IconButton className="swipeButtonRight">
            <FavaoriteIcon fontSize='large'/>
        </IconButton>
    <IconButton className="swipeButtonFlash">
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons