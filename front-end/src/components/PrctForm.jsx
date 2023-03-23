import React, {useState } from 'react';
import { useNavigate } from "react-router-dom";
import './PrctForm.css';


const PrctForm = () => {

    const [fname, setFname] = useState( localStorage.getItem("fname") === 'undefined' || localStorage.getItem("fname") === 'null' || localStorage.getItem("fname") === 'NaN' ? "" : localStorage.getItem("fname"))
    const [lname, setLname] = useState(localStorage.getItem("lname") === 'undefined' || localStorage.getItem("lname") === 'null' || localStorage.getItem("lname") === 'NaN' ? "" : localStorage.getItem("lname"))
    const [yuvakType, setYuvakType] = useState(localStorage.getItem("yuvakType") === 'undefined' || localStorage.getItem("yuvakType") === 'null' || localStorage.getItem("yuvakType") === 'NaN' ? "" : localStorage.getItem("yuvakType"))
    const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem("phoneNumber") === 'undefined' || localStorage.getItem("phoneNumber") === 'null' || localStorage.getItem("phoneNumber") === 'NaN' ? "" : localStorage.getItem("phoneNumber"))
    const [sabhaLocation, setSabhaLocation] = useState(localStorage.getItem("sabhaLocation") === 'undefined' || localStorage.getItem("sabhaLocation") === 'null' || localStorage.getItem("sabhaLocation") === 'NaN' ? "" : localStorage.getItem("sabhaLocation"))
    const [birthDate, setBirthDate] = useState(localStorage.getItem("birthDate") === 'undefined' || localStorage.getItem("birthDate") === 'null' || localStorage.getItem("birthDate") === 'NaN' ? "" : localStorage.getItem("birthDate"))
    const [reference, setReference] = useState(localStorage.getItem("reference") === 'undefined' || localStorage.getItem("reference") === 'null' || localStorage.getItem("reference") === 'NaN' ? "" : localStorage.getItem("reference"))


    let navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        if ( !fname || fname === "" || fname === "NaN" || fname === "null" || fname === "undefined"){
            return alert("First Name is required.")
        }
        if ( !lname || lname === "" || lname === "NaN" || lname === "null" || lname === "undefined"){
            return alert("Last Name is required.")
        }
        if ( !yuvakType || yuvakType === "" || yuvakType === "NaN" || yuvakType === "null" || yuvakType === "undefined"){
            return alert("yuvakType is required.")
        }
        if (!phoneNumber || phoneNumber === "" || phoneNumber === "NaN" || phoneNumber === "null" || phoneNumber === "undefined"){
            return alert("phoneNumber is required.")
        }
        if (!sabhaLocation || sabhaLocation === "" || sabhaLocation === "NaN" || sabhaLocation === "null" || sabhaLocation === "undefined"){
            return alert("sabhaLocation is required.")
        }
        if (!birthDate || birthDate === "" || birthDate === "NaN" || birthDate === "null" || birthDate === "undefined"){
            return alert("birthDate is required.")
        }
        if (!reference || reference === "" || reference === "NaN" || reference === "null" || reference === "undefined"){
            return alert("reference is required.")
        }
        console.log(fname);
        console.log(lname);
        console.log(yuvakType);
        console.log(phoneNumber);
        console.log(sabhaLocation);
        console.log(reference);
        console.log(sabhaLocation);
        localStorage.setItem("fname", fname === 'undefined' || fname === 'null' || fname === 'NaN' ? '' : fname );
        localStorage.setItem("lname", lname === 'undefined' || lname === 'null' || lname === 'NaN' ? '' : lname );
        localStorage.setItem("yuvakType", yuvakType === 'undefined' || yuvakType === 'null' || yuvakType === 'NaN' ? '' : yuvakType  );
        localStorage.setItem("phoneNumber", phoneNumber === 'undefined' || phoneNumber === 'null' || phoneNumber === 'NaN' ? '' : parseInt(phoneNumber));
        localStorage.setItem("sabhaLocation", sabhaLocation === 'undefined' || sabhaLocation === 'null' || sabhaLocation === 'NaN' ? '' : sabhaLocation);
        localStorage.setItem("reference", reference === 'undefined' || reference === 'null' || reference === 'NaN' ? '' : reference);
        localStorage.setItem("birthDate", birthDate === 'undefined' || birthDate === 'null' || birthDate === 'NaN' ? '' : birthDate)
        
        console.log("Final output: ", op);
    }

    const routeChange = () =>{ 
        let path = '/playerdetails';
        if ( !fname || fname === "" || fname === "NaN" || fname === "null" || fname === "undefined"){
            return alert("First Name is required.")
        }
        if ( !lname || lname === "" || lname === "NaN" || lname === "null" || lname === "undefined"){
            return alert("Last Name is required.")
        }
        if ( !yuvakType || yuvakType === "" || yuvakType === "NaN" || yuvakType === "null" || yuvakType === "undefined"){
            return alert("yuvakType is required.")
        }
        if (!phoneNumber || phoneNumber === "" || phoneNumber === "NaN" || phoneNumber === "null" || phoneNumber === "undefined"){
            return alert("phoneNumber is required.")
        }
        if (!sabhaLocation || sabhaLocation === "" || sabhaLocation === "NaN" || sabhaLocation === "null" || sabhaLocation === "undefined"){
            return alert("sabhaLocation is required.")
        }
        if (!birthDate || birthDate === "" || birthDate === "NaN" || birthDate === "null" || birthDate === "undefined"){
            return alert("birthDate is required.")
        }
        if (!reference || reference === "" || reference === "NaN" || reference === "null" || reference === "undefined"){
            return alert("reference is required.")
        }

        localStorage.setItem("fname", fname === 'undefined' || fname === 'null' || fname === 'NaN' ? '' : fname );
        localStorage.setItem("lname", lname === 'undefined' || lname === 'null' || lname === 'NaN' ? '' : lname );
        localStorage.setItem("yuvakType", yuvakType === 'undefined' || yuvakType === 'null' || yuvakType === 'NaN' ? '' : yuvakType  );
        localStorage.setItem("phoneNumber", phoneNumber === 'undefined' || phoneNumber === 'null' || phoneNumber === 'NaN' ? '' : parseInt(phoneNumber));
        localStorage.setItem("sabhaLocation", sabhaLocation === 'undefined' || sabhaLocation === 'null' || sabhaLocation === 'NaN' ? '' : sabhaLocation);
        localStorage.setItem("reference", reference === 'undefined' || reference === 'null' || reference === 'NaN' ? '' : reference);
        localStorage.setItem("birthDate", birthDate === 'undefined' || birthDate === 'null' || birthDate === 'NaN' ? '' : birthDate);
        
        navigate(path);
    }

    const handleFnameChange = (event) => {
        setFname(event.target.value);
        console.log("First Name", fname);
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
                        <input type="text" name="phone" placeholder="Mobile Number" value={phoneNumber} data-required data-number data-count="10" onChange={handlePhoneNumberChange} />
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