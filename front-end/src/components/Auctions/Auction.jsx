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
// const API = "http://127.0.0.1:8000/";

// prod
const getReqApi = 'http://65.0.151.183:8000/auction_player_details/';
const API = "http://65.0.151.183:8000/";



export default function Auction() {

  const [data, setData] = useState([]);
  const [authStr, setAuthStr] = useState("");
  const [category, setCategory] =useState("");

  const handleAuthSubmit = (props) => {
    setAuthStr(localStorage.getItem("authStr"));
  }

  const handleAuthChange = (e) => {
    localStorage.setItem("authStr",e.target.value);
  }

  const handleSelectCategoryChange = (e) => {
    setCategory(e.target.value);
    localStorage.setItem("auction_category", e.target.value);
    console.log("category: ", category);
  }

  useEffect( () => {
      fetch(getReqApi)
      .then((response)=> response.json())
      .then((data) => {
          setData(data.filter(data => {
            return data.category === localStorage.getItem("auction_category");
          }));
          console.log("data: ", data)
      })
      .catch((err)=> {console.log(err.message)})
    }, [category])


  return (

    <>
        <form >
          <div className="form-wrap">
              <div className="form-field">

              <select id="cars" name="cars" className="form-data" defaultValue = {localStorage.getItem("auction_category")}   onChange={handleSelectCategoryChange} >
                <option value = "" >Select Category</option>
                <option value="All Rounder 1">All Rounder 1</option>
                <option value="All Rounder 2">All Rounder 2</option>
                <option value="Batsman">Batsman</option>
                <option value="Bowler">Bowler</option>
              </select>
              
              {/* <input
                  type="dropdown"
                  name="team"
                  className="form-data"
                  placeholder= "Select Category"
                  onChange={handleCategoryChange}
              /> */}

              </div> 
          </div>
          {/* <button className="btn" >Submit</button> */}
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
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          { data.map( player => (
            <SwiperSlide key={player.id} style={{  display: "flex", justifyContent: "center", alignItems: "center"}} >
              <div class="main-container">
                <section class="auction-sec">
                  <div class="auction-swiper-wrap">
                    <div class="swiper aucSwiper auc-swiper">
                      <div class="swiper-pagination counter"></div>
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <div class="auc-box">
                            <div class="player-img">
                              <img
                                src= { player.player_id.auction ? API+player.player_id.auction : Person}
                                alt="{image}"
                                width="100%"
                                height="100%"
                                loading="lazy"
                              />
                            </div>
                            <h2 class="player-name">{player.player_id.fname} {player.player_id.lname}</h2>
                            {/* <h2 class="category">{player.lname}</h2> */}
                            <h2 class="address">{player.player_id.hand} handed </h2>
                            {/* <h2 class="address">{player.player_id.good_at}</h2> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form >
                    <div className="form-wrap">
                        <div className="form-field">
                        {player.sold_to ?  <label htmlFor="team">{player.sold_to}</label>  : ""}
                        
                        </div>
                        <div className="form-field">
                        
                        { player.sold_on ? <label htmlFor="team">{player.sold_on}</label> : ""}
                        
                        </div>
                    </div>
                    
                  </form>
                  
                </section>
              </div>

              
                
            </SwiperSlide>
          ) ) }

        </Swiper>

          <div class="main-container">
            <section class="auction-sec">
              
              <div class="hp-logo-wrap" >
                <div class="hp-logo">
                  <img
                    src={hp_image}
                    alt="{Image}"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </div>
                <h1 class="hp-name">HariPrabodham Premier League</h1>
                <div class="hp-logo">
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
