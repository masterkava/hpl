import React from 'react'
import { useNavigate } from "react-router-dom";

const ProfileNotRegistered = () => {
    let navigate = useNavigate(); 
  return (
    <div className="row">
        <section className="section">
            <header>
                <h3>Hariprabodham Premier League</h3>
                <h5>Your Profile is not registerred.</h5>
                <h5 style={{color: "blue"}} onClick={ () => {navigate("/")} } >Click here to register...</h5>
            </header>
            
        </section>
    </div>
  )
}

export default ProfileNotRegistered