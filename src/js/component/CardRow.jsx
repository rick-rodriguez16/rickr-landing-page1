import React from "react";
import Card from "./Card";

const CardRow = () => {

    return (
        <>
            <div className="d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default CardRow;
