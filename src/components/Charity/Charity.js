import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Richpeople from "../Richpeople/Richpeople";
import "./Charity.css";

const Charity = () => {
    const [richpeoples, setRichpeoples] = useState([]);
    const [cart, setCart] = useState([]);
    // handler for add requesting
    const handleAddRequest = (richpeople) => {
        const newCart = [...cart, richpeople];
        setCart(newCart);
    };
    // fetching data
    useEffect(() => {
        fetch("./richpeople.JSON")
            .then((res) => res.json())
            .then((data) => {
                setRichpeoples(data);
            });
    }, []);
    return (
        <div className="background-color">
            <div className="mx-5">
                <h2 className="mb-4 pt-3 fw-bold">
                    Richest People to help the humanity
                </h2>
                <div className="row">
                    {/* card */}
                    <div className="col-md-9">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {richpeoples.map((richpeople) => (
                                <Richpeople
                                    key={richpeople.key}
                                    richpeople={richpeople}
                                    handleAddRequest={handleAddRequest}
                                ></Richpeople>
                            ))}
                        </div>
                    </div>
                    {/* cart */}
                    <div className=" col-md-3 g-5">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charity;
