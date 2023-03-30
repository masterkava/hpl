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
// const getDreamTeamPlayers = "http://127.0.0.1:8000/team_selection_list/";
// const getCredentials = "http://127.0.0.1:8000/team_authentication_list/";

// http://65.0.151.183:8000
// prod
const getReqApi = 'http://65.0.151.183:8000/auction_player_details/';
const getDreamTeamPlayers = "http://65.0.151.183:8000/team_selection_list/";
const getCredentials = "http://65.0.151.183:8000/team_authentication_list/";


export default function CaptainScreen() {

    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");
    const [remaining, setRemaining] = useState([]);
    const [teamName, setTeamName] = useState("");
    const [teamPassword, setTeamPassword] = useState("");
    const [dreamTeam, setDreamTeam] = useState([]);
    const [getSpendAmount, setGetSpendAmount] = useState(0);
    const [credentials, setCredentials] = useState([]);

    let spendAmount = 0;
    function addAmountFunction(item) {
        spendAmount += item.sold_on;
    }

    useEffect( () => {
        fetch(getReqApi)
        .then((response)=> response.json())
        .then((data) => {
          setData(data.filter(data => {
              return data.sold_to === localStorage.getItem("team_name");
            }));
          console.log("auction submit data: ", data)
          console.log("team name", localStorage.getItem("team_name"))
        
        let new_data = data.filter(data => {
            return data.sold_to === localStorage.getItem("team_name");
          })
    
        new_data.forEach(addAmountFunction);
        console.log("Spend Amount is: ", spendAmount);
        setGetSpendAmount(15000000 - spendAmount);

        })
        .catch((err)=> {console.log(err.message)})
      }, [teamName])

    
    useEffect( () => {
        fetch(getReqApi)
        .then((response)=> response.json())
        .then((remaining) => {
          setRemaining(remaining.filter(remaining => {
              return remaining.is_sold !== true;
            }));
          console.log("auction remaining data: ", remaining)
        //   console.log("team name", localStorage.getItem("team_name"))
        })
        .catch((err)=> {console.log(err.message)})
      }, [teamName])

    
    useEffect( () => {
        fetch(getDreamTeamPlayers)
        .then((response)=> response.json())
        .then((remaining) => {
            setDreamTeam(remaining.filter(remaining => {
              return remaining.team_name == localStorage.getItem("team_name");
            }));
          console.log("dream team data: ", remaining)
        //   console.log("team name", localStorage.getItem("team_name"))
        })
        .catch((err)=> {console.log(err.message)})
      }, [teamName])


      console.log("dream team is", dreamTeam)

      const handleTeamNameChange = (e) => {
        localStorage.setItem("team_name", e.target.value)
      }

      const handleTeamPasswordChange = (e) => {
        localStorage.setItem("team_password", e.target.value)
      }

      const handleTeamNameSubmit = () => {
        // setTeamName(localStorage.getItem("team_name"));
        // setTeamPassword(localStorage.getItem("team_password"));

        fetch(getCredentials)
        .then((response)=> response.json())
        .then((remaining) => {
            setCredentials(remaining);
            console.log("get api credentials data", remaining)
            
        //   console.log("team name", localStorage.getItem("team_name"))
        })
        .catch((err)=> {console.log(err.message)})
        console.log("credentials data for filter", credentials);
        setTeamName( credentials.filter( team_credentials => {return team_credentials.team_name == localStorage.getItem("team_name") }) );
        setTeamPassword( credentials.filter( team_credentials => {return team_credentials.team_name == localStorage.getItem("team_password") }) );
        console.log("team name :::::::", teamName);
        console.log("team password :::::::", teamPassword);
      }

      
      console.log("credentials team data: ", credentials)


      const handleLogout = () => {
        localStorage.removeItem("team_name");
        window.location.reload(false);
      }

      console.log("data", data)
      console.log("remaining", remaining)


      if ( !teamName  && !teamPassword  ){
        return (<>
          <section className="section">
                <header>
                    <h4>Please Enter Team Name.</h4>
                </header>
                <main>
                    <form onSubmit={handleTeamNameSubmit} >
    
                        <div className="form-item box-item">
                            <input type="text" name="reference" placeholder="Enter Team name" data-required onChange={handleTeamNameChange} />
                            <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                        </div>
                        <div className="form-item box-item">
                            <input type="password" name="reference" placeholder="Enter Team Password" data-required onChange={handleTeamPasswordChange} />
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
            {/* <form >
          <div className="form-wrap">
              <div className="form-field">

              <input
                    type="button"
                    name="team"
                    className="form-data"
                    placeholder="Logout"
                    onClick={handleLogout}
                /> 
              
              </div> 
          </div>
        </form> */}

            <div className="main-container">
                <section className="data-sec">
                    <div className="hp-logo-wrap">
                        <div className="hp-logo">
                            <img
                                src={hp_image}
                                alt="{Image}"
                                width="100%"
                                height="100%"
                                loading="lazy"
                            />
                        </div>
                        <h1 className="hp-name">HariPrabodham Premier League</h1>
                        <div className="hp-logo">
                            <img
                            src={saral_mandal}
                            alt="{Image}"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                <div className="amt-wrap">
                    <h3 className="amt-num" id="total-amt">
                    Total Amount : <span>1,50,00,000</span>
                    </h3>
                    <h3 className="amt-num" id="left-amt">
                    Amount Left : <span>{getSpendAmount}</span>
                    </h3>
                </div>

                <div className="player-info-box">
                    <div className="team-wrap">
                    <div className="team-box">
                        <h3 className="team-name">{localStorage.getItem("team_name")} - {data.length}</h3>
                        <div className="team-player-wrap">
                            <ol>
                                { data.map( data => (
                                    <li key={data.id} > {data.player_id.fname} {data.player_id.lname} - {data.category} - {data.sold_on} </li>
                                ) ) }
                            </ol>
                        </div>
                    </div>
                    {/* <div className="team-swiper-wrap">
                        <div className="swiper teamSwiper team-swiper">
                        <div className="swiper-pagination counter"></div>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                            <div className="player-info">
                                <div className="player-img">
                                <img
                                    src="./img/profile-img.webp"
                                    alt="{image}"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                />
                                </div>
                                <h2 className="player-name">Surya Kumar Yadav</h2>
                                <h2 className="category">Batsman - Right Handed</h2>
                                <h2 className="address">Bhaynder East</h2>
                            </div>
                            </div>
                            <div className="swiper-slide">
                            <div className="player-info">
                                <div className="player-img">
                                <img
                                    src="./img/profile-img.webp"
                                    alt="{image}"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                />
                                </div>
                                <h2 className="player-name">Surya Kumar Yadav</h2>
                                <h2 className="category">Batsman - Right Handed</h2>
                                <h2 className="address">Bhaynder East</h2>
                            </div>
                            </div>
                            <div className="swiper-slide">
                            <div className="player-info">
                                <div className="player-img">
                                <img
                                    src="./img/profile-img.webp"
                                    alt="{image}"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                />
                                </div>
                                <h2 className="player-name">Surya Kumar Yadav</h2>
                                <h2 className="category">Batsman - Right Handed</h2>
                                <h2 className="address">Bhaynder East</h2>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                    <div className="team-wrap">
                    <div className="team-box">
                        <h3 className="team-name">remaining players - {remaining.length} <span></span></h3>
                        <div className="team-player-wrap remain" id="remain">
                            <ol>
                            { remaining.map( remaining => (
                                    <li key={remaining.id} > {remaining.player_id.fname} {remaining.player_id.lname} - {remaining.category} </li>
                                ) ) }
                            </ol>
                        </div>
                    </div>
                    <div className="team-box">
                        <h3 className="team-name">Dream Team</h3>
                        <div className="team-player-wrap remain">
                        <ol>
                            { dreamTeam.map( player => ( <li>{player.fname} {player.lname} - {player.category}</li> ) ) }
                            
                        </ol>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
        </>




    );
}
