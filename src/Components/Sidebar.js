import React, {Component} from 'react';
import image from '../Assets/TEDx_logo_sidebar.png';
import { Link } from "react-scroll";


class Sidebar extends Component {
    constructor(props){
        super(props);
        this.sidebarData = props.sidebarData;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm" id="sideNav">
                <div className="navbar-brand js-scroll-trigger">
                    <span className="d-block d-lg-none">{this.sidebarData.eventName}</span>
                    <span className="d-none d-lg-block">
            <img className="img-fluid img-profile mx-auto mb-2" src={image} alt=""/>
          {/*  TODO make image transparent*/}
          </span>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="about" smooth={true}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="speakers" smooth={true}>Speakers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="tickets" smooth={true}>Tickets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="schedule" smooth={true}>Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
