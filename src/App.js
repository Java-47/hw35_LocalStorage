import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import React from 'react';
import { navItems } from './utils/constants';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: navItems[0]
    }
  }

  changePage = currentPage => {
    this.setState({currentPage});
  }

  render() {
    return (
      <div className="container-fluid">
        <Header changePage={this.changePage}/>
        <Main currentPage={this.state.currentPage} />
        <Footer />
      </div>
    );
  }

}

export default App;
