import React from 'react';
import HPLLogo from '../media/images/hpl-logo.jpg';
import { useNavigate } from 'react-router-dom';


const Success = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
        localStorage.removeItem('fname')
        localStorage.removeItem('lname')
        localStorage.removeItem('yuvakType')
        localStorage.removeItem('phoneNumber')
        localStorage.removeItem('sabhaLocation')
        localStorage.removeItem('reference')
        localStorage.removeItem('birthDate')
        localStorage.removeItem('goodAt')
        localStorage.removeItem('whichHand')
        localStorage.removeItem('tshirtSize')
        localStorage.removeItem('tshirtName')

    }

  return (
    <div className="row">
        <section className="section" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}} >
        <header style={{dispay: 'flex', justifyContent: 'center'}} >
                <h3>Congratulations</h3> 
                <h3 style={{color: '#1e105c'}} >
                {localStorage.getItem("fname")} 
                </h3>
                <h3>
                    you have successfully 
                </h3>
                <h3>
                registered for
                </h3>
                <h3>
                    HariPrabodham Premier League. 
                </h3>
                <img src={HPLLogo} alt="HPL Logo" style={{height: '300px', width:'300px', position:'relative'}} ></img>
        </header>
        
        <main>
            <form >
            <div className='buttons__div' >
                {/* <div className="form-item">
                    <button type='submit' id="submit" className="submit">Submit</button>
                </div> */}

                <div className="form-item next__button">
                    <button id="next" className="submit" onClick={routeChange} >Home</button>
                </div>

                {/* <div className="form-item next__button">
                    <button id="next" className="submit" onClick={routeChange} >Submit All</button>
                </div> */}
            </div>
            </form>
           
        </main>
        </section>
    </div>
  )
}

export default Success