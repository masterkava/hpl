import React, {useState } from 'react';
import { useNavigate } from "react-router-dom";
import './PrctForm.css';
import axios from 'axios';

const PlayerStatus = () => {

    const [availibility, setAvailibility] = useState(localStorage.getItem("availibility") || undefined);
    const [profile, setProfile] = useState(null);
    const [auctionPhoto, setAuctionPhoto] = useState(null);

    const [profileError, setProfileError] = useState("");


    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/';
        navigate(path);
    }

    const op = {
        availibility: availibility,
    }

    const handleAvailibilityChange = (event) => {
        setAvailibility(event.target.value);
        console.log(availibility);
    }

    const handleProfileChange = (event) => {
        console.log("profile inside", event.target.files[0])
        setProfile(event.target.files[0]);
    }

    const handleAuctionChange = (event) => {
        console.log("auction inside", event.target.files[0])
        setAuctionPhoto(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("availibility", availibility);
        if(!profile){
            setProfileError("Upload a profile picture");
            console.log("profile error", profileError)
        }

        localStorage.setItem('profile',profile);
        localStorage.setItem('auction',auctionPhoto);

        console.log("profile", profile)
        console.log("auction", auctionPhoto)

        let formData = new FormData()
        formData.append('profile', profile)
        formData.append('auction', auctionPhoto)
        formData.append('fname', localStorage.getItem('fname'))
        formData.append('lname', localStorage.getItem('lname'))
        formData.append('availibility', localStorage.getItem('availibility'))
        formData.append('good_at', localStorage.getItem('goodAt'))
        formData.append('hand', localStorage.getItem('whichHand'))
        formData.append('tshirt_name', localStorage.getItem('tshirtName'))
        formData.append('yuvak_type', localStorage.getItem('yuvakType'))
        formData.append('mobile_number', localStorage.getItem('phoneNumber'))
        formData.append('tshirt_size', localStorage.getItem('tshirtSize'))
        formData.append('sabha_location', localStorage.getItem('sabhaLocation'))
        formData.append('reference', localStorage.getItem('reference'))
        formData.append('payment_amount', localStorage.getItem('payment'))
        formData.append('payment_type', localStorage.getItem('paymentType'))
        // formData.append('payment_status', localStorage.getItem('paymentStatus'))
        formData.append('password', 'password')

        console.log("Form data",formData.entries())
      

        let axiosConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                
                // 'X-CSRFTOKEN': CSRF_TOKEN
              }
            // headers: {
            //     'Content-Type': 'application/json' 
            // }
        }

        fetch( 'http://127.0.0.1:8000/api/profile/', {
            method: 'POST',
            'Content-type': 'multipart/form-data',
            body: formData
        } )
        .then(response => response.json())
        .then(data => console.log("data", data))   
        .catch(error => console.log("Error detected: " + error))
    }

    if (profileError){
        return (
            <section className="section">
                <h1>Upload profile picture.</h1>
            </section>

        )
    }

  return (
    <div className="row">
        <section className="section">
            <header>
                <h3>Registeration for HPL</h3>
                <h5 >Player Status Details</h5>
            </header>
            <main>
                <form onSubmit={handleSubmit} method='post' encType='multipart/form-data' >

                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Profile</label>
                            </div>
                            <div className="form-item"> 
                                <input type="file"
                                    id="profile" name="profile"
                                    accept="image/png, image/jpeg" onChange={handleProfileChange} />
                            </div>
                        </div>
                        { profileError ? <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small> : "" } 
                    </div>

                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Auction</label>
                            </div>
                            <div className="form-item"> 
                                <input type="file"
                                    id="auction" name="auction"
                                    accept="image/png, image/jpeg" onChange={handleAuctionChange} />
                            </div>
                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>

                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Player Availibility</label>
                            </div>
                            <div className="form-item"> 
                                <input id="yes" type="radio" name="availibility" value="Yes" data-once onChange={ handleAvailibilityChange }/>
                                <label htmlFor="yes">Y</label>
                            </div>
                            <div className="form-item"> 
                                <input id="no" type="radio" name="availibility" value="No" data-once onChange={ handleAvailibilityChange }/>
                                <label htmlFor="no">N</label>
                            </div>
                            
                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>
                    

                    <div className='buttons__div' >
                        <div className="form-item">
                            <button type='submit' id="submit" className="submit">Save</button>
                        </div>

                        <div className="form-item next__button">
                            <button id="next" className="submit" onClick={routeChange} >Next</button>
                        </div>

                        <div className="form-item next__button">
                            <button id="next" className="submit" onClick={routeChange} >Submit All</button>
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

export default PlayerStatus