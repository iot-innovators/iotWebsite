import React from "react";
import "./EventBanner.css"
import Bg from "../../assets/EventComp.png"
export function EventBanner(){
    return(
        <section className="eventBan">
            <div className="upperBan eventBan"></div>
            <div className="midBan eventBan">
            <img className="eventBanImg" src={Bg} alt="Events"/>
            </div>
            <div className="upperBan eventBan"></div>
        </section>
    )
}
