import React from 'react';
import headShot from '../images/headshot.jpg';

//So META!!!

function Home(props){
    return(
        <section className="home">
            <div className="top">
                <div className="image-wrapper">
                    <a href="https://github.com/Joshua-Burleson"><img src={headShot} /></a>
                </div>
            </div>
            
            <h1>Joshua C. Burleson</h1>
            <h3>{`< Full Stack Software Engineer />`}</h3>
            {props.additionalComponent && <props.additionalComponent />}
        </section>
    )
}

export default Home;