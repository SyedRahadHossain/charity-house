import React from 'react';

const Cart = (props) => {
    console.log(props.name);
    return (
        <div>
            <h2>Donation Information</h2>
            
           <div className="table-responsive">
           <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">total selected</th>
                        <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                  
                </tbody>
            </table>
           </div>
        </div>
    );
};

export default Cart;