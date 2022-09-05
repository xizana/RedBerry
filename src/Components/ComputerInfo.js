import React, { useState, useEffect, useContext } from "react";
import { stateContext } from "../Contexts/stateContext";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
// import { useDropzone } from "react-dropzone";
const token = "87f6b532706cb655ad8fe432583ade75";







export default function ComputerInfo() {

    // this is first page state from context

    const { formData } = useContext(stateContext);
    const { handleChange } = useContext(stateContext)
    const { Arrow, LOGO2, compStyle, iPhoneArrow } = useContext(stateContext)

    // this state is for image

    const [file, setFile] = useState({ image: "" })


    // handlechange2 is for image

    const handleChange2 = (event) => {

        setFile(prevState => {
            return {
                ...prevState,
                image: event.target.files[0]

            }
        })

    }

    // this code is for drag and drop zone 


    // this is for laptopBrands 
    // this code sets  state to team data

    const [laptopBrand, setlaptopBrand] = useState([]);

    useEffect(() => {
        axios
            .get("https://pcfy.redberryinternship.ge/api/brands")
            .then(responce => setlaptopBrand(responce.data.data))
    }, [])

    // laptopBrands map

    const laptopBrands = laptopBrand.map(value => value.name)


    // this is for CPU 

    const [cpu, setCpu] = useState([]);

    useEffect(() => {
        axios
            .get("https://pcfy.redberryinternship.ge/api/cpus")
            .then(responce => setCpu(responce.data.data))
    }, [])

    // CPU map

    const CPU = cpu.map(value => value.name)

    // post request

    const handleSubmit = (event) => {
        event.preventDefault()
        const formInfo = new FormData();
        formInfo.append('file', file);
        formInfo.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios
            .post("https://pcfy.redberryinternship.ge/api/laptop/create", {
                name: formData.firstName,
                surname: formData.lastName,
                team_id: 1,
                position_id: 1,
                phone_number: formData.mobileNumber,
                email: formData.email,
                token: token,
                laptop_name: formData.compName,
                laptop_image: file.image,
                laptop_brand_id: formData.laptopBrand,
                laptop_cpu: formData.cpu,
                laptop_cpu_cores: formData.cpuBirtvi,
                laptop_cpu_threads: formData.cpuNakadi,
                laptop_ram: formData.ram,
                laptop_hard_drive_type: formData.memory,
                laptop_state: formData.condition,
                laptop_purchase_date: formData.date,
                laptop_price: formData.price

            }, config)
            .then(res => {
                console.log(res.data)
                localStorage.clear()

            })
            .then(res => {
                onSubmit()
            })
            .then(res => {
                window.location.reload()
            })

    }


    // validations 

    // const latinAndOther = new RegExp(
    //     ('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
    // );

    const onlyGeorgian = new RegExp((/[ა-ჰ]/g));
    const onlyLatin = new RegExp((/^[a-zA-Z]+$/));
    const onlyNumbers = new RegExp((/^[0-9]/));

    const imageError = file.image === "" ?
        "error" :
        "normal";

    const compNameError = !onlyLatin.test(formData.compName) && onlyGeorgian.test(formData.compName) ?
        "error" :
        "normal";

    const brandError = formData.laptopBrand === "" ?
        "error" :
        "normal";

    const coreError = formData.cpu === "" ?
        "error" :
        "normal";

    const birtviError = !onlyNumbers.test(formData.cpuBirtvi) ?
        "error" :
        "normal";

    const nakadiError = !onlyNumbers.test(formData.cpuNakadi) ?
        "error" :
        "normal";

    const ramError = !onlyNumbers.test(formData.ram) ?
        "error" :
        "normal";

    const memoryError = formData.memory === "" ?
        "error" :
        "normal";

    const priceError = !onlyNumbers.test(formData.price) ?
        "error" :
        "normal";

    const conditionError = formData.condition === "" ?
        "error" :
        "normal";


    //redirect page 

    let history = useHistory();

    const onSubmit = () => {
        history.push("/datarecorded")

    }

    return (
        <div id="thirdPage" style={compStyle}>
            <div id="boxOne">
                <Link to="/personinfo">
                    <img id="Arrow2" src={Arrow} alt="" />
                    <img id="iPhoneArrow2" src={iPhoneArrow} alt="" />
                </Link>

                <h2 id="compInfo">ლეპტოპის მახასიათებლები</h2>
                <h3 id="half2">2/2</h3>
            </div>


            {/* form */}

            <form onSubmit={handleSubmit}>

                <div id="boxTwo" >
                    <input
                        id="uploadFile"
                        className={imageError}
                        type="file"
                        name="image"
                        onChange={handleChange2}

                    />
                </div>


                <div id="boxThree">

                    <h2 id="compName" className={compNameError}>ლეპტოპის სახელი</h2>
                    <input
                        id="compNameInput"
                        type="text"
                        placeholder="ლეპტოპის სახელი"
                        onChange={handleChange}
                        name="compName"
                        value={formData.compName}
                    />

                    <h3 id="compName2" className={compNameError}>ლათინური ასოები, ციფრები, @#!@#asdasd</h3>

                    <div id="brand">
                        <select
                            className={brandError}
                            id="laptopBrand"
                            value={formData.laptopBrand}
                            onChange={handleChange}
                            name="laptopBrand"

                        >
                            <option defaultValue value="">ლეპტოპის ბრენდი</option>
                            <option value="1">{laptopBrands[1]}</option>
                            <option value="2">{laptopBrands[2]}</option>
                            <option value="3">{laptopBrands[3]}</option>
                            <option value="4">{laptopBrands[4]}</option>
                            <option value="5">{laptopBrands[5]}</option>

                        </select>

                    </div>


                </div>
                {/* laptopbrand */}


                <div id="boxFour">
                    <select
                        id="cpu"
                        className={coreError}
                        value={formData.cpu}
                        onChange={handleChange}
                        name="cpu"

                    >
                        <option defaultValue value="">CPU</option>
                        <option value={CPU[0]}>{CPU[0]}</option>
                        <option value={CPU[1]}>{CPU[1]}</option>
                        <option value={CPU[2]}>{CPU[2]}</option>
                        <option value={CPU[3]}>{CPU[3]}</option>
                        <option value={CPU[4]}>{CPU[4]}</option>

                    </select>

                    <h2 id="birtvi" className={birtviError}>CPU-ს ბირთვი</h2>
                    <input
                        id="birtviInput"
                        type="text"
                        placeholder="CPU-ს ბირთვი"
                        onChange={handleChange}
                        name="cpuBirtvi"
                        value={formData.cpuBirtvi}
                    />
                    <h3 id="birtvi2" className={birtviError}>მხოლოდ ციფრები</h3>

                    <h2 id="nakadi" className={nakadiError}>CPU-ს ნაკადი</h2>
                    <input
                        id="nakadiInput"
                        type="text"
                        placeholder="CPU-ს ნაკადი"
                        onChange={handleChange}
                        name="cpuNakadi"
                        value={formData.cpuNakadi}
                    />

                    <h3 id="nakadi2" className={nakadiError}>მხოლოდ ციფრები</h3>
                </div>


                <div id="boxFive">

                    <h2 id="ram" className={ramError}>ლეპტოპის RAM (GB)</h2>
                    <input
                        id="ramInput"
                        type="text"
                        placeholder="RAM"
                        onChange={handleChange}
                        name="ram"
                        value={formData.ram}
                    />

                    <h3 id="ram2" className={ramError}>მხოლოდ ციფრები</h3>

                    <div id="memoryContainer">

                        <h2 id="memory" className={memoryError}>მეხსიერების ტიპი</h2>

                        <div id="memoryRadio">

                            <input
                                className={memoryError}
                                type="radio"
                                id="ssd"
                                name="memory"
                                value="SSD"
                                checked={formData.memory === "SSD"}
                                onChange={handleChange}
                            />
                            <label id="ssd" htmlFor="unemployed">SSD</label>


                            <input
                                type="radio"
                                id="hdd"
                                name="memory"
                                value="HDD"
                                checked={formData.memory === "HDD"}
                                onChange={handleChange}
                            />
                            <label id="hdd" htmlFor="unemployed">HDD</label>
                        </div>


                    </div>

                </div>



                <div id="boxSix">

                    <h2 id="date">შეძენის რიცხვი (არჩევითი)</h2>
                    <input
                        id="dateInput"
                        type="text"
                        placeholder="დდ / თთ / წწწწ "
                        onChange={handleChange}
                        name="date"
                        value={formData.date}
                    />


                    <h2 id="price" className={priceError}>ლეპტოპის ფასი</h2>
                    <input
                        id="priceInput"
                        className={priceError}
                        type="text"
                        placeholder="ფასი"
                        onChange={handleChange}
                        name="price"
                        value={formData.price}
                    />
                    <h3 id="price2" className={priceError}>მხოლოდ ციფრები</h3>
                </div>




                <div id="boxSeven">

                    <div id="conditionContainer">
                        <h2 id="condition" className={conditionError}>ლეპტოპის მდგომარეობა</h2>

                        <input
                            className={conditionError}
                            type="radio"
                            id="new"
                            name="condition"
                            value="new"
                            checked={formData.condition === "new"}
                            onChange={handleChange}
                        />
                        <label htmlFor="cond">ახალი</label>


                        <input
                            type="radio"
                            id="used"
                            name="condition"
                            value="used"
                            checked={formData.condition === "used"}
                            onChange={handleChange}
                        />
                        <label htmlFor="cond">მეორადი</label>
                    </div>

                </div>

                <div id="boxEight">
                    <Link id="compLink" to="/personinfo">
                        უკან
                    </Link>

                    <button id="submitButton">დამახსოვრება</button>

                </div>


            </form>
            <div id="logo2Container">
                <img id="logo2" src={LOGO2} alt="" />
            </div>


        </div>
    )
}