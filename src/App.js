import React, { Component } from 'react';
import profileData from './informationData.json';
import Sidebar from "./Components/Sidebar";
import Landing from "./Components/Landing";
import Speakers from "./Components/Speakers";
import Tickets from "./Components/Tickets";
import {
  BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Confirmation from "./Components/Confirmation";
import './App.css';
import Schedule from "./Components/Schedule";
import Contact from "./Components/Contact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      projects : profileData.projects,
      speakers: profileData.speakers,
      gary: profileData.gary
    }
  }
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/confirmation">
                    <Confirmation/>
                </Route>
                <Route path="/">
                <div className="App">
                    <Sidebar sidebarData={this.state.landingData}/>
                    <div className="container-fluid p-0">
                        <Landing landingData={this.state.landingData}/>
                        <hr className="m-0"/>
                        {/*Speakers*/}
                        {/*<Speakers speakers={this.state.speakers} gary={this.state.gary}/>*/}
                        {/*/!*<Experience experience={this.state.experience}/>*!/*/}
                        {/*<hr className="m-0"/>*/}
                        {/*/!*Tickets*!/*/}
                        {/*<Tickets/>*/}
                        {/*<hr className="m-0"/>*/}
                        {/*/!*Schedule*!/*/}
                        {/*<Schedule/>*/}
                        {/*<hr className="m-0"/>*/}
                        {/*/!*Contact Info*!/*/}
                        {/*<Contact/>*/}
                        {/*<hr className="m-0"/>*/}
                        {/*Sponsors*/}
                        {/*Footer*/}
                    </div>
                </div>
            </Route>
            </Switch>
        </Router>
    );
  }
}

export default App;
