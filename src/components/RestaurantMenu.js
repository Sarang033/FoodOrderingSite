import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config.js";
import Shimmer from "./Shimmer.js";
import useRestaurant from "../utils/useRestaurant.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {
    const { id } = useParams();
    
    const restaurant =useRestaurant(id)
   
    const dispatch = useDispatch();

    // const handleAddItem = () =>{
    //   dispatch(addItem("grapes"))
    // }

    const addFoodItem = (item) =>{
      dispatch(addItem(item))
    }

    if(!restaurant){
        return <Shimmer/>
    }
    return  (
        <div className="menu">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} Stars</h3>
                <h3>{restaurant?.costForTwoMsg}</h3>
                {/* <div>
                <button
                 onClick={()=>handleAddItem()}
                 >Add Item
                 </button>
                 </div> */}
            </div>
            <div>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">DISHES</th>
                    <th scope="col">Veg/non-veg</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th  scope="row">
                    {Object.values(restaurant?.menu?.items).map((item) => (
                    <tr key={item.id}>{item.name}</tr>))}
                    </th>
                    <th scope="row">
                    {Object.values(restaurant?.menu?.items).map((item) => (
                    <tr key={item.id}>{item.attributes.vegClassifier}</tr>))}
                    </th>
                    {Object.values(restaurant?.menu?.items).map((item) => (
                    <tr><button
                    onClick={()=>addFoodItem(item)}
                     className="add-item-btn" key={item.id} >Add Item</button></tr>))}
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    )
}

export default RestaurantMenu;