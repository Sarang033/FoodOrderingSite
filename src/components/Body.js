import {restaurantList} from "../config"
import RestaurantCard from "./RestaurantCard"
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline.js";

const Body =() => {
    const[searchText,setSearchText]=useState("");
    const[filteredRestaurants,setFilteredRestaurants]=useState([])
    const[allRestaurants,setAllRestaurants]=useState([])

    useEffect(()=>{
      getRestaurants(); 
    },[]);

    async function getRestaurants(){
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.73897&lng=77.7789817&page_type=DESKTOP_WEB_LISTING")
      const json=await data.json();
      console.log(json)
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const online=useOnline();

    if(!online){
      return <h1>Offline,please check your internet connection!!!</h1>
    }    

    if(!allRestaurants) return null;
    
    
    return allRestaurants?.length ===0 ? (< Shimmer/>): (
        <>
        <div className="search-area">
            <input
            type="text" 
            className="search-input" 
            placeholder="search restaurant" 
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
        />
        <button className="search-button"
        onClick={() =>{
          //filter the data out 
          // implementing search functionality
        const data =filterData(searchText,allRestaurants);
        setFilteredRestaurants(data); 
        }}
       >Search</button>
        </div>

        <div className="restaurant-list">
          {
            filteredRestaurants.map((restaurant)=> {
              return (
              <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                <RestaurantCard {...restaurant.data} /></Link>
            )})
          }   
        </div>
        </>
    )
}

export default Body;