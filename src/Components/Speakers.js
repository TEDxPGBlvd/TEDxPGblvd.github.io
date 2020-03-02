import React, { Component } from 'react';
import profile from '../Assets/Blank-Profile-Picture.jpg'
import {faAngleDown, faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from "@material-ui/core";

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
                                <div>
                                    <div className="card mb-3" style={{maxWidth: "90% !important"}}>
                                        <div className="card-header media" id={"heading"+index}>
                                            <img src={profile} height={80} className="mr-3" alt={speaker.name}/>
                                            <div className="media-body">
                                                <h3 className="speakerTitle">{speaker.title}</h3>
                                                <p className="card-title">{speaker.name} — {speaker.company}{speaker.bio1 ? <Button data-toggle="collapse" data-target={"#collapse"+index} aria-expanded="false" aria-controls={"collapse"+index} style={{margin: "0 0 0 8px"}}><FontAwesomeIcon icon={faAngleDown} /></Button> : <br/>}</p>
                                            </div>
                                        </div>
                                        {speaker.bio1 ?
                                            <div id={"collapse"+index} className="collapse show" aria-labelledby={"heading"+index}
                                                 data-parent="#speakers">
                                                <div className="card-body">
                                                    {speaker.bio1}
                                                    {speaker.bio2 ? <div><br/></div> : null}
                                                    {speaker.bio2}
                                                    {speaker.bio3 ? <div><br/></div> : null}
                                                    {speaker.bio3}
                                                    {speaker.bio4 ? <div><br/></div> : null}
                                                    {speaker.bio4}
                                                    {speaker.bio5 ? <div><br/></div> : null}
                                                    {speaker.bio5}
                                                </div>
                                            </div>
                                         : null}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/*// <div className="card">*/}
                    {/*//     <div className="card-header" id="headingOne">*/}
                    {/*//         <h5 className="mb-0">*/}
                    {/*//             <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">*/}
                    {/*                Collapsible Group Item #1*/}
                    {/*            </button>*/}
                    {/*        </h5>*/}
                    {/*    </div>*/}

                    {/*    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#speakers">*/}
                    {/*        <div className="card-body">*/}
                    {/*        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        );
    }
}

export default Experience;
