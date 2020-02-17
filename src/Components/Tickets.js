import React, { Component } from 'react';
import firebase from "./Firebase/Firebase";
import {PayPalButton} from "react-paypal-button-v2";
import {TextField} from "@material-ui/core";

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fullname: "",
            firstName: "",
            lastName: ""
        };
        this.speakers = props.speakers;
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    };

    addRegistrant = e => {
        e.preventDefault();
        e.stopPropagation();

        const db = firebase.firestore();
        const registrantsRef = db.collection("registrants").add({
            name: this.state.fullname,
            email: this.state.email
        });
        this.setState({
            fullname: "",
            email: ""
        });
    };

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="tickets">
                <div className="w-100">
                    <h2 className="mb-5" style={{color: "white"}}>Tickets</h2>
                    <div className="card payment pl-4 pr-4 pt-2">
                        <TextField
                        label="First Name"
                        value={this.state.firstName}/>
                        <TextField
                        label="Last Name"
                        value={this.state.lastName}/>
                        <TextField className="pb-4"
                        label="What email address would you like us to send your ticket to?"
                        value={this.state.email}/>

                        <PayPalButton
                            amount="15.00"
                            onSuccess={(details, data) => {
                                alert("Transaction completed by " + details.payer.name.given_name);
                                console.log(details, data);
                                // return fetch("/paypal-transaction-complete", {
                                //     method: "post",
                                //     body: JSON.stringify({
                                //         orderID: data.orderID
                                //     })
                                // })
                            }}
                            // options={{clientId: "AWeU8fCHG3v2moutgRxBY50XeKoCVEYHQh1vaVPP9ZjkpL-v_rfSTMXA_4pjQJjr_RkWj-Z-YDcT3OCh"}}

                        />
                    </div>
                </div>
                {/*<form onSubmit={this.addRegistrant}>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="fullname"*/}
                {/*        placeholder="Name"*/}
                {/*        onChange={this.updateInput}*/}
                {/*        value={this.state.fullname}*/}
                {/*    />*/}
                {/*    <input*/}
                {/*        type="email"*/}
                {/*        name="email"*/}
                {/*        placeholder="Email"*/}
                {/*        onChange={this.updateInput}*/}
                {/*        value={this.state.email}*/}
                {/*    />*/}
                {/*    <button type="submit">Submit</button>*/}
                {/*</form>*/}

            </section>
        );
    }
}

export default Tickets;
