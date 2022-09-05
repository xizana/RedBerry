import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../Images/LOGO.png"
import GROUP from "../Images/Group.png"
import GroupiPhone from "../Images/GroupiPhone.png"
import "../Styles/Main.css"


export default function Main() {

    // this is main page


    return (
        <div id="container">

            <img src={LOGO} id="Logo" alt="" />
            <br />
            <img src={GROUP} id="Group" alt="" />

            <img src={GroupiPhone} id="iPhone" alt="" />
            <br />

            <div id="mainLinks">
                <Link to="/personinfo">
                    <button id="mainLink1">
                        ჩანაწერის დამატება
                    </button>

                </Link>
                <br />
                <br />
                <Link to="/getalllaptops">
                    <button id="mainLink2">
                        ჩანაწერების სია
                    </button>

                </Link>

            </div>

        </div >
    )
}