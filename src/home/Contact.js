import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact(props) {
    const handleChange = (value) => {
        if (value === 'github') {
            window.open("https://github.com/alf0ns0-l0pez");
        }
        if (value === 'linkedin') {
            window.open("https://www.linkedin.com/in/alfonsolopezobando/");
        }
        if (value === 'twitter') {
            window.open("https://twitter.com/alf0ns0l0pez");
        }
    }
    return (
        <div style={{paddingBottom: '6rem' }}>
            <div className='title_xxl' style={{color:'#fff'}}><h1 >Contact</h1></div>
            <form className='row_img'>
                <GitHubIcon value='github' onClick={() => handleChange("github")} className='social_net_img' sx={{ fontSize: '6rem' }} />
                <LinkedInIcon value='linkedin' onClick={() => handleChange("linkedin")} className='social_net_img' sx={{ fontSize: '6rem' }} />
                <TwitterIcon value='twitter' onClick={() => handleChange("twitter")} className='social_net_img' sx={{ fontSize: '6rem' }} />
            </form>
        </div>
    );
}