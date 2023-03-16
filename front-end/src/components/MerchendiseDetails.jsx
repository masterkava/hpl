import React, {useState } from 'react';
import { useNavigate } from "react-router-dom";
import './PrctForm.css';


const PrctForm = () => {

    // const [fname, setFname] = useState(localStorage.getItem("fname") || undefined)
    const [tshirtSize, setTshirtSize] = useState(localStorage.getItem("tshirtSize") || undefined) 
    const [tshirtName, setTshirtName] = useState(localStorage.getItem("tshirtName") || undefined)

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/finaldetails'; 
        navigate(path);
    }

    const op = {
        tshirtSize: tshirtSize,
    }

    // const handleTshirtSizeChange = (event) => {
    //     setTshirtSize(event.target.value);
    //     localStorage.setItem( 'tshirtSize', tshirtSize )
    //     console.log(tshirtSize);
    // }

    const handleTshirtSizeChange = (event) => {
        setTshirtSize(event.target.value);
        console.log(tshirtSize);
    }

    const handleTshirtNameChange = (event) => {
        setTshirtName(event.target.value);
        console.log(tshirtName);
    }

    const handleSubmit = (event) => {
        localStorage.setItem("tshirtSize", tshirtSize);
        localStorage.setItem( 'tshirtName', tshirtName );
        event.preventDefault()
        
    }


  return (
    <div className="row">
        <section className="section">
            <header>
                <h3>Registeration for HPL</h3>
                <h5 >Merchendise Details</h5>
            </header>
            <main>
                <form onSubmit={handleSubmit} >


                    {/* Yuvak type */}
                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Tshirt Size</label>
                            </div>
                            <div className="form-item"> 
                                <input id="small" type="radio" name="tshirtsize" value="Small" data-once onChange={ handleTshirtSizeChange }/>
                                <label htmlFor="small">S</label>
                            </div>
                            <div className="form-item"> 
                                <input id="medium" type="radio" name="tshirtsize" value="Medium" data-once onChange={ handleTshirtSizeChange } />
                                <label htmlFor="medium">M</label>
                            </div>
                            <div className="form-item"> 
                                <input id="medium" type="radio" name="tshirtsize" value="Large" data-once onChange={ handleTshirtSizeChange } />
                                <label htmlFor="medium">L</label>
                            </div>
                            <div className="form-item"> 
                                <input id="medium" type="radio" name="tshirtsize" value="XLarge" data-once onChange={ handleTshirtSizeChange } />
                                <label htmlFor="medium">XL</label>
                            </div>
                            <div className="form-item"> 
                                <input id="medium" type="radio" name="tshirtsize" value="XXLarge" data-once onChange={ handleTshirtSizeChange } />
                                <label htmlFor="medium">XXL</label>
                            </div>

                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>

                    
                    <div className="form-item-double box-item">
                        <div className="form-item ">
                            <input type="text" name="tshirtname" placeholder="Tshirt Name" value={tshirtName} onChange={handleTshirtNameChange} data-required data-number/>
                            <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                            <small className="errorNum"><i className="fa fa-asterisk" aria-hidden="true"></i> must be a number</small>
                        </div>
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