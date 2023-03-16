import React, {useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './PrctForm.css';


const UploadPhotos = () => {

   
    const [profile, setProfile] = useState(localStorage.getItem("profile") || undefined);
    const [auction, setAuction] = useState(localStorage.getItem("auction") || undefined);


    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/playerstatus'; 
        navigate(path);
    }


    const handleProfileChange = (e) => {
        console.log("file uploaded",e.target.files[0])
        setProfile(e.target.files[0]);
    }

    const handleAuctionChange = (event) => {
        console.log("file uploaded",event.target.files[0])
        setAuction(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("profile", profile);
        console.log("auction", auction);
        localStorage.setItem('profile',profile);
        localStorage.setItem('auction', auction);
    }


  return (

    <div className="row">
        <section className="section">
            <header>
                <h3>Registeration for HPL</h3>
                <h5>Player Details</h5>
            </header>
            <main>
                <form method="post" encType="multipart/form-data" onSubmit={handleSubmit} >

                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Profile</label>
                            </div>
                            <div className="form-item"> 
                                <input type="file"
                                    id="avatar" name="avatar"
                                    accept="image/png, image/jpeg" onChange={ handleProfileChange } />
                            </div>
                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>

                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Auction</label>
                            </div>
                            <div className="form-item"> 
                                <input type="file"
                                    id="avatar" name="avatar"
                                    accept="image/png, image/jpeg" onChange={handleAuctionChange} />
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

export default UploadPhotos