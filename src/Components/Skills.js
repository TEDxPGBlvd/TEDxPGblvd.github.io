import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import pluralsightImage from '../Assets/PS_logo_F-04.png';
import android from '../Assets/skill_iqs/android.png';
import java from '../Assets/skill_iqs/java.png';
import angular from '../Assets/skill_iqs/angular.png';
import cpp from '../Assets/skill_iqs/cpp.png';
// import css from '../Assets/skill_iqs/css.png';
// import es6 from '../Assets/skill_iqs/es6.png';
// import html5 from '../Assets/skill_iqs/html5.png';
import java_programming_paradigms from '../Assets/skill_iqs/java_programming_paradigms.png';
import js from '../Assets/skill_iqs/js.png';
import npm from '../Assets/skill_iqs/npm.png';
// import rxjs from '../Assets/skill_iqs/rxjs.png';
import ts from '../Assets/skill_iqs/ts.png';
import git from '../Assets/skill_iqs/git.png';
import react from '../Assets/skill_iqs/react.png';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.skills = props.skills;
        this.pluralsight = props.pluralsight;
        this.skills1 = [
            java,
            git,
            cpp,
            android,
            js,
        ];
        this.skills2 = [
            angular,
            react,
            ts,
            java_programming_paradigms,
            npm,
        ];

    }


    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages &amp; Frameworks — Measured By</div>
                    <div className="subheading mb-3">
                       <a href={this.pluralsight}>
                           <img className="img-fluid" src={pluralsightImage} width={200} alt="Pluralsight Icon"/>
                       </a>
                    </div>
                    <div className="card-deck">
                        {
                            this.skills1.map((data, index) => (

                                    <div className="card">
                                        <a href={this.pluralsight}>
                                            <img src={data} className="card-img-top" alt={"image"+ index}/>
                                        </a>
                                    </div>

                            ))
                        }
                    </div>
                    <div className="card-deck">
                        {
                            this.skills2.map((data, index) => (
                                <div className="card">
                                    <a href={this.pluralsight}>
                                        <img src={data} className="card-img-top" alt={"image"+ index}/>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;