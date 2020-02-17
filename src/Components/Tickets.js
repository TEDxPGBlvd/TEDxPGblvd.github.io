import React, { Component } from 'react';
import profile from '../Assets/Blank-Profile-Picture.jpg'

class Experience extends Component {
    constructor(props) {
        super(props);

        this.speakers = props.speakers;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="tickets">
                <div className="w-100">
                    <h2 className="mb-5" style={{color: "white"}}>Tickets</h2>
                </div>
            </section>
        );
    }
}

export default Experience;
