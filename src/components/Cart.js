import { useDispatch, useSelector } from "react-redux";
import { clearCart} from "../utils/cartSlice";
import FoodItemCard from "./FoodItemCart";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    return (
        <div>
            <div className="cart-cont">
            <h1>Cart items - {cartItems.length}</h1>
            <button onClick={()=>handleClearCart()} className="clear-cart-btn">Clear Cart</button>
            </div>
            <div className="cart-items">
                {cartItems.map((item) =>
                <FoodItemCard key={item.id} {...item}/>)}
            </div>
           
        </div>
    )
}

export default Cart;