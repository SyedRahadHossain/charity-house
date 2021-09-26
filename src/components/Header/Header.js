import React from "react";

const Header = () => {
    return (
        <div>
            <h1 className="bg-dark text-white p-3 m-0">
                <span className="text-warning">Charity House</span>
                <br />
                <span className="fs-4"><i>"The value of life is not in its duration, but in its donation"</i> -Myles Munroe</span>
                <br />
                <span className="fs-5">Total Donation: $5 Billion </span>
            </h1>
        </div>
    );
};

export default Header;
