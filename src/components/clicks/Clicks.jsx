import React from "react";
import "./Clicks.css"
import upEl from "../../assets/Ellipse.png"
import IM1 from "../../assets/IM1.jpg"
import IM2 from "../../assets/IM2.jpg"
import IM3 from "../../assets/IM3.jpg"


function Clicks() {
  return (
    <section className="gallerySection">
        <div className="clickUpper">
            <div className="clickTitle">
                <p>
                    Some Mesmerizing <span>Clicks</span>
                </p>
            </div>
            <div className="firstImg">
                <img src={IM1} alt="" />
            </div>
        </div>
        <div className="clickLower">
            <div className="secondImg">
                <img src={IM2} alt="" />
            </div>
            <div className="thirdImg">
                <img src={IM3} alt="" />
            </div>
        </div>
        <img className="elUp" src={upEl} alt="" />
    </section>

  );
}

export default Clicks;
