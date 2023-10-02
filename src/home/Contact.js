import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from  '@mui/icons-material/YouTube';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import {UrlList} from './constants'

export default function Contact(props) {
    const handleChange = (value) => {
        window.open(UrlList[value]);
    }
    return (
        <div style={{paddingBottom: '6rem' }}>
            <div className='title_xxl' style={{color:'#fff'}}><h1 >Contact</h1></div>
            <form className='row_img'>
                <GitHubIcon value='github' onClick={() => handleChange("github")} className='social_net_img' sx={{ fontSize: '6rem' }} />
                <YouTubeIcon value='youtube' onClick={() => handleChange("youtube")} className='social_net_img' sx={{ fontSize: '6rem' }} />
                <LinkedInIcon value='linkedin' onClick={() => handleChange("linkedin")} className='social_net_img' sx={{ fontSize: '6rem' }} />
                <ThreeDRotationIcon value='grabcad' onClick={() => handleChange("grabcad")} className='social_net_img' sx={{ fontSize: '6rem' }} />
                <TwitterIcon value='twitter' onClick={() => handleChange("twitter")} className='social_net_img' sx={{ fontSize: '6rem' }} />
            </form>
        </div>
    );
}