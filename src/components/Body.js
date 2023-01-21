import {restaurantList} from "../config"
import RestaurantCard from "./RestaurantCard"
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";

function filterData(searchText,restaurants){
  return restaurants.filter((restaurant)=>
  restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
}

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
    
    if(!allRestaurants) return null;
    
    if(filteredRestaurants?.length===0){
      return (      
        <h1>No Restaurant match your result</h1>
      )
    }
    return (filteredRestaurants.length ===0 )? < Shimmer/>: (
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
            filteredRestaurants.map(restaurant => {
              return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            })
          }   
        </div>
        </>
    )
}

export default Body;