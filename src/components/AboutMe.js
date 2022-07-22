import React from 'react';
import styles from "../css_modules/aboutMe.module.css";
import { base_url } from "../utils/constants";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const about = localStorage.getItem('hero');
    const heroDate = localStorage.getItem('hero.date');
    const now = new Date().getTime();
    if (about && (heroDate-now) < 2678400000 ) { //31days in milisec
      
      this.setState({ hero: JSON.parse(about) });
  } else {
    fetch(`${base_url}/v1/peoples/1`)
      .then(response => response.json())
      .then(data => {
        let info = {
          "name": data.name,
          "height": data.height,
          "mass": data.mass,
          "hair_color": data.hair_color,
          "skin_color": data.skin_color,
          "eye_color": data.eye_color,
          "birth_year": data.birth_year,
          "gender": data.gender
        };
        
        this.setState({ hero: info });
        const now = new Date().getTime();
        localStorage.setItem('hero', JSON.stringify(info));
        localStorage.setItem('hero.date', now);
        
        
      });
    }

  }

  componentWillUnmount(){
    console.log('Component AboutMe unmounted');
}

  render() {
    return (
      <div>
        {(this.state.hero) &&
          <div className={`farGalaxy ${styles.hero_box}`}>
            <p><span className={styles.hero_titles}>name:</span> {this.state.hero.name}</p>
            <p><span className={styles.hero_titles}>height:</span> {this.state.hero.height}</p>
            <p><span className={styles.hero_titles}>birth year:</span> {this.state.hero.birth_year}</p>
            <p><span className={styles.hero_titles}>gender:</span> {this.state.hero.gender}</p>
            <p><span className={styles.hero_titles}>mass:</span> {this.state.hero.mass}</p>
            <p><span className={styles.hero_titles}>hair color:</span> {this.state.hero.hair_color}</p>
            <p><span className={styles.hero_titles}>skin color:</span> {this.state.hero.skin_color}</p>
            <p><span className={styles.hero_titles}>eye color:</span> {this.state.hero.eye_color}</p>
          </div>
        }
      </div>
    )

  }
}

export default AboutMe;