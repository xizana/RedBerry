import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { stateContext } from "../Contexts/stateContext";
import Main from "./Main";
import PersonInfo from "./PersonInfo";
import ComputerInfo from "./ComputerInfo";
import GetAllLaptops from "./GetAllLaptops"
import DataRecorded from "./DataRecorded";
import IndividualLaptop from "./IndividualLaptop";
import Arrow from "../Images/Arrow.png";
import LOGO2 from "../Images/LOGO2.png";
import compStyle from "../Styles/ComputerInfo.css";
import iPhoneArrow from "../Images/iPhoneArrow.png"
import progImage from "../Images/progImage.jpg"



export default function App() {

    // this code saves form inforation
    // if I reload page information will not lose 

    const getFormValues = () => {
        const storedValues = localStorage.getItem('form');
        if (!storedValues)
            return {
                firstName: "",
                lastName: "",
                teamName: "",
                position: "",
                email: "",
                mobileNumber: "",
                image: "",
                compName: "",
                laptopBrand: "",
                cpu: "",
                cpuBirtvi: "",
                cpuNakadi: "",
                ram: "",
                memory: "",
                date: "",
                price: "",
                condition: ""
            };
        return JSON.parse(storedValues);
    }

    // main state

    const [formData, setFormData] = useState(getFormValues)

    // this is handleChange function 

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    // this code saves form information in localStorage

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(formData));
    }, [formData]);


    return (
        <div>
            <stateContext.Provider value={{ formData, setFormData, handleChange, Arrow, LOGO2, compStyle, iPhoneArrow, progImage }}>

                <Router>
                    <Switch>
                        <Route path="//">
                            <Main />
                        </Route>
                        <Route path="/personinfo">
                            <PersonInfo />
                        </Route>

                        <Route path="/computerinfo">
                            <ComputerInfo />
                        </Route>

                        <Route path="/getalllaptops">
                            <GetAllLaptops />
                        </Route>

                        <Route path="/individuallaptop">
                            <IndividualLaptop />
                        </Route>

                        <Route path="/datarecorded">
                            <DataRecorded />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Router>

            </stateContext.Provider>
        </div>
    )
}