import React from 'react'
import main from '../Images/main.jpg';

const Hero = () => {
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={main} alt="Luke Skywalker" />
        </section>
    )
}

export default Hero