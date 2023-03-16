import React, {useState } from 'react';
import { useNavigate } from "react-router-dom";
import './PrctForm.css';
import PaymentImage from "../media/images/Payment_Image.png";

const Payment = () => {

    const [payment, setPayment] = useState(localStorage.getItem("payment") || undefined);
    const [paymentStatus, setPaymentStatus] = useState(localStorage.getItem("paymentStatus") || undefined);
    const [paymentType, setPaymentType] = useState(localStorage.getItem("paymentType") || undefined);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/playerstatus';
        navigate(path);
    }

    const op = {
        payment: payment,
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
        console.log(payment);
    }

    const handlePaymentStatus = (event) => {
        setPaymentStatus(event.target.value);
        console.log(paymentStatus);
    }

    const handlePaymentType = (event) => {
        setPaymentType(event.target.value);
        console.log(paymentType);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("payment", payment);
        localStorage.setItem("paymentType", paymentType);
        localStorage.setItem("paymentStatus", paymentStatus);

    }


  return (
    <div className="row">
        <section className="section">
            <header>
                <h3>Registeration for HPL</h3>
                <h5 >Payment Details</h5>
            </header>
            <main>
                <form onSubmit={handleSubmit} >


                    {/* Yuvak type */}
                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Payment Amount</label>
                            </div>
                            <div className="form-item"> 
                                <input id="500" type="radio" name="tshirtsize" value="500" data-once onChange={ handlePaymentChange }/>
                                <label htmlFor="500">500</label>
                            </div>
                            <div className="form-item"> 
                                <input id="1000" type="radio" name="tshirtsize" value="1000" data-once onChange={ handlePaymentChange } />
                                <label htmlFor="1000">1000</label>
                            </div>
                            <div className="form-item"> 
                                <input id="1500" type="radio" name="tshirtsize" value="1500" data-once onChange={ handlePaymentChange } />
                                <label htmlFor="1500">1500</label>
                            </div>
                            <div className="form-item"> 
                                <input id="2000" type="radio" name="tshirtsize" value="2000" data-once onChange={ handlePaymentChange } />
                                <label htmlFor="2000">2000</label>
                            </div>
                            <div className="form-item"> 
                                <input id="2500" type="radio" name="tshirtsize" value="2500" data-once onChange={ handlePaymentChange } />
                                <label htmlFor="2500">2500</label>
                            </div>

                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>

                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Payment Type</label>
                            </div>
                            <div className="form-item"> 
                                <input id="done" type="radio" name="paymenttype" value="UPI" data-once onChange={ handlePaymentType }/>
                                <label htmlFor="done">UPI</label>
                            </div>
                            <div className="form-item"> 
                                <input id="pending" type="radio" name="paymenttype" value="Cash" data-once onChange={ handlePaymentType } />
                                <label htmlFor="pending">Cash</label>
                            </div>
                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>

                    {/* Mob no */}
                    <div className="form-item box-item">
                        <div className="form-item-triple">
                            <div className="radio-label"> 
                                <label className="label">Payment Status</label>
                            </div>
                            <div className="form-item"> 
                                <input id="done" type="radio" name="paymentstatus" value="Done" data-once onChange={ handlePaymentStatus }/>
                                <label htmlFor="done">Done</label>
                            </div>
                            <div className="form-item"> 
                                <input id="pending" type="radio" name="paymentstatus" value="Pending" data-once onChange={ handlePaymentStatus } />
                                <label htmlFor="pending">Pending</label>
                            </div>
                        </div>
                        <small className="errorOnce"><i className="fa fa-asterisk" aria-hidden="true"></i> choose at least one</small>
                    </div>


                    <img src={PaymentImage} alt="Flowers in Chania"></img>


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

export default Payment