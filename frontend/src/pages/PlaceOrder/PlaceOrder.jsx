import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivary Info</p>
        <div className="multi-feilds">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-feilds">
          <input type="text" placeholder="City Name" />
          <input type="text" placeholder="State Name" />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone number" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div className="cart-total-details">
            <p>SubTotal</p>
            <p> ${getTotalCartAmount()} </p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivary Fee</p>
            <p> {getTotalCartAmount() === 0 ? 0 : 2} </p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b> ${getTotalCartAmount() ===0 ? 0 : getTotalCartAmount()+2} </b>
          </div>
          <button >
            PROCEED TO Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
