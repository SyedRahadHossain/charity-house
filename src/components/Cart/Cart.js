import React from "react";

const Cart = (props) => {
    const { cart } = props;
    // using reduce for total donation amount
    const totalReducer = (previousValue, currentValue) =>
        previousValue + currentValue.amount;

    const total = cart.reduce(totalReducer, 0);

    return (
        <div className="">
            <div className="bg-dark border border-secondary border-2 text-white rounded p-1 shadow-lg ">
                <h3>Donation Information</h3>
                <hr />
                <h6>Total request: {cart.length} </h6>
                <hr />
                <h4>Total amount: ${total}</h4>
                <ul className="list-group">
                    {cart.map((richpeople, index) => (
                        <small key={index}>
                            <li className="list-group-item list-group-item-secondary text-center">
                                {richpeople.name}
                                <span>: ${richpeople.amount}</span>
                            </li>
                        </small>
                    ))}
                </ul>
                <button className="btn btn-secondary p-2 m-3">Send Request</button>
            </div>
        </div>
    );
};

export default Cart;
