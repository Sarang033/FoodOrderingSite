import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (id) => {
   const[restaurant,setRestaurant]=useState(null);
   //Getting data from API
   useEffect(() => {
    getRestaurantInfo();
}, [])

async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL+id);
    const json = await data.json();
    setRestaurant(json.data);
}
   //returning restaurant data
   return restaurant;
};


export default useRestaurant;