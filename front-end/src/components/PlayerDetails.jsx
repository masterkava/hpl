import React, {useState } from 'react';
import { useNavigate } from "react-router-dom";
import './PrctForm.css';


const PlayerDetails = () => {

   
    const [goodAt, setGoodAt] = useState(localStorage.getItem("goodAt") || undefined);
    const [whichHand, setWhichHand] = useState(localStorage.getItem("whichHand") || undefined);


    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/merchendisedetails'; 
        navigate(path);
    }


    const handleHandedPlayerChange = (event) => {
        setWhichHand(event.target.value);
    }

    const handleGoodAtChange = (event) => {
        setGoodAt(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('goodAt',goodAt);
        localStorage.setItem('whichHand', whichHand);
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

                   
                    {/* Good At */}
                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Good At</label>
                            </div>
                            <div className="form-item"> 
                                <input id="batsman" type="radio" name="goodat" value="Batsman" data-once onChange={ handleGoodAtChange }/>
                                <label htmlFor="batsman">Batsman</label>
                            </div>
                            <div className="form-item"> 
                                <input id="bowler" type="radio" name="goodat" value="Bowler" data-once onChange={ handleGoodAtChange } />
                                <label htmlFor="bowler">Bowler</label>
                            </div>
                            <div className="form-item"> 
                                <input id="allrounder" type="radio" name="goodat" value="All Rounder" data-once onChange={ handleGoodAtChange } />
                                <label htmlFor="allrounder">All Rounder</label>
                            </div>
                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>

                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Which Handed Player</label>
                            </div>
                            <div className="form-item"> 
                                <input id="right" type="radio" name="whichHand" value="Right" data-once onChange={ handleHandedPlayerChange }/>
                                <label htmlFor="right">Right</label>
                            </div>
                            <div className="form-item"> 
                                <input id="left" type="radio" name="whichHand" value="Left" data-once onChange={ handleHandedPlayerChange } />
                                <label htmlFor="left">Left</label>
                            </div>
                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>


                    {/* <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Upload photos</label>
                            </div>
                            <div className="form-item"> 
                                <input type="file"
                                    id="avatar" name="avatar"
                                    accept="image/png, image/jpeg"/>
                            </div>
                            <div className="form-item"> 
                                <input type="file"
                                    id="avatar" name="avatar"
                                    accept="image/png, image/jpeg"/>
                            </div>
                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div> */}
                    
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

export default PlayerDetails