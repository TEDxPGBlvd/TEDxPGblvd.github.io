import React, { Component } from 'react';
import doterra from "../Assets/doterra-wellness-advocate-white.png"


class Contact extends Component {
    render() {
        return(
            <div>
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="contact">
                <div className="w-100">
                    <h2 className="mb-5" style={{color: "white"}}>Contact</h2>
                    <div className="card pb-5 pt-5 mb-5 pl-5">
                        <h4>Event Manager — Ammon Hasson</h4>
                        <h5>ammonhasson@gmail.com</h5>
                        <h5>801.602.9805</h5>

                    </div>
                    <div className="pb-5" >
                        <h2 className="mb-5" style={{color: "white"}}>Sponsors</h2>
                        <img src={doterra} height={60} alt="doterra"/>
                    </div>
                    <div style={{alignSelf: 'flex-end'}}>
                        <p className="mb-5" style={{color: "white"}}>This independent TEDx event is operated under license from TED.</p>
                        <a href="mailto:jaredezzethasson@gmail.com?subject=Website Inquiry&body=Hi, I thought the website for TEDx was great and wondered if you could make me one for _____. It would be great if it could be done by ____. What's your current availability?"><p className="mb-5" style={{color: "white", fontSize: "12px"}}>Need a website for your business or event? Send me an email.</p></a>

                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Contact;
