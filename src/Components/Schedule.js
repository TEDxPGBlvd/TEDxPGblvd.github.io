import React, { Component } from 'react';
import firebase from "./Firebase/Firebase";
import {PayPalButton} from "react-paypal-button-v2";
import {TextField} from "@material-ui/core";

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="schedule">
                <div className="w-100">
                    <h2 className="mb-5" style={{color: "white"}}>Schedule</h2>
                    <div className="card pb-5 pt-5 mb-5 pl-5">
                        <h3>5:45 pm - Registration</h3>
<h3>6:00 pm - Welcome and Introduction Video</h3>
<h3>6:10 pm - Talks</h3>
<h3>7:10 pm - Intermission: Food, Networking, Stretching</h3>
<h3>7:45 pm - Speakers</h3>
<h3>8:30 pm - Closing Remarks</h3>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
