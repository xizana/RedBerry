import React from "react";
import { Link } from "react-router-dom";
import Frame from "../Images/Frame.png";
import "../Styles/DataRecorded.css"


export default function DataRecorded() {

    return (
        <div id="fourthPage">

            <div id="dataRecordedContainer">
                <img id="recordedImage" src={Frame} alt="" />
                <h2 id="recordedInfo2">ჩანაწერი დამატებულია!</h2>

                <Link to="/getalllaptops">
                    <button id="showLaptopsButton">სიაში გადაყვანა</button>
                </Link>

                <br />

                <Link id="mainLinkButton" to="/">
                    მთავარი
                </Link>
            </div>

        </div>
    )
}