import React from 'react';
import './Richpeople.css'
const Richpeople = (props) => {
    // console.log(props.richpeople);
    const { name, wealth, sourceOfWealth, age, image, amount } = props.richpeople;
    return (
        <div className="">
            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Net worth: {wealth}</p>
                        <p className="card-text">Source of wealth: {sourceOfWealth}</p>
                        <p className="card-text">Age: {age}</p>
                        <p className="card-text">Donation amount: ${amount}</p>
                        <button className="btn btn-secondary"><i class="fas fa-shopping-cart"></i> Add to cart</button>

                    </div>
                </div>
            </div>



            {/* <div classNameName="rich-peoples">
                <div classNameName="">
                    <img classNameName="img" src={image} alt="" />
                    <h2>Name: {name}</h2>
                    <p>wealth: {wealth}</p>
                    <p></p>
                </div>
            </div> */}
        </div>
    );
};

export default Richpeople;