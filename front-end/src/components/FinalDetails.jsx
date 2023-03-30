import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// local
const profilePostApi = 'http://65.0.151.183:8000/api/profile/'
// prod
// const profilePostApi = 'http://127.0.0.1:8000/api/profile/'

const FinalDetails = () => {

    const navigate = useNavigate();
    const [fetchSuccess, setFetchSuccess] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        if (localStorage.getItem('fname') === 'undefined' || localStorage.getItem('fname') === 'NaN' || localStorage.getItem('fname') === 'null' || localStorage.getItem('fname') === ''){
            return alert("First name is empty")
        }
        if (localStorage.getItem('lname')=== 'undefined' || localStorage.getItem('lname') === 'NaN' || localStorage.getItem('lname') === 'null' || localStorage.getItem('lname') === '' ){
            return alert("Last name is empty")
        }
        if (localStorage.getItem('yuvakType') === 'undefined' || localStorage.getItem('yuvakType') === 'NaN' || localStorage.getItem('yuvakType') === 'null' || localStorage.getItem('yuvakType') === ''){
            return alert("yuvak Type is empty")
        }
        if (localStorage.getItem('phoneNumber') === 'undefined' || localStorage.getItem('phoneNumber') === 'NaN' || localStorage.getItem('phoneNumber') === 'null' || localStorage.getItem('phoneNumber') === ''){
            return alert("Mobile Number is empty")
        }
        if (localStorage.getItem('sabhaLocation') === 'undefined' || localStorage.getItem('sabhaLocation') === 'NaN' || localStorage.getItem('sabhaLocation') == 'null' || localStorage.getItem('sabhaLocation') == ''){
            return alert("Sabha Location is empty")
        }
        if (localStorage.getItem('reference') === 'undefined' || localStorage.getItem('reference') === 'NaN' || localStorage.getItem('reference') === 'null' || localStorage.getItem('reference') === ''){
            return alert("Reference is empty")
        }
        if (localStorage.getItem('goodAt') === 'undefined' || localStorage.getItem('goodAt') === 'NaN' || localStorage.getItem('goodAt') === 'null' || localStorage.getItem('goodAt') === ''){
            return alert("Good At is empty")
        }
        if (localStorage.getItem('birthDate') === 'undefined' || localStorage.getItem('birthDate') === 'NaN' || localStorage.getItem('birthDate') === 'null' || localStorage.getItem('birthDate') === ''){
            return alert("Birth Date is empty")
        }
        if (localStorage.getItem('whichHand') === 'undefined' || localStorage.getItem('whichHand') === 'NaN' || localStorage.getItem('whichHand') === 'null' || localStorage.getItem('whichHand') === ''){
            return alert("Which Handed Player is empty")
        }
        if (localStorage.getItem('tshirtName') === 'undefined' || localStorage.getItem('tshirtName') === 'NaN' || localStorage.getItem('tshirtName') === 'null' || localStorage.getItem('tshirtName') === ''){
            return alert("Tshirt Name is empty")
        }
        if (localStorage.getItem('tshirtSize') === 'undefined' || localStorage.getItem('tshirtSize') === 'NaN' || localStorage.getItem('tshirtSize') === 'null' || localStorage.getItem('tshirtSize') === ''){
            return alert("Tshirt Size is empty")
        }

        let formData = new FormData()
        formData.append('fname', localStorage.getItem('fname') === 'undefined' || localStorage.getItem('fname') === 'NaN' || localStorage.getItem('fname') === 'null' ? "" : localStorage.getItem('fname'))
        formData.append('lname', localStorage.getItem('lname')=== 'undefined' || localStorage.getItem('lname') === 'NaN' || localStorage.getItem('lname') === 'null' ? "" : localStorage.getItem('lname'))
        formData.append('yuvak_type', localStorage.getItem('yuvakType') === 'undefined' || localStorage.getItem('yuvakType') === 'NaN' || localStorage.getItem('yuvakType') === 'null' ? "" : localStorage.getItem('yuvakType'))
        formData.append('mobile_number', localStorage.getItem('phoneNumber') === 'undefined' || localStorage.getItem('phoneNumber') === 'NaN' || localStorage.getItem('phoneNumber') === 'null' ? '' : parseInt(localStorage.getItem('phoneNumber')))
        formData.append('sabha_location', localStorage.getItem('sabhaLocation') === 'undefined' || localStorage.getItem('sabhaLocation') === 'NaN' || localStorage.getItem('sabhaLocation') === 'null' ? "" : localStorage.getItem('sabhaLocation'))
        formData.append('reference', localStorage.getItem('reference') === 'undefined' || localStorage.getItem('reference') === 'NaN' || localStorage.getItem('reference') === 'null' ? "" : localStorage.getItem('reference') )
        formData.append('good_at', localStorage.getItem('goodAt') === 'undefined' || localStorage.getItem('goodAt') === 'NaN' || localStorage.getItem('goodAt') === 'null' ? "" : localStorage.getItem('goodAt') )
        formData.append('date_of_birth', localStorage.getItem('birthDate') === 'undefined' || localStorage.getItem('birthDate') === 'NaN' || localStorage.getItem('birthDate') === 'null' ? "" : localStorage.getItem('birthDate') )
        formData.append('hand', localStorage.getItem('whichHand') === 'undefined' || localStorage.getItem('whichHand') === 'NaN' || localStorage.getItem('whichHand') === 'null' ? "" : localStorage.getItem('whichHand') )
        formData.append('tshirt_name', localStorage.getItem('tshirtName') === 'undefined' || localStorage.getItem('tshirtName') === 'NaN' || localStorage.getItem('tshirtName') === 'null' ? "" : localStorage.getItem('tshirtName') )
        formData.append('tshirt_size', localStorage.getItem('tshirtSize') === 'undefined' || localStorage.getItem('tshirtSize') === 'NaN' || localStorage.getItem('tshirtSize') === 'null' ? "" : localStorage.getItem('tshirtSize') )

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
        .then(async response => {
            const data = await response.json()
            const error = (data && data.message) || response.status;
            console.log("data", data)
            console.log("Error", error)
            setFetchSuccess("Done");
            // return Promise.reject(error);
            if ( error && error == '201' ){
                console.log("Fetch Success", fetchSuccess)
                navigate("/success")
            }else{
                alert("There is a prob in server please contact administration.")
            }
        })
        .catch(error => console.log("Error in post req:", error))        

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