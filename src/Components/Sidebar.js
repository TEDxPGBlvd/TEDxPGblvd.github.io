import React, {Component} from 'react';
import image from '../Assets/profile.png';
import { Link } from "react-scroll";


class Sidebar extends Component {
    constructor(props){
        super(props);
        this.sidebarData = props.sidebarData;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm" id="sideNav">
                <div className="navbar-brand js-scroll-trigger">
                    <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
                    <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""/>
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
                            <Link className="nav-link" to="experience" smooth={true}>Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="education" smooth={true}>Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="skills" smooth={true}>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="projects" smooth={true}>Projects</Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
