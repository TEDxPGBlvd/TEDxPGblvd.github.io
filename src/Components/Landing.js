import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import tedxname from "../Assets/TED Youth Logo.jpg"
import doterra from "../Assets/doterra-wellness-advocate-white.png"

class Landing extends Component {
    constructor(props){
        super(props);
        this.landingData = props.landingData;
    }
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <img src={tedxname} style={{maxWidth: "100%"}} alt="TEDx PleasantGroveBlvd"/>
                    <a style={{textDecoration: 'none'}} href={this.landingData.doterraDirections}>
                        <div className="pl-4 mt-1">
                            <p style={{color: "white", fontSize: "20px"}}>
                                {this.landingData.eventDate}<br/>
                                <FontAwesomeIcon icon={faMapMarkerAlt} color={"white"} className="mr-1"/> Hosted by <img src={doterra} alt={"doterra logo"} height={15}/>
                            </p>
                        </div>
                    </a>
                    <h4 className="pt-5 pl-4" style={{color: "white"}}>What is TEDx?</h4>
                    <p className="lead pl-4 mt-3">{this.landingData.tedxplanation}<br/>{this.landingData.tedxplanation2}</p>
                    <br/>
                    <br/>
                    {/*<br/>*/}
                    <br/>
                    {/*<br/>*/}
                    <div className=" pl-4 scroll-button">
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