import React, {Component} from 'react';
import firebase from "./Firebase/Firebase";
import {PayPalButton} from "react-paypal-button-v2";
import {TextField} from "@material-ui/core";
import uuid from 'react-uuid';


class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            confirmation: "",
            registrantCount: undefined
        };
        this.speakers = props.speakers;
    }

    async componentDidMount() {
        const db = firebase.firestore();
        let querySnapshot = await db.collection("registrants").get();
        let size = querySnapshot.size;
        console.log(size);
        this.setState({
            registrantCount: size
        });
        console.log(this.state.registrantCount);
        this.setState({
            registrantCount: size,
        });
        // this.setState({
        //     registrantCount: 50,
        // });
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    };

    render() {

        let paypalOrConfirmation;
        if (this.state.confirmation === "") {
            paypalOrConfirmation = <PayPalButton
                amount="15.00"
                shippingPreference="NO_SHIPPING"
                onSuccess={(details, data) => {
                    this.addRegistrant();
                    console.log(details, data);

                }}
                onError={(error) => {
                    alert("Error completing transaction: " + error);
                }}

            />;
        } else {
            paypalOrConfirmation =
                <div>
                    <p className="pl-1">{this.state.confirmation}</p>
                    <button type="button" className="btn btn-dark mb-4" onClick={(() => {
                        this.kickstartNewRegistration()
                    })}> Buy Another Ticket
                    </button>
                </div>;
        }



        if(this.state.registrantCount && this.state.registrantCount >= 100){
            return (
                <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="schedule">
                    <div className="w-100">
                        <h2 className="mb-5" style={{color: "white"}}>Schedule</h2>
                        <div className="card pb-5 pt-5 mb-5 pl-5">
                            <h3>SOLD OUT</h3>
                        </div>
                    </div>
                </section>
            );
        }
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="tickets">
                <div className="w-100">
                    <h2 className="mb-5" style={{color: "white"}}>Tickets</h2>
                    <div className="card payment pl-4 pr-4 pt-3 mb-2">
                        <p>{this.state.registrantCount ? 100 - this.state.registrantCount : "Loading # of "} {this.state.registrantCount === 99 ? ' ticket' : " tickets"} left{this.state.registrantCount ? "!" : "..."}</p>
                    </div>
                    <div className="card payment pl-4 pr-4 pt-2">
                        <TextField
                            id="firstNameTextField"
                            label="First Name"
                            defaultValue=""
                            onChange={(event) => this.state.firstName = event.target.value}
                        />
                        <TextField
                            id="lastNameTextField"

                            label="Last Name"
                            defaultValue=""
                            onChange={(event) => this.state.lastName = event.target.value}
                        />
                        <TextField className="pb-4"
                                   id="emailTextField"

                                   label="Email Address"
                                   defaultValue=""
                                   onChange={(event) => this.state.email = event.target.value}
                        />

                        {paypalOrConfirmation}
                    </div>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    document.getElementById("firstNameTextField").value = "";
                    console.log(this.state.firstName);
                }}>
                </form>

            </section>
        );
    }

    addRegistrant() {
        const db = firebase.firestore();
        db.collection("registrants").add({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            id: uuid(),
            sent: false
        });
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            confirmation: "Thank you for registering! Your email confirmation will be sent in the next few days to " + this.state.email
        });
    }

    // clearAndConfirm() {
    //     document.getElementById("firstNameTextField").value = "";
    //     document.getElementById("lastNameTextField").value = "";
    //     document.getElementById("emailTextField").value = "";
    //     this.setState({
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         confirmation: ""
    //     });
    //
    // }

    kickstartNewRegistration() {
        if (document.getElementById("firstNameTextField") &&
            document.getElementById("lastNameTextField") &&
            document.getElementById("emailTextField")
        ) {
            document.getElementById("firstNameTextField").value = "";
            document.getElementById("lastNameTextField").value = "";
            document.getElementById("emailTextField").value = "";
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                confirmation: ""
            });
        }
    }
}

export default Tickets;
