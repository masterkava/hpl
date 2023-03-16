import React, {useState } from 'react';
import { useNavigate } from "react-router-dom";
import './PrctForm.css';


const PrctForm = () => {

    const [fname, setFname] = useState(localStorage.getItem("fname") || undefined)
    const [lname, setLname] = useState(localStorage.getItem("lname") || undefined)
    const [yuvakType, setYuvakType] = useState(localStorage.getItem("yuvakType") || undefined)
    const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem("phoneNumber") || undefined)
    const [sabhaLocation, setSabhaLocation] = useState(localStorage.getItem("sabhaLocation") || undefined)
    const [birthDate, setBirthDate] = useState(localStorage.getItem("birthDate") || undefined)
    const [reference, setReference] = useState(localStorage.getItem("reference") || undefined)


    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/playerdetails'; 
        navigate(path);
    }

    const handleFnameChange = (event) => {
        setFname(event.target.value);
        console.log(fname);
    }

    const handleLnameChange = (event) => {
        setLname(event.target.value);
        console.log(lname);
    }

    const handleYuvakTypeChange = (event) => {
        setYuvakType(event.target.value);
        console.log(yuvakType);
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
        console.log(phoneNumber)
    }

    const handleSabhaLocationChange = (event) => {
        setSabhaLocation(event.target.value);
        console.log(sabhaLocation);
    }

    const handleReferenceChange = (event) => {
        setReference(event.target.value);
        console.log(reference);
    }

    const handleBirthDateChange = (event) => {
        setBirthDate(event.target.value);
        console.log(birthDate);
    }

    const op = {
        fname: fname,
        lname: lname,
        yuvakType: yuvakType,
        phoneNumber: phoneNumber,
        sabhaLocation: sabhaLocation,
        reference: reference,
        birthDate: birthDate
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(fname);
        console.log(lname);
        console.log(yuvakType);
        console.log(phoneNumber);
        console.log(sabhaLocation);
        console.log(reference);
        console.log(sabhaLocation);
        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
        localStorage.setItem("yuvakType", yuvakType);
        localStorage.setItem("phoneNumber", parseInt(phoneNumber));
        localStorage.setItem("sabhaLocation", sabhaLocation);
        localStorage.setItem("reference", reference);
        localStorage.setItem("birthDate", birthDate)
        console.log("Final output: ", op);
    }


  return (
    <div className="row">
        <section className="section">
            <header>
                <h3>Registration for HPL</h3>
                <h4>Please fill your information bellow</h4>
            </header>
            <main>
                <form onSubmit={handleSubmit} >

                    <div className="form-item-double box-item">
                        <div className="form-item ">
                            <input type="text" name="fname" placeholder="First Name" value={fname} onChange={handleFnameChange} data-required data-number/>
                            <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                            <small className="errorNum"><i className="fa fa-asterisk" aria-hidden="true"></i> must be a number</small>
                        </div>
                        <div className="form-item">
                            <input type="text" name="lname" placeholder="Last Name" value={lname} onChange={handleLnameChange} data-required data-number/>
                            <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                            <small className="errorNum"><i className="fa fa-asterisk" aria-hidden="true"></i> must be a number</small>
                        </div>
                    </div>

                    {/* Yuvak type */}
                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Yuvak Type</label>
                            </div>
                            <div className="form-item"> 
                                <input id="new" type="radio" name="yuvaktype" value="New" data-once onChange={ handleYuvakTypeChange }/>
                                <label htmlFor="new">New</label>
                            </div>
                            <div className="form-item"> 
                                <input id="existing" type="radio" name="yuvaktype" value="Existing" data-once onChange={ handleYuvakTypeChange } />
                                <label htmlFor="existing">Existing</label>
                            </div>
                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>

                    {/* Mob no */}
                    <div className="form-item box-item">
                        <input type="text" name="phone" placeholder="Phone" value={phoneNumber} data-required data-number data-count="10" onChange={handlePhoneNumberChange} />
                        <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                        <small className="errorNum"><i className="fa fa-asterisk" aria-hidden="true"></i> must be a number</small>
                        <small className="errorChar"><i className="fa fa-asterisk" aria-hidden="true"></i> must be 10 digits</small>
                    </div>

                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Sabha Location</label>
                            </div>
                            <div className="form-item"> 
                                <input id="pp" type="radio" name="sabha" value="PP" data-once onChange={handleSabhaLocationChange} />
                                <label htmlFor="pp">PP</label>
                            </div>
                            <div className="form-item"> 
                                <input id="rp" type="radio" name="sabha" value="RP" data-once onChange={handleSabhaLocationChange} />
                                <label htmlFor="rp">RP</label>
                            </div>
                            <div className="form-item"> 
                                <input id="tf" type="radio" name="sabha" value="TF" data-once onChange={handleSabhaLocationChange} />
                                <label htmlFor="tf">TF</label>
                            </div>
                            <div className="form-item"> 
                                <input id="be" type="radio" name="sabha" value="BE" data-once onChange={handleSabhaLocationChange} />
                                <label htmlFor="be">BE</label>
                            </div>
                            <div className="form-item"> 
                                <input id="bw" type="radio" name="sabha" value="BW" data-once onChange={handleSabhaLocationChange} />
                                <label htmlFor="be">BW</label>
                            </div>
                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>

                    <div className="form-item box-item">
                        <input type="text" name="birthdate" placeholder="Date of birth" value={birthDate} data-required onChange={handleBirthDateChange} />
                        <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                    </div>
                    
                    <div className="form-item box-item">
                        <input type="text" name="reference" placeholder="Reference" value={reference} data-required onChange={handleReferenceChange} />
                        <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                    </div>
                    
                    <div className='buttons__div' >
                        <div className="form-item">
                            <button type='submit' id="submit" className="submit">Save</button>
                        </div>

                        <div className="form-item next__button">
                            <button id="next" className="submit" onClick={routeChange} >Next</button>
                        </div>
                    </div>


                </form>
                
            </main>
            <footer>
            {/* <p>Already have an account? <a href="#">Login here</a></p> */}
            </footer>
            {/* <i className="wave"></i> */}
        </section>
    </div>
  )
}

export default PrctForm