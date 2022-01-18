import React from "react";
import cashImg from "../assets/Shape.png";
const Form = () => {
  return (
    <form>
      <div className="form-wrapper">
        <h4>Checkout</h4>
        <div className="billing-info">
          <h6>Billing details</h6>
          <div className="field-wrapper">
            <div className="info-block">
              <label>Name</label>
              <input type="text" placeholder="John Doe"></input>
            </div>
            <div className="info-block">
              <label>Email Address</label>
              <input type="text" placeholder="john@gmail.com"></input>
            </div>
            <div className="info-block">
              <label>Phone Number</label>
              <input type="text" placeholder="+1 123 456 7890"></input>
            </div>
          </div>
        </div>
        <div className="shipping-info">
          <h6>shipping details</h6>
          <div className="field-wrapper">
            <div className="info-block">
              <label>Your Address</label>
              <input
                className="address"
                type="text"
                placeholder="123 William Avenue"
              ></input>
            </div>
            <div className="info-block">
              <label>Zip Code</label>
              <input type="text" placeholder="12345"></input>
            </div>
            <div className="info-block">
              <label>City</label>
              <input type="text" placeholder="New York"></input>
            </div>
            <div className="info-block">
              <label>Country</label>
              <input type="text" placeholder="United States"></input>
            </div>
          </div>
        </div>
        <div className="payment-info">
          <h6>payment details</h6>
          <div className="info-block">
            <label>Payment method</label>
            <div className="radio">
              <input name="payment-method" type="radio" checked readOnly></input>
              <span>E-money</span>
            </div>
            <div className="radio">
              <input name="payment-method" type="radio"></input>
              <span>cash on delivery</span>
            </div>
          </div>

          <div className="emoney">
            <div className="info-block">
              <label>E-Money Number</label>
              <input type="text" placeholder="123456789"></input>
            </div>
            <div className="info-block">
              <label>E-Money Pin</label>
              <input type="text" placeholder="1234"></input>
            </div>
          </div>

          <div className="cash">
            <img src={cashImg} alt="cash"></img>
            <p>
              The 'Cash on Delivery' option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Form;
