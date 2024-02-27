import React from "react";
import "./Events.css"
import Bg from "../../assets/devfestWin.png"
export function Events(){
    return(
        <section className="mainEvent">
            <div className="eachEvent">
                <div className="eventPhoto"><img className="actPhot" src={Bg} alt="" />
                </div>
                <div className="eventTitle"><p>Devfest 2023</p></div>
                <div className="eventDesp"><p>DevFest runner ups! Our community triumphed, winning 300k rupees to host TechConnect—a grand event poised to elevate our tech journey. Join us for innovation, learning, and networking!</p></div>
            </div>
        </section>
    )
}