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
// const playerPutApi = 'http://127.0.0.1:8000/auction_player_detail/';

// prod
const getReqApi = 'http://65.0.151.183:8000/auction_player_details/';
const playerPutApi = 'http://65.0.151.183:8000/auction_player_detail/';


export default function AuctionSubmit() {

  const [data, setData] = useState([]);
  const [authStr, setAuthStr] = useState("");
  const [soldTo, setSoldTo] = useState("");
  const [soldOn, setSoldOn] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [category, setCategory] =useState("");

  const handleAuthSubmit = (props) => {
    setAuthStr(localStorage.getItem("authStr"));
  }

  const handleAuthChange = (e) => {
    localStorage.setItem("authStr",e.target.value);
  }

  useEffect( () => {
      fetch(getReqApi)
      .then((response)=> response.json())
      .then((data) => {
        setData(data.filter(data => {
            return data.category === localStorage.getItem("auction_submit_category");
          }));
        console.log("auction submit data: ", data)
      })
      .catch((err)=> {console.log(err.message)})
    }, [category])

  const handleSoldToChange = (e) => {
    setSoldTo(e.target.value);
  }
  const handleSoldOnChange = (e) => {
    setSoldOn(e.target.value);
  }

  const handlePlayerIdChange = (e) => {
    console.log("Player id from props is", setPlayerId(e.target.value));
  }

  const handleSelectCategoryChange = (e) => {
    setCategory(e.target.value);
    localStorage.setItem("auction_submit_category", e.target.value)
  }

  const handleBidSubmit = (event) => {
    event.preventDefault();
    console.log("sold to", soldTo, "sold on", soldOn, "id", playerId);

    let formData = new FormData()
    formData.append("sold_to", soldTo)
    formData.append("sold_on", soldOn)
    formData.append("is_sold", true)
    // formData.append("category", category)
    console.log("category from form data: ", category)
    console.log("final data to submit is: ", formData)


    fetch( playerPutApi+playerId+"/", {
        method: 'PUT',
        'Content-type': 'multipart/form-data',
        body: formData
        } )
        .then(async response => {
            const data = await response.json()
            const error = (data && data.message) || response.status;
            console.log("data", data)
            console.log("Error", error)
            // setFetchSuccess("Done");
            // return Promise.reject(error);
            // if ( error && error === '200' ){
            //     // console.log("Fetch Success", fetchSuccess)
            //     navigate("/success")
            // }else{
            //     alert("There is a prob in server please contact administration.")
            // }
        })
        .catch(error => console.log("Error in post req:", error)) 
  }


  return (

    <>

        <form >
          <div className="form-wrap">
              <div className="form-field">

                <select id="cars" name="cars" className="form-data" defaultValue = {localStorage.getItem("auction_submit_category")}   onChange={handleSelectCategoryChange} >
                    <option value = "" >Select Category</option>
                    <option value="All Rounder 1">All Rounder 1</option>
                    <option value="All Rounder 2">All Rounder 2</option>
                    <option value="Batsman">Batsman</option>
                    <option value="Bowler">Bowler</option>
                </select>
              
              </div> 
          </div>
        </form>
    
    
        <Swiper 
          style={{
            // "--swiper-pagination-color": '#f4f1c9',
            "--swiper-pagination-fraction-color": "#f4f1c9",
            
            // "--swiper-pagination-progressbar-bg-color": "rgba(0, 0, 0, 0.25)",
            // "--swiper-pagination-top": "50px"
            // "--swiper-pagination-progressbar-size": "40px"
            
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // pagination = {true}
          pagination={{
            type: "fraction",
            clickable: "true"
          }}
          // spaceBetween={50}
          slidesPerView={1}
          navigation = {{
            enabled : "true",
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev',
          }}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log("swiper")}
          onSlideChange={() => console.log('slide change')}
        >
          { data.map( player => (
            <SwiperSlide key={player.id} style={{  display: "flex", justifyContent: "center", alignItems: "center"}} >
              <div className="main-container">
                <section className="auction-sec">
                  <div className="auction-swiper-wrap">
                    <div className="swiper aucSwiper auc-swiper">
                      <div className="swiper-pagination counter"></div>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="auc-box">
                            <div className="player-img">
                              <img
                                src= { player.player_id.auction ? "http://127.0.0.1:8000/"+player.player_id.auction : Person}
                                alt="{image}"
                                width="100%"
                                height="100%"
                                loading="lazy"
                              />
                            </div>
                            <h2 className="player-name">{player.player_id.fname} {player.player_id.lname}</h2>
                            {/* <h2 className="category">{player.lname}</h2> */}
                            <h2 className="address">{player.player_id.hand} handed </h2>
                            {/* <h2 className="address">{player.player_id.good_at}</h2> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleBidSubmit}>
                    <div className="form-wrap">
                        <div className="form-field">
                        {player.sold_to ?  <label htmlFor="team">{player.sold_to}</label>  : <div> 
                            <label htmlFor="team">Sold To: </label>  
                            <input
                                type="text"
                                name="team"
                                className="form-data"
                                placeholder= "Enter Team's Name"
                                onChange={handleSoldToChange}
                            /> 
                            <label htmlFor="team">Id: {player.id} </label>
                            <input
                                type="text"
                                name="team"
                                className="form-data"
                                placeholder= "Enter Id"
                                onChange={handlePlayerIdChange}
                            />
                            </div> 
                        }
                        
                        </div>
                        <div className="form-field">
                        
                        { player.sold_on ? <label htmlFor="team">{player.sold_on}</label> : <div> <label htmlFor="team">Price:</label>
                            <input
                                type="text"
                                name="team"
                                className="form-data"
                                placeholder="Enter Bidding Amount"
                                onChange={handleSoldOnChange}
                            />
                        </div>}
                        
                        </div>
                    </div>
                    { player.sold_to && player.sold_on ? "" : <button className="btn" onSubmit={handleBidSubmit} >Submit</button> }
                  </form>
                  
                </section>
              </div>

            </SwiperSlide>
          ) ) }

        </Swiper>

          <div className="main-container">
            <section className="auction-sec">
              
              <div className="hp-logo-wrap" >
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
          </div>


      </>




  );
}
