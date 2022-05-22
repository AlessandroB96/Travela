import React from "react";

const Card = ({ place }) => {

    return (
        <div className="place-title">
            {place.name}
        </div>
    )
}

export default Card;