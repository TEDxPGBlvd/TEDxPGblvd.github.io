import React, { Component } from 'react';
import firebase from "./Firebase/Firebase";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fullname: ""
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
                </div>
                <form onSubmit={this.addRegistrant}>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Name"
                        onChange={this.updateInput}
                        value={this.state.fullname}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.updateInput}
                        value={this.state.email}
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
        );
    }
}

export default Experience;
