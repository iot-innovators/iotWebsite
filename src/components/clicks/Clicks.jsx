import React from "react";
import "./Clicks.css"
import upEl from "../../assets/Ellipse.png"

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
                <img src="" alt="" />
            </div>
        </div>
        <div className="clickLower">
            <div className="secondImg">
                <img src="" alt="" />
            </div>
            <div className="thirdImg">
                <img src="" alt="" />
            </div>
        </div>
        <img className="elUp" src={upEl} alt="" />
    </section>

  );
}

export default Clicks;
