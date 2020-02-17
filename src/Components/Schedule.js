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
                    <div className="card pb-5 pt-5 mb-5">

                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
