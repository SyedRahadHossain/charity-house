import React from "react";
import "./Richpeople.css";
const Richpeople = (props) => {
    const { name, wealth, sourceOfWealth, age, image, amount } = props.richpeople;
    return (
        <div className="">
            <div className="col">
                <div className="card card-color shadow p-3 mb-5 rounded border border-secondary border-2">
                    <div>
                        <img
                            style={{ height: 200, width: 200, borderRadius: 100 }}
                            src={image}
                            className="card-img-top mt-3 img-fluid"
                            alt="..."
                        />
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title text fw-bold">{name}</h4>
                        <p className="card-text">
                            <span className="fw-bold">Net worth:</span> {wealth}
                        </p>
                        <p className="card-text">
                            <span className="fw-bold">Source of wealth: </span>
                            {sourceOfWealth}
                        </p>
                        <p className="card-text">
                            <span className="fw-bold">Age:</span> {age}
                        </p>
                        <p className="card-text">
                            <span className="fw-bold">Donation amount:</span> ${amount}
                        </p>
                        <div className="d-flex justify-content-center ">
                            <h2 className="me-4 mb-3">
                                <a href="https://www.facebook.com/">
                                    <i className="fab fa-facebook-square text-dark"></i>
                                </a>
                            </h2>
                            <h2>
                                <a href="https://twitter.com/">
                                    <i className="fab fa-twitter-square text-dark"></i>
                                </a>
                            </h2>
                        </div>
                        <button
                            onClick={() => props.handleAddRequest(props.richpeople)}
                            className="btn btn-dark"
                        >
                            <i className="fas fa-hand-holding-usd"></i> Add request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Richpeople;
