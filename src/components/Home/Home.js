import React from 'react';
// import StackBar from '../../../StackBar/StackBar';
import headShot from '../../images/headshot.jpg';

function Home(props){
    return(
        <section className="home">
            <div className="top">
                <div className="image-wrapper">
                    <a href="https://github.com/Joshua-Burleson"><img src={headShot} alt="Headshot of Joshua"/></a>
                </div>
            </div>
            <div className="live-divide"></div>
            <h1>Joshua C. Burleson</h1>
            {props.animate ? <h3 className="animatedEngineer"></h3> : <h3>{`< Full Stack Software Engineer />`}</h3>}
            {props.additionalComponent && <props.additionalComponent />}
        </section>
    )
}

export default Home;