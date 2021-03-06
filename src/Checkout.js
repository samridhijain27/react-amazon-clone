import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"  
            className="checkout__ad"
            alt=""></img>
            {basket?.length === 0?(
            <div>
                <h2>Your shopping cart is empty</h2>
            </div>
            ) :
            (
                <div>
                    <h2 className="checkout__title">Your shopping cart</h2>
                    {/* This displays all products */}
                  {
                      basket.map((item) =>{
                          <CheckoutProduct 
                          id = {item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                          />
                      })
                  }
                    </div>
            )
            }
        </div>
        
        
        
            <div className="checkout__right">
            <SubTotal/>
            </div>
            </div>
        
    );
}

export default Checkout
