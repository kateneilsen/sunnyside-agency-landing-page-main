import React from "react";
import Emily from "../images/image-emily.jpg";
import Jennie from "../images/image-jennie.jpg";
import Thomas from "../images/image-thomas.jpg";
import "./Testimonials.css";

const Testimonials = () => {
    return (
        <section>
            <h3>Client Testimonials</h3>
            <div className="testimonials">
                <div className="testimonial">
                    <img src={Emily} alt="Portrait of Emily" className="portrait"/>
                    <p>
                        We put our trust in Sunnyside and they delivered, making sure our
                        needs were met and deadlines were always hit.
                    </p>
                    <div className="name">
                        <h4>Emily R.</h4>
                        <b>Marketing Director</b>
                    </div>
                </div>

                <div className="testimonial">
                    <img src={Thomas} alt="Portrait of Thomas" className="portrait"/>
                    <p>
                        Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
                        success made it a satisfying and enjoyable experience.
                    </p>
                    <div className="name">
                        <h4>Thomas S.</h4>
                        <b>Chief Operating Officer</b>
                    </div>
                </div>

                <div className="testimonial">
                    <img src={Jennie} alt="Portrait of Jennie" className="portrait"/>
                    <p>
                        Incredible end result! Our sales increased over 400% when we worked
                        with Sunnyside. Highly recommended!
                    </p>
                    <div className="name">
                        <h4>Jennie F.</h4>
                        <b>Business Owner</b>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
