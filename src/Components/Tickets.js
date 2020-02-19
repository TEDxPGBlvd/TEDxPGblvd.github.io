import React, {Component} from 'react';
import firebase from "./Firebase/Firebase";
import {PayPalButton} from "react-paypal-button-v2";
import {TextField} from "@material-ui/core";
import uuid from 'react-uuid';
import Input from "@material-ui/core/Input";

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            confirmation: ""
        };
        this.speakers = props.speakers;
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    };

    // addRegistrant = e => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //
    //     const db = firebase.firestore();
    //     const registrantsRef = db.collection("registrants").add({
    //         name: this.state.fullname,
    //         email: this.state.email
    //     });
    //     this.setState({
    //         fullname: "",
    //         email: ""
    //     });
    // };

    render() {

        let paypalOrConfirmation;
        if (this.state.confirmation === ""){
            paypalOrConfirmation = <PayPalButton
                amount="15.00"
                shippingPreference="NO_SHIPPING"
                onSuccess={(details, data) => {
                    // alert("Transaction completed by " + details.payer.name.given_name);
                    this.addRegistrant();
                    console.log(details, data);
                    // return fetch("/paypal-transaction-complete", {
                    //     method: "post",
                    //     body: JSON.stringify({
                    //         orderID: data.orderID
                    //     })
                    // })
                }}
                onError={(error) => {
                    alert("Error completing transaction: " + error);
                }}
                // options={{clientId: "PRODUCTION_CLIENT_ID"}}

            />;
        } else {
           paypalOrConfirmation =
               <div>
                    <p className="pl-1">{this.state.confirmation}</p>
                    <button type = "button" className="btn btn-dark mb-4" onClick={(() => {this.kickstartNewRegistration()})} > Buy Another Ticket </button>
               </div>;
        }

        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="tickets">
                <div className="w-100">
                    <h2 className="mb-5" style={{color: "white"}}>Tickets</h2>
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
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    name="fullname"*/}
                    {/*    placeholder="Name"*/}
                    {/*    onChange={this.updateInput}*/}
                    {/*    value={this.state.fullname}*/}
                    {/*/>*/}
                    {/*<input*/}
                    {/*    type="email"*/}
                    {/*    name="email"*/}
                    {/*    placeholder="Email"*/}
                    {/*    onChange={this.updateInput}*/}
                    {/*    value={this.state.email}*/}
                    {/*/>*/}
                    {/*<button type="submit">Submit</button>*/}
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
        if(document.getElementById("firstNameTextField") &&
            document.getElementById("lastNameTextField") &&
            document.getElementById("emailTextField")
        ){
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
