import React, {Component} from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="schedule">
                <div className="w-100">
                    <h2 className="mb-5" style={{color: "white"}}>Schedule</h2>
                    <div className="card pb-5 pt-5 mb-5 pl-5">
                        <h3>5:45 pm - Registration</h3>
                        <hr/>
                        <h3>6:00 pm - Welcome and Introduction Video</h3>
                        <hr/>
                        {/*<div className="talks ml-3 mb-0">*/}
                            {/*<p className="row">*/}
                                <h3>6:10 pm - Talks</h3>
                                {/*<Button data-toggle="collapse" data-target={"#collapseTalks"} aria-expanded="false" aria-controls={"collapseTalks"} style={{margin: "0 0 0 8px"}}>*/}
                                {/*    <FontAwesomeIcon icon={faAngleDown} />*/}
                                {/*</Button>*/}
                            {/*</p>*/}
                            {/*<div id={"collapseTalks"} className="collapse show" aria-labelledby={"headingTalks"}*/}
                            {/*     data-parent="#speakers">*/}
                            {/*    <div className="card-body" style={{color: "black"}}>*/}
                            {/*        Speaker #1 - Time*/}
                            {/*        <div><br/></div>*/}
                            {/*        Speaker #2 - Time*/}
                            {/*        */}
                            {/*    </div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <hr/>
                        <h3>7:10 pm - Intermission: Food, Networking, Stretching</h3>
                        <hr/>
                        <h3>7:45 pm - Speakers</h3>
                        <hr/>
                        <h3>8:30 pm - Closing Remarks</h3>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
