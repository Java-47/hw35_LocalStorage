import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import StarWars from './StarWars';
import { navItems } from '../utils/constants';

const Main = ({currentPage}) => {

    switch (currentPage) {
        case navItems[1]:
            return <AboutMe />
        case navItems[2]:
            return <StarWars />
        case navItems[3]:
            return <Contact />
        default:
            return <Home />
    }

}

export default Main