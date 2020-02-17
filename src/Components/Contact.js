import React, { Component } from 'react';
import doterra from "../Assets/doterra-wellness-advocate-white.png"


class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="schedule">
                <div className="w-100">
                    <h2 className="mb-5" style={{color: "white"}}>Contact</h2>
                    <div className="card pb-5 pt-5 mb-5">

                    </div>
                    <div className="pb-5" >
                        <h2 className="mb-5" style={{color: "white"}}>Sponsors</h2>
                        <img src={doterra} height={60} alt="doterra"/>
                    </div>
                    <div style={{alignSelf: 'flex-end'}}>
                        <p className="mb-5" style={{color: "white"}}>This independent TEDx event is operated under license from TED.</p>

                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Contact;
