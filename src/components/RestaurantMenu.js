import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config.js";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {
    const { id } = useParams();

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    const [restaurant, setRestaurant] = useState(null);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.7338175&lng=77.78487&menuId="+id);
        const json = await data.json();
        setRestaurant(json.data);
    }
    if(!restaurant){
        return <Shimmer/>
    }
    return  (
        <div className="menu">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant.name}</h2>
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating} Stars</h3>
                <h3>{restaurant.costForTwoMsg}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                   {Object.values(restaurant?.menu?.items).map((item) => (
                   <li key={item.id}>{item.name}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;