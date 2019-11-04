import React, {useState, useEffect} from 'react';
import Collapsible from 'react-collapsible';
import FizzBuzzComponent from './FizzBuzz';
import StackBar from '../StackBar/StackBar';

function FAQ(){
    const [fizz, setFizz] = useState(3);
    const [buzz, setBuzz] = useState(5);
    const [fizzBuzz, setFizBuzz] = useState(15);
    useEffect(() =>{
        setFizBuzz(fizz*buzz);
    },[fizz, buzz]);

    return (
        <section className = "about">
            <p>
                I'm a software currently located in Burlington, VT. I have a serious passion for programming for the web on both the front and back ends! <br />
                I love learning new technologies and stacks and have some amazing teamwork experience and believe the importance of skilled collaboration <br />
                can never be over stated. I'm looking to provide an organization with the technical and team skills it needs to succeed, if that sounds like you <br />
                <a href="/contact">reach out</a>!
            </p>

            <section className="accordion">
                <h3>Frequently Asked Questions</h3>
                <Collapsible className="accordion-bar" trigger="What are your favorite technologies?">
                    <StackBar className="accordion-content" />
                </Collapsible>

                <Collapsible className="accordion-bar" trigger="What kind of experience do you have?" >
                    <h4>Some highlights of my technical and work experience</h4>
                    <ul>
                        <li>Web Development Team Lead at <a href="https://lambdaschool.com">Lambda School</a> Academy of Computer Science and Software Engineering</li>
                        <li>Full Stack Software Engineer at AllStack Software and Solutions</li>
                        <li>Over 5 years of development experience with formal education from Lambda School and certifications from freeCodeCamp</li>
                        <li>Team Leadership experience in high-stress environments with career experience with the U.S. Army, and various organizations as a nurse and AEMT</li>
                    </ul>
                </Collapsible>

                <Collapsible className="accordion-bar" trigger= "But can you FizzBuzz?" >
                    <form>
                        <label htmlFor="fizz-selector">Fizz: 
                        <input id="fizz-selector" type="number" value={fizz} onChange={event => {setFizz(event.target.value)}}></input>
                        </label>
                        <label htmlFor="buzz-selector">Buzz: 
                        <input id="buzz-selector" type="number" value={buzz} onChange={event => {setBuzz(event.target.value)}}></input>
                        </label>
                        <br />
                    </form>
                    <FizzBuzzComponent fizz={fizz} buzz={buzz} fizzBuzz={fizzBuzz} />
                </Collapsible>
            </section>
        </section>
    );
}



export default FAQ;