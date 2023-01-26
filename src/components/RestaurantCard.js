import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ name, cuisines, area, avgRating, costForTwoString, cloudinaryImageId, lastMileTravelString }) => {

  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  )
}
export default RestaurantCard;