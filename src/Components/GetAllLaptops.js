import React, { useState, useEffect, useContext } from "react";
import { stateContext } from "../Contexts/stateContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/GetAllLaptops.css"


export default function GetAllLaptops() {

    const { Arrow, iPhoneArrow } = useContext(stateContext)

    //this state is for all laptops 

    const [allLaptops, setAllLaptops] = useState([]);

    // this is get request for all laptops

    useEffect(() => {
        axios
            .get("https://pcfy.redberryinternship.ge/api/laptops?token=87f6b532706cb655ad8fe432583ade75")
            .then(responce => setAllLaptops(responce.data.data))
    }, [])


    // this map is for display information from state

    const laptops = allLaptops.map((value, id) => {
        return (<div id="allLaptopsContainer" key={id}>
            <img id="brokenImage" src={value.laptop.image} alt="broken"></img>
            <h2 id="valueLaptopName">{value.laptop.name}</h2>
            <h2 id="fullName">{value.user.name} {value.user.surname}</h2>

            <Link id="seeMoreLink" to="/individuallaptop">
                მეტის ნახვა

            </Link>

        </div >)
    })


    return (
        <div id="pageFive5">
            <div id="pageFiveContainer">
                <Link to="/">
                    <img id="Arrow" src={Arrow} alt="" />
                    <img id="iPhoneArrow3" src={iPhoneArrow} alt="" />
                </Link>

                <h2 id="chanawerebisSia">ჩანაწერების სია</h2>
            </div>

            <h2>{laptops}</h2>
        </div>
    )
}