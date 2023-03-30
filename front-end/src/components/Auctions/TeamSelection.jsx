import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import "swiper/css/bundle";

import saral_mandal from "./img/saral_mandal.jpg";
import hp_image from "./img/hp_logo.jpg";
// import "./Auction.css";
import "./main.css";
import "./responsive.css";
import Person from './img/Person.png'


// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// const getReqApi = 'http://127.0.0.1:8000/auction_player_details/';
// const teamPlayerPostApi = "http://127.0.0.1:8000/team_selection_list/";
// const teamPlayerGetApi = "http://127.0.0.1:8000/team_selection_list/";
// prod
const getReqApi = 'http://65.0.151.183:8000/auction_player_details/';
const teamPlayerPostApi = "http://65.0.151.183:8000/team_selection_list/";
const teamPlayerGetApi = "http://65.0.151.183:8000/team_selection_list/";


export default function TeamSelection() {

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState("");
    const [selectedShown, setSelectedShown] = useState([]);
    const [teamSelectionName, setTeamSelectionName] = useState("");
    const [getSelectedPlayers, setGetSelectedPlayers] = useState([]);

    useEffect( () => {
        fetch(getReqApi)
        .then((response)=> response.json())
        .then((data) => {
            console.log(data)
            setData(data);
        })
        .catch((err)=> {console.log(err.message)})
      }, [])
    
    // let formData = new FormData();

    const handleSelectCategoryChange = (e) => {
        // formData.append(e.target.value.id, e.target.value.player_id.fname)
        console.log("current", e.target.value);
        setSelected(e.target.value);
        console.log("selected items", selected);
        // setSelectedShown([...selected, e.target.value ]);
        // setCategory(e.target.value);
        // localStorage.setItem("auction_submit_category", e.target.value);
      }
    
    const handleTeamSelection = (event) => {
        event.preventDefault();
        console.log("teamnames on submit", selected)
        let chars = selected.split(" ")
        let formData = new FormData();
        formData.append("fname", chars[0])
        formData.append("lname", chars[1])
        let category = "";
        if (chars[2] === "All"){
            category = chars[2]+" "+chars[3]+ " "+chars[4]
        }else{
            category = chars[2]
        }
        console.log("category is", category)
        formData.append("category",  category)
        formData.append("team_name", localStorage.getItem("team_selection_name"))

        fetch( teamPlayerPostApi, {
            method: 'POST',
            'Content-type': 'multipart/form-data',
            body: formData
        } )
        .then(async response => {
            const data = await response.json()
            const error = (data && data.message) || response.status;
            console.log("data", data)
            console.log("Error", error)
            // setFetchSuccess("Done");
            if ( error && error == '201' ){
                console.log("Fetch Success", error)
                // navigate("/success")
            }else{
                alert("There is a prob in server please contact administration.")
            }
        })
        .catch(error => console.log("Error in post req:", error)) 
    }

    useEffect( () => {
        fetch(teamPlayerGetApi)
        .then((response)=> response.json())
        .then((remaining) => {
            setGetSelectedPlayers(remaining.filter(remaining => {
              return remaining.team_name == localStorage.getItem("team_selection_name");
            }));
          console.log("dream team data: ", remaining)
        //   console.log("team name", localStorage.getItem("team_name"))
        })
        .catch((err)=> {console.log(err.message)})
      }, [teamSelectionName])



    const handleTeamNameChange = (e) => {
        localStorage.setItem("team_selection_name", e.target.value)
    }

    const handleSelectionSubmit = (e) => {
        e.preventDefault();
        setTeamSelectionName(localStorage.getItem("team_selection_name"));
    }

    // fetch( teamPlayerPostApi, {
    //     method: 'POST',
    //     'Content-type': 'multipart/form-data',
    //     body: formData
    // } )
    // .then(async response => {
    //     const data = await response.json()
    //     const error = (data && data.message) || response.status;
    //     console.log("data", data)
    //     console.log("Error", error)
    //     setFetchSuccess("Done");
    //     if ( error && error == '201' ){
    //         console.log("Fetch Success", fetchSuccess)
    //         navigate("/success")
    //     }else{
    //         alert("There is a prob in server please contact administration.")
    //     }
    // })
    // .catch(error => console.log("Error in post req:", error))   

    if ( !teamSelectionName){
        return (<>
          <section className="section">
                <header>
                    <h4>Please Enter Team Name.</h4>
                </header>
                <main>
                    <form onSubmit={handleSelectionSubmit} >
    
                        <div className="form-item box-item">
                            <input type="text" name="reference" placeholder="Enter Team name" data-required onChange={handleTeamNameChange} />
                            <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                        </div>
                        
                        <div className='buttons__div' >
                            <div className="form-item">
                                <button type='submit' id="submit" className="submit">Submit</button>
                            </div>
                        </div>
    
                    </form>
                </main>
            </section>
    
        </>)
      }
    return (

        <>
            <form onSubmit={handleTeamSelection} >
                <div className="form-wrap"  >
                    <div className="form-field">

                        <select id="cars" name="cars" className="form-data" defaultValue = {localStorage.getItem("auction_submit_category")}   onChange={handleSelectCategoryChange} >
                            <option value = "" >Select Category</option>
                            { data.map( player => (
                                <option value = {`${player.player_id.fname} ${player.player_id.lname} ${player.category}`} >{player.player_id.fname} {player.player_id.lname} - {player.category}</option>  
                            ) ) }
                        </select>
                    
                    </div>
                    <button className="form-field">Submit</button> 
                </div>
            </form>

            <div className="selected-players" style = {{ color: "#f4f1c9" }} >
                    <div className="selected-player">

                    Selected Players
                    <ul>
                        {getSelectedPlayers.map(item => <li key={item.id}>{item.fname} {item.lname} - {item.category}</li>)}
                    </ul>
                       
                    
                    </div> 
                </div>
        
        </>




    );
}
