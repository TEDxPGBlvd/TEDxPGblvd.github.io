import React, { Component } from 'react';
import flutter_web from "../Assets/frameworks/hummingbird_logo.png";
import react from "../Assets/frameworks/react.png";
import flutter from "../Assets/frameworks/flutter.png";
import java from "../Assets/frameworks/java.png";
import aha from "../Assets/frameworks/aha-678x381.png"
import excel from "../Assets/frameworks/excel.png"
import angular from "../Assets/frameworks/AngularJS-Shield.svg"
import gitlab from "../Assets/frameworks/gitlab-icon-rgb.png"
import confluence from "../Assets/frameworks/confluence.png"
import jira from "../Assets/frameworks/jira-1.svg"
import mongo from "../Assets/frameworks/mdb.png"
import mysql from "../Assets/frameworks/mysql.png"

class Experience extends Component {
    constructor(props) {
        super(props);

        this.experience = props.experience;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>
                    {
                        this.experience.map((exp, index) => (
                            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                    <h3 className="mb-0">{exp.position}</h3>
                                    <div className="subheading mb-3">{exp.organization}</div>
                                    <p>{exp.aboutWork}</p>
                                    <div>
                                        {
                                            exp.tech.map((tech, index) => (
                                                <img style = {{height: "8%", width:"8%", margin: "10px 10px 15px 0px"}} src={
                                                    tech === "Flutter Web" ? flutter_web :
                                                        tech === "React" ? react :
                                                            tech === "Flutter" ? flutter :
                                                                tech === "Java" ? java :
                                                                tech === "Aha! Project Management" ? aha :
                                                                tech === "Microsoft Excel" ? excel :
                                                                tech === "Angular" ? angular :
                                                                tech === "GitLab" ? gitlab :
                                                                tech === "Confluence" ? confluence :
                                                                tech === "Jira" ? jira :
                                                                tech === "mongoDB" ? mongo :
                                                                tech === "MySQL" ? mysql :

                                                                    null
                                                } alt={tech} title={tech}/>
                                            ))
                                        }
                                        </div>
                                </div>
                                <div className="resume-date text-md-right">
                                    <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Experience;
