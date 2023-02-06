import { IMG_CDN_URL } from "../config";

const FoodItemCard= ({ 
  name,
  description,
  cloudinaryImageId,
  price 
  }) => {

  return (
    <div className="cart-card">
      <img src={ IMG_CDN_URL + cloudinaryImageId } />
      <h2>{name}</h2>
      <h4>{description}</h4>
      <h4>Rupees: {price/100}</h4>
    </div>
  )
}
export default FoodItemCard;