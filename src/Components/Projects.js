import React, {Component} from 'react';
import ripceipt from '../Assets/projects/ripceipt.png'
import macbook from '../Assets/projects/macbook.jpg'
import lets_go from '../Assets/projects/lets_go.png'
import get2gether from '../Assets/projects/get2gether.png'
import flutter_web from '../Assets/frameworks/hummingbird_logo.png'
import flutter from '../Assets/frameworks/flutter.png'
import java from '../Assets/frameworks/java.png'
import react from '../Assets/frameworks/react.png'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.projects = props.projects;
        this.logos = [
            macbook,
            get2gether,
            lets_go,
            ripceipt
        ];
    }


    render() {
        return (
            <section className="projects-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
                <div className="w-100">
                    <h2 className="mb-5">Projects</h2>
                    <div className="card-deck">
                        {
                            this.projects.map((project, index) => (
                                    <div className="card">
                                        <img style={{height: "auto", width: "100%", "border-bottom": "2px #DFDFDF solid"}} src={this.logos[index]} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{project.name}</h5>
                                            <p className="card-text">{project.description}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">

                                            {
                                                project.frameworks.map((framework) => (
                                                  <li className="list-group-item">
                                                      <img style = {{height: "10%", width: "15%", margin: "0 10px 5px 0"}} src={
                                                          framework === "Flutter Web" ? flutter_web :
                                                              framework === "React" ? react :
                                                              framework === "Flutter" ? flutter :
                                                              framework === "Java" ? java :
                                                                  null
                                                      } alt={framework}/>
                                                      {framework}
                                                  </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="card-body">
                                            <a href={project.link} className="card-link">Check it out</a>
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

export default Projects;
