import React, { Component } from 'react';
import profile from '../Assets/Blank-Profile-Picture.jpg'

class Experience extends Component {
    constructor(props) {
        super(props);

        this.speakers = props.speakers;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="speakers">
                <div className="w-100">
                    <h2 className="mb-5" style={{color: "white"}}>Speakers</h2>
                    <div className="">
                        {
                            this.speakers.map((speaker, index) => (
                                <div className="card mb-3">
                                    <div className="card-body media">
                                        <img src={profile} height={80} className="mr-3"/>
                                        <div className="media-body">
                                            <h5 className="card-title">{speaker.name}</h5>
                                            <h9>{speaker.company}</h9>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
