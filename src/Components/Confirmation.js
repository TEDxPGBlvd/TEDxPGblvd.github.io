import React, { Component } from 'react';
import tedxname from "../Assets/TED Youth Logo.jpg";

class Confirmation extends Component {
    constructor(props) {
        super(props);

        this.experience = props.experience;
    }

    render() {
        return(
                <div className="w-100 mt-5">
                    <img src={tedxname} style={{maxWidth: "70%"}} alt="TEDx PleasantGroveBlvd"/>
                    <h2 className="mt-0">Thanks for buying a ticket!</h2>
                    <p>To purchase another, click here</p>

                </div>
        );
    }
}

export default Confirmation;
