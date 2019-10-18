import React from 'react';
import githubIcon from '../images/github.png';
import linkedInIcon from '../images/linkedin.png';
import twitterIcon from '../images/twitter.png';

function SocialBar(){
    return(
        <ul className="social-bar">
            <li className="socialLink"><a href="https://github.com/Joshua-Burleson"><img src={githubIcon} alt="github icon"/></a></li>
            <li className="socialLink"><a href="https://www.linkedin.com/in/joshua-burleson-580130190"><img src={linkedInIcon} alt="linkedIn icon"/></a></li>
            <li className="socialLink"><a href="https://twitter.com/ApikeysE"><img src={twitterIcon} alt="twitter icon"/></a></li>
        </ul>
    )
}

export default SocialBar;