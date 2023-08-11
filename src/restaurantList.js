import React from "react";

const restaurantList = (props) => {
    return (
        <>
           {props.retaurants.map((restaurant, index) =>
           <div>
            <img src="{restaurant.mainPhotoSrc}"></img>
           </div>)}
        </>
    )
}

export default restaurantList;