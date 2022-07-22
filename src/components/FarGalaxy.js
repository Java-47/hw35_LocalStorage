import React from 'react';
import style from '../css_modules/farGalaxy.module.css';
import { base_url } from '../utils/constants';

class FarGalaxy extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            opening_crawl: 'Loading...'
        }
    }
    componentDidMount() {
        const text = sessionStorage.getItem('opening_crawl');
        if (text) {
            this.setState({opening_crawl: text});
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({ opening_crawl: data.opening_crawl });
                    sessionStorage.setItem('opening_crawl', data.opening_crawl)
                });

        }
    }
    componentWillUnmount(){
        console.log('Component FarGalaxy unmounted');
    }
    render() {
        return (
            <p className={style.farGalaxy}>{this.state.opening_crawl}</p>
        )
    }

}

export default FarGalaxy