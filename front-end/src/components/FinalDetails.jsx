import React from 'react';
import { useNavigate } from 'react-router-dom';

// local
const profilePostApi = 'http://127.0.0.1:8000/api/profile/'
// prod
// const profilePostApi = 'http://127.0.0.1:8000/api/profile/'

const FinalDetails = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData()
        formData.append('fname', localStorage.getItem('fname'))
        formData.append('lname', localStorage.getItem('lname'))
        formData.append('yuvak_type', localStorage.getItem('yuvakType'))
        formData.append('mobile_number', parseInt(localStorage.getItem('phoneNumber')))
        formData.append('sabha_location', localStorage.getItem('sabhaLocation'))
        formData.append('reference', localStorage.getItem('reference'))
        formData.append('good_at', localStorage.getItem('goodAt'))
        formData.append('date_of_birth', localStorage.getItem('birthDate'))
        formData.append('hand', localStorage.getItem('whichHand'))
        formData.append('tshirt_name', localStorage.getItem('tshirtName'))
        formData.append('tshirt_size', localStorage.getItem('tshirtSize'))

        console.log("Form data",formData.entries())
      

        let axiosConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
              }
        }

        fetch( profilePostApi, {
            method: 'POST',
            'Content-type': 'multipart/form-data',
            body: formData
        } )
        .then(response => response.json())
        .then(data => console.log("data", data))   
        .catch(error => console.log("Error detected: " + error))

        navigate("/success")
    }


  return (
    <div className="row">
        <section className="section">
        <main>
            <form onSubmit={handleSubmit} >
                   
            <div className="form-item box-item">
                <div className="form-item-triple">
                    <div className="radio-label"> 
                        <label className="label">First Name</label>
                    </div>
                    <div className="form-item"> 
                        <label htmlFor="small">{localStorage.getItem("fname")}</label>
                    </div>
                </div>
            </div>

            <div className="form-item box-item">
                <div className="form-item-triple">
                    <div className="radio-label"> 
                        <label className="label">Last Name</label>
                    </div>
                    <div className="form-item"> 
                        <label htmlFor="small">{localStorage.getItem("lname")}</label>
                    </div>
                </div>
            </div>

            <div className="form-item box-item">
                <div className="form-item-triple">
                    <div className="radio-label"> 
                        <label className="label">Yuvak Type</label>
                    </div>
                    <div className="form-item"> 
                        <label htmlFor="small">{localStorage.getItem("yuvakType")}</label>
                    </div>
                </div>
            </div>

            <div className="form-item box-item">
                <div className="form-item-triple">
                    <div className="radio-label"> 
                        <label className="label">Mobile Number</label>
                    </div>
                    <div className="form-item"> 
                        <label htmlFor="small">{localStorage.getItem("phoneNumber")}</label>
                    </div>
                </div>
            </div>

            <div className="form-item box-item">
                <div className="form-item-triple">
                    <div className="radio-label"> 
                        <label className="label">Sabha Location</label>
                    </div>
                    <div className="form-item"> 
                        <label htmlFor="small">{localStorage.getItem("sabhaLocation")}</label>
                    </div>
                </div>
            </div>

            <div className="form-item box-item">
                <div className="form-item-triple">
                    <div className="radio-label"> 
                        <label className="label">Reference</label>
                    </div>
                    <div className="form-item"> 
                        <label htmlFor="small">{localStorage.getItem("reference")}</label>
                    </div>
                </div>
            </div>

            <div className="form-item box-item">
                <div className="form-item-triple">
                    <div className="radio-label"> 
                        <label className="label">Good At</label>
                    </div>
                    <div className="form-item"> 
                        <label htmlFor="small">{localStorage.getItem("goodAt")}</label>
                    </div>
                </div>
            </div>

            <div className="form-item box-item">
                <div className="form-item-triple">
                    <div className="radio-label"> 
                        <label className="label">Hand</label>
                    </div>
                    <div className="form-item"> 
                        <label htmlFor="small">{localStorage.getItem("whichHand")}</label>
                    </div>
                </div>
            </div>

            <div className="form-item box-item">
                <div className="form-item-triple">
                    <div className="radio-label"> 
                        <label className="label">Tshirt Size</label>
                    </div>
                    <div className="form-item"> 
                        <label htmlFor="small">{localStorage.getItem("tshirtSize")}</label>
                    </div>
                </div>
            </div>

            <div className="form-item box-item">
                <div className="form-item-triple">
                    <div className="radio-label"> 
                        <label className="label">Tshirt Name</label>
                    </div>
                    <div className="form-item"> 
                        <label htmlFor="small">{localStorage.getItem("tshirtName")}</label>
                    </div>
                </div>
            </div>

            <div className='buttons__div' >
                <div className="form-item">
                    <button type='submit' id="submit" className="submit">Submit</button>
                </div>

                {/* <div className="form-item next__button">
                    <button id="next" className="submit" onClick={routeChange} >Next</button>
                </div>

                <div className="form-item next__button">
                    <button id="next" className="submit" onClick={routeChange} >Submit All</button>
                </div> */}
            </div>
            </form>
        </main>
        </section>
    </div>
  )
}

export default FinalDetails