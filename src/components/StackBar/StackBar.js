import React from 'react';
import nodeIcon from '../../images/nodeicon.png';
import reactIcon from '../../images/reacticon.png';
import lessIcon from '../../images/lessicon.png';
import mongoIcon from '../../images/mongoicon.png';
import gitIcon from '../../images/giticon.png';
import expressIcon from '../../images/expressicon.svg';

function StackBar(){
    return (
        <section className="top-technologies">
            <h3>My Current Favorite Technologies</h3>
            <ul className="stack-bar">
                <div className="stack-top">
                    <li className="stackLink"><img src={nodeIcon} alt="github icon"/></li>
                    <li className="stackLink"><img src={reactIcon} alt="linkedIn icon"/></li>
                    <li className="stackLink"><img src={lessIcon} alt="twitter icon"/></li>
                </div>
                <div className="stack-bottom">
                    <li className="stackLink"><img src={gitIcon} alt="twitter icon"/></li>
                    <li className="stackLink"><img src={expressIcon} alt="twitter icon"/></li>
                    <li className="stackLink"><img src={mongoIcon} alt="twitter icon"/></li>
                </div>
            </ul>
    </section>
    );
}

export default StackBar