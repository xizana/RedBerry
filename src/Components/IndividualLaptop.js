import React, { useContext } from "react";
import { stateContext } from "../Contexts/stateContext";
import { Link } from "react-router-dom";
import "../Styles/IndividualLaptop.css"
// import { useState, useEffect } from "react";
// import axios from "axios";

export default function IndividualLaptop() {


    const { Arrow, iPhoneArrow, progImage } = useContext(stateContext)

    // // this get request is for individual laptop


    // const [indLaptop, setIndLaptop] = useState([]);

    // // this is get request for individual laptops

    // useEffect(() => {
    //     axios
    //         .get("https://pcfy.redberryinternship.ge/api/laptop/982?token=80b4da0bca43cab2ef0f57b76803b4e3")
    //         .then(responce => {
    //             console.log(responce)
    //             setIndLaptop(responce.data.data)
    //         })
    // }, [])

    return (
        <div id="individualLaptopContainer">
            <div id="boxInd">
                <Link to="/getalllaptops">
                    <img id="Arrow2" src={Arrow} alt="" />
                    <img id="iPhoneArrowInd" src={iPhoneArrow} alt="" />
                </Link>

                <h1 id="leptopisInfo2">ლეპტოპის ინფო</h1>
            </div>




            <div id="indBoxTwo">
                <img id="progLaptopImage" src={progImage} alt="" />

                <h2 id="indInfo1">სახელი: ლაშა ხიზანიშვილი</h2>

                <h2 id="indInfo2">თიმი: დეველოპერი </h2>

                <h2 id="indInfo3">პოზიცია: ინტერნი</h2>

                <h2 id="indInfo4">მეილი: blablabla@redberry.ge</h2>

                <h2 id="indInfo5">ტელ. ნომერი: +995444444444</h2>

                <h2 id="indInfo6">ლეპტოპის სახელი: ProBook</h2>

                <h2 id="indInfo7">ლეპტოპის ბრენდი: HP</h2>

                <h2 id="indInfo8">RAM: 4</h2>

                <h2 id="indInfo9">მეხსიერების ტიპი: HDD</h2>

                <h2 id="indInfo10">CPU: Intel CORE I5</h2>

                <h2 id="indInfo11">CPU-ს ბირთვი: 4</h2>

                <h2 id="indInfo12">CPU-ს ნაკადი: 128</h2>

                <h2 id="indInfo13">ლეპტოპის მდგომარეობა: ახალი</h2>

                <h2 id="indInfo14">ლეპტოპის ფასი: 1500</h2>
                
                <h2 id="indInfo15">შეძენის რიცხვი: 03/03/14</h2>

            </div>





        </div>
    )
}