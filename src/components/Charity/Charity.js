import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Richpeople from '../Richpeople/Richpeople';

const Charity = () => {
    const [richpeoples, setRichpeoples] = useState([]);
    useEffect(() => {
        fetch("./richpeople.JSON")
            .then(res => res.json())
            .then(data => {
                setRichpeoples(data);
                // console.log(data);
            })
    }, []);
    return (
        <div className="m-5">
            {/* <h2>People: {richpeoples.length}</h2> */}
            <h2 className="ms-5 mb-4">10 Richest People in the World will help you</h2>
            <div className="row">
                <div className=" col-md-4 g-5">
                    <Cart></Cart>
                </div>
                <div className="col-md-8">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            richpeoples.map(richpeople => <Richpeople key={richpeople.key} richpeople={richpeople}></Richpeople>)
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Charity;