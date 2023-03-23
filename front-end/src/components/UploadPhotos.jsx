import React, {useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './PrctForm.css';

// const getPhotosDetailsApi = 'http://65.0.151.183:8000/profile_photos/'
const getPhotosDetailsApi =  "http://127.0.0.1:8000/profile_photos/"
const API = "http://127.0.0.1:8000/"
// const API = "http://65.0.151.183:8000"


const UploadPhotos = () => {

   
    const [profile, setProfile] = useState(localStorage.getItem("profile") || undefined);
    const [auction, setAuction] = useState(localStorage.getItem("auction") || undefined);
    const [fetchSuccess, setFetchSuccess] = useState("");
    const [fname, setFname] = useState( localStorage.getItem("fname") === 'undefined' || localStorage.getItem("fname") === 'null' || localStorage.getItem("fname") === 'NaN' ? "" : localStorage.getItem("fname"))
    const [lname, setLname] = useState(localStorage.getItem("lname") === 'undefined' || localStorage.getItem("lname") === 'null' || localStorage.getItem("lname") === 'NaN' ? "" : localStorage.getItem("lname"))
    const [editing, setEditing] = useState("")
    const [loginId, setLoginId] = useState("")
    const [mobNo, setMobNo] = useState("")
    const [mobNoAdded, setMobNoAdded] = useState("")
    const [done, setDone] = useState("")
    const [data, setData] = useState([]);

    let axiosConfig = {
        headers: {
            'Content-Type': 'multipart/form-data',
          }
    }

    let navigate = useNavigate(); 

    const handleProfileChange = (e) => {
        localStorage.setItem("profile", e.target.files[0])
        console.log("file uploaded",e.target.files[0])
        setProfile(e.target.files[0]);
    }

    const handleAuctionChange = (event) => {
        localStorage.setItem("auction", event.target.files[0])
        console.log("file uploaded",event.target.files[0])
        setAuction(event.target.files[0]);
    }

    const handleFnameChange = (event) => {
        setFname(event.target.value);
        console.log("First Name", fname);
    }

    const handleLnameChange = (event) => {
        setLname(event.target.value);
        console.log(lname);
    }

    const handleMobNoChange = (e) => {
        setMobNo(e.target.value)
    }

    const handleCredentialSubmit = () => {
        console.log("Calling handleCredentialConfig")
        axiosConfig['headers']["MobNo"] = mobNo;
        console.log("data from credential submit: ",data)
        setMobNoAdded(mobNo)
        console.log("loginId", loginId)
        console.log("axios config" ,axiosConfig);
        
    }

    useEffect( () => {
        if (mobNo){
          fetch(getPhotosDetailsApi+mobNo+"/")
          .then((response)=> response.json())
          .then((data) => {
              console.log("get api data",data)
              if (data.length < 1){
                navigate("/profile_not_registered")
              }
              setData(data[0]);
              localStorage.setItem("data", data);
          })
          .catch((err)=> {console.log(err.message)})
        }
      }, [mobNoAdded])

      let AuctionPhoto = ""
      let ProfilePhoto = ""

      { data ? AuctionPhoto = API + data.auction : AuctionPhoto = ""}
      { data ? ProfilePhoto =  API + data.profile : ProfilePhoto = ""}

    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("logging profile", profile)
        console.log("logging profile storage", localStorage.getItem("profile"))

        if (!profile || profile === "" || profile === "NaN" || profile === null || profile === "undefined"){
            return alert("Profile photo is empty")
        }
        console.log("logging auction", auction)
        if (!auction || auction === "" || auction === "NaN" || auction === null || auction === "undefined"){
            return alert("Auction photo is empty")
        }
        
        let formData = new FormData()
        
        if (profile){
            formData.append('profile', profile)
        }
        if (auction){
            formData.append('auction', auction)
        }
        formData.append("fname", data.fname)
        formData.append("lname", data.lname)
        
        console.log("Form data",formData.entries())


        if (profile && auction){
            fetch( getPhotosDetailsApi+data.id+"/", {
                method: 'PUT',
                'Content-type': 'multipart/form-data',
                body: formData
            } )
            .then(async response => {
                const data = await response.json()
                const error = (data && data.message) || response.status;
                console.log("data", data)
                console.log("Error", error)
                setFetchSuccess("Done");
                if ( error && error == '200'  ){
                    console.log("Fetch Success", fetchSuccess)
                    setDone("true")
                    navigate("profile_success")
                }else{
                    alert("There is a prob in server please contact administration.")
                }
            })
            .catch(error => console.log("Error in post req:", error))
            }

        localStorage.removeItem("profile")
        localStorage.removeItem("auction")
        
        localStorage.removeItem("mobNoAdded")

        setEditing("")
    }
        
        if (!mobNoAdded){
            return (
                    <div className="row">

                <section className="section">
                    <header>
                        <h3>Registration for HPL</h3>
                        <h5>Player Details</h5>
                    </header>
                    <main>
                        <form method="post" encType="multipart/form-data" onSubmit={handleCredentialSubmit} >
        
                            {/* <span onClick={handleEditClick} >Edit</span> */}
                            <div className="form-item-double box-item">
                                <div className="form-item ">
                                    <input type="text" name="mobno" placeholder="Mobile Number" value={mobNo} onChange={handleMobNoChange} data-required data-number/> 
                                </div>
                                {/* <div className="form-item">
                                    <input type="text" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} data-required data-number/>
                                </div> */}
                            </div>
                            
                            <div className='buttons__div' >
                                <div className="form-item">
                                    <span type='submit' id="submit" className="submit" onClick={handleCredentialSubmit} >Submit</span>
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
        
        return (
            <div className="row">
            
                    <section className="section">
                        <header>
                            <h3>Registeration for HPL</h3>
                            <h5>Player Photos Details</h5>
                        </header>
                        <main>
                            <form method="post" encType="multipart/form-data" onSubmit={handleSubmit} >
            
                                {/* <span onClick={handleEditClick} >Edit</span> */}
                                <div className="form-item-double box-item">
                                    <div className="form-item ">
                                        { editing ? <input type="text" name="fname" placeholder="First Name" value={ data ? data.fname: ""} onChange={handleFnameChange} data-required data-number/> : <span>{ data ? data.fname : ""}</span> }
                                    </div>
                                    <div className="form-item">
                                        { editing ? <input type="text" name="lname" placeholder="Last Name" value={ data ? data.lname: ""} onChange={handleLnameChange} data-required data-number/> : <span>{ data ? data.lname : ""}</span> }
                                        <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                                        <small className="errorNum"><i className="fa fa-asterisk" aria-hidden="true"></i> must be a number</small>
                                    </div>
                                </div>
            
                                {
                                    ( data && data.profile) ? 
                                    <div style={{display:"flex", flexDirection:"column"}} >
                                        <label className="label">Profile</label>
                                        <img src={ProfilePhoto} alt="Profile" width="100" height="100" />
                                    </div>
                                    : 
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
                                    

                                }

                                {
                                    ( data && data.auction) ? 

                                    <div style={{display:"flex", flexDirection:"column"}} >
                                        <label className="label">Auction</label>
                                        <img src= {AuctionPhoto} alt="Auction" width="100" height="100" />
                                    </div>  

                                    :

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
                                }  
                                    
                
                                    
                                

                                {/* <div style={{ display: "flex", gap:"2rem"}} > */}
                                    
                                                        

                                {/* </div> */}
                                
                                
                                <div className='buttons__div' >
                                    <div className="form-item">
                                        <button type='submit' id="submit" className="submit">Save</button>
                                    </div>
            
                                    {/* <div className="form-item next__button">
                                        <button id="next" className="submit" onClick={routeChange} >Next</button>
                                    </div> */}
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