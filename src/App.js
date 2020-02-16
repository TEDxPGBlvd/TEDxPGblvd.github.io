import React, { Component } from 'react';
import profileData from './profileData.json';
import Sidebar from "./Components/Sidebar";
import Landing from "./Components/Landing";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Interests from "./Components/Interests";
import Awards from "./Components/Awards";
import Projects from "./Components/Projects";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      projects : profileData.projects
    }
  }
  render() {
    return (
        <div className="App">
          <Sidebar sidebarData={this.state.landingData}/>
          <div className="container-fluid p-0">
            <Landing landingData={this.state.landingData}/>
            <hr className="m-0"/>
            <Experience experience={this.state.experience}/>
            <hr className="m-0"/>
            <Education education={this.state.education}/>
            <hr className="m-0"/>
            <Skills skills={this.state.skills} pluralsight={this.state.landingData.pluralsight}/>
            <hr className="m-0"/>
            <Projects projects={this.state.projects}/>
            <hr className="m-0"/>
            <Interests interests={this.state.interests}/>
            <hr className="m-0"/>
            <Awards awards={this.state.awards}/>

          </div>
        </div>
    );
  }
}

export default App;
