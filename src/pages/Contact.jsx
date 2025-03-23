import Navbar from "./Navbar";
import React from "react";
import { useState } from "react";

export default function Contact(){
    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })};
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        alert("Form submitted successfully");
    };

    return(
        <div>
        <Navbar />
        {/* Contact Start */}
        <div className="contact_form">
            <div className="row">
                <div className="col-xs-12">
                    <div className="left">
                        <h1>Contact Me</h1>
                        <div className="formbox">
                            <form onSubmit={handleSubmit}>
                                <input
                                    name="name"
                                    type="text"
                                    className="short"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    name="email"
                                    type="email"
                                    className="short"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input
                                    name="subject"
                                    type="text"
                                    className="feedback-input"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    className="feedback-input"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <input type="submit" value="SEND" />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="map" id="map"></div>
                    <div className="map-overlap">
                    </div>
                </div>
            </div>
        </div>

        {/* Google Maps Script */}
        <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDts9C9iWNF83ExezBXJLIJ0g2dwoERg08&callback=initMap"
            async
            defer
        ></script>
    </div>
    )
}
