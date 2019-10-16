import React from 'react';
import githubIcon from '../images/github.png';
import linkedInIcon from '../images/linkedin.png';
import twitterIcon from '../images/twitter.png';

function SocialBar(){
    return(
        <ul class="social-bar">
            <li className="socialLink"><a href="https://github.com/Joshua-Burleson"><img src={githubIcon}/></a></li>
            <li className="socialLink"><a href="https://www.linkedin.com/in/joshua-burleson-580130190"><img src={linkedInIcon}/></a></li>
            <li className="socialLink"><a href="https://twitter.com/ApikeysE"><img src={twitterIcon}/></a></li>
        </ul>
    )
}

export default SocialBar;