import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <React.Fragment key={e.id}>
                            <div className='cartitems-format'>
                                <img src={e.image} alt={e.name} className='carticon-product' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                <img 
                                    src={remove_icon} 
                                    onClick={() => removeFromCart(e.id)} 
                                    alt='Remove' 
                                    className='cart-remove-icon'
                                />
                            </div>
                            <hr />
                        </React.Fragment>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default CartItem;
