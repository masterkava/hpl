import React from 'react';
import { useNavigate } from "react-router-dom";


const ProfileUploadSuccess = () => {
    let navigate = useNavigate(); 
  return (
    <div className="row">
        <section className="section">
            <header>
                <h3>Hariprabodham Premier League</h3>
                <h5>Your Profile and Auction photos are registered. Please login once more to check it here</h5>
                <h5 style={{color: "blue"}} onClick={ () => {navigate("/profile")} } >Login again...</h5>
            </header>
            
        </section>
    </div>
  )
}

export default ProfileUploadSuccess