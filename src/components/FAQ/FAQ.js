import React from 'react';
import Collapsible from 'react-collapsible';
import StackBar from '../StackBar/StackBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function FAQ(){
    return (
        <section className="accordion">
            <Collapsible className="accordion-bar" trigger="What are your favorite technologies?">
                <StackBar className="accordion-content" />
            </Collapsible>

            <Collapsible className="accordion-bar" trigger={<FontAwesomeIcon className = "down-arrow" icon={faAngleDown} />} >
                <StackBar className="accordion-content" />
            </Collapsible>

            <Collapsible className="accordion-bar" trigger={<FontAwesomeIcon className = "down-arrow" icon={faAngleDown} />} >
                <StackBar className="accordion-content" />
            </Collapsible>
        </section>
    );
}

export default FAQ;