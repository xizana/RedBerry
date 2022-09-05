import React, { useState, useEffect, useContext } from "react";
import { stateContext } from "../Contexts/stateContext";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/ErrorCss.css";
import "../Styles/PersonInfo.css";
import iPhoneArrow from "../Images/iPhoneArrow.png"



export default function PersonInfo() {

    const { formData } = useContext(stateContext);
    const { handleChange } = useContext(stateContext)
    const { Arrow, LOGO2 } = useContext(stateContext)

    // console.log(formData)

    // this is for team names 
    // this code sets teams state to team data

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios
            .get("https://pcfy.redberryinternship.ge/api/teams")
            .then(responce => setTeams(responce.data.data))
    }, [])

    // this is for position names 
    // this code sets positions state to position data

    const [positions, setPositions] = useState([]);

    useEffect(() => {
        axios
            .get("https://pcfy.redberryinternship.ge/api/positions")
            .then(responce => setPositions(responce.data.data))
    }, [])


    // მეფის დროს კარგად არ მეფასვს მგონი 
    // როცა ამოსარჩევი ველი დავაყენე ამაზე ყველა ერთად გამოიტანა 
    // ანუ ერთ მთლიან სახელად


    // team map
    const teamNames = teams.map(value => value.name)
    // const teamId = teams.map(value => value.id)

    // position map
    const positionNames = positions.map(value => value.name)
    // const positionId = positions.map(value => value.teams_id)


    // console.log(teamNames)



    // validations 


    const onlyGeorgian = new RegExp((/(.*[ა-ჰ]){2}/i));
    // const onlyLatin = new RegExp((/^[a-zA-Z]+$/));
    // const onlyNumbers = new RegExp((/^[0-9]/));


    const firstNameError = !onlyGeorgian.test(formData.firstName) ?
        "error" :
        "normal";

    const lastNameError = !onlyGeorgian.test(formData.lastName) ?
        "error" :
        "normal";

    const teamError = formData.teamName === "" ?
        "error" :
        "normal";

    const positionError = formData.position === "" ?
        "error" :
        "normal";

    const emailError = !formData.email.endsWith("@redberry.ge") ?
        "error" :
        "normal";



    const mobileNumberError = !formData.mobileNumber.includes("+995") || formData.mobileNumber.length < 13 ?
        "error" :
        "normal";


    return (
        <div id="secondPage">

            <div id="firstBox">
                <Link to="/">
                    <img id="iPhoneArrow" src={iPhoneArrow} alt="" />
                    <img id="Arrow" src={Arrow} alt="" />

                </Link>

                <div id="stuffContainer">
                    <h2 id="stuffInfo">თანამშრომლის ინფო</h2>
                    <h3 id="half">1/2</h3>
                </div>


            </div>


            <form>
                <div id="secondBox">
                    <div id="name">
                        <h2 id="Name" className={firstNameError}>სახელი</h2>
                        <input
                            id="firstNameInput"
                            type="text"
                            placeholder="სახელი"
                            onChange={handleChange}
                            name="firstName"
                            value={formData.firstName}

                        />
                        <h3 id="firstName" className={firstNameError}>მინიმუმ 2 სიმბოლო, ქართული ასოები</h3>
                    </div>

                    <div id="lastName">
                        <h2 className={lastNameError}>გვარი</h2>

                        <input
                            id="lastNameInput"
                            type="text"
                            placeholder="გვარი"
                            onChange={handleChange}
                            name="lastName"
                            value={formData.lastName}

                        />
                        <h3 id="lastName2" className={lastNameError}>მინიმუმ 2 სიმბოლო, ქართული ასოები</h3>
                    </div>


                </div>


                <div id="thirdBox">
                    <select
                        className={teamError}
                        id="teamNameInput"
                        value={formData.teamName}
                        onChange={handleChange}
                        name="teamName"

                    >
                        <option defaultValue value="">თიმი</option>
                        <option value={0}>{teamNames[0]}</option>
                        <option value={1}>{teamNames[1]}</option>
                        <option value={2}>{teamNames[2]}</option>
                        <option value={3}>{teamNames[3]}</option>
                        <option value={4}>{teamNames[4]}</option>

                    </select>
                </div>


                <br />
                <br />

                {/* this code is for positions */}

                <div id="forthBox">

                    <select
                        className={positionError}
                        id="position"
                        value={formData.position}
                        onChange={handleChange}
                        name="position"

                    >
                        <option defaultValue value="">პოზიცია</option>
                        <option value={0}>{positionNames[0]}</option>
                        <option value={1}>{positionNames[1]}</option>
                        <option value={2}>{positionNames[2]}</option>
                        <option value={3}>{positionNames[3]}</option>
                        <option value={4}>{positionNames[4]}</option>

                    </select>

                </div>

                <div id="fifthBox">

                    <h2 id="email" className={emailError}>მეილი</h2>
                    <input
                        id="emailInput"
                        type="email"
                        placeholder="მეილი"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}

                    />
                    <h3 id="email2" className={emailError}>უნდა მთავრდებოდეს @redberry.ge-ით</h3>

                </div>

                <br />

                <div id="sixthBox">

                    <h2 id="mobileNum" className={mobileNumberError}>ტელეფონის ნომერი</h2>
                    <input
                        id="mobileNumInput"
                        type="text"
                        placeholder="+9955"
                        onChange={handleChange}
                        name="mobileNumber"
                        value={formData.mobileNumber}

                    />
                    <h3 id="mobileNum2" className={mobileNumberError}>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</h3>
                </div>

                <div id="sevenBox">
                    <Link id="next" to="/computerinfo">
                        <button id="nextButton"> შემდეგი</button>

                    </Link>
                </div>



            </form>

            <div id="eightBox">
                <img id="logo2" src={LOGO2} alt="" />
            </div>

        </div >
    )
}