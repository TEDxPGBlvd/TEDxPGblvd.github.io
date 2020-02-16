import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

class Landing extends Component {
    constructor(props){
        super(props);
        this.landingData = props.landingData;
    }
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h1 className="mb-0">{this.landingData.firstName}
                        <span className="text-primary">{this.landingData.lastName}</span>
                    </h1>
                    <div className="subheading mb-5">{this.landingData.phoneNumber} ·
                        <a href={"mailto:" + this.landingData.email}>{"  " + this.landingData.email}</a>
                    </div>
                    <p className="lead mb-5">{this.landingData.bio1}</p>
                    <div className="social-icons">
                        <a href={this.landingData.linkedin}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={this.landingData.github}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href={this.landingData.twitter}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href={this.landingData.facebook}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    {/*<br/>*/}
                    <br/>
                    {/*<br/>*/}
                    <div className="scroll-button">
                        <Link
                            to="experience"
                            smooth={true}
                        >
                            {/*<a href="#experience">*/}
                            <FontAwesomeIcon icon={faAngleDown}/>
                            {/*</a>*/}
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Landing;