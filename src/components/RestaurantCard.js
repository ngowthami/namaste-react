import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = props.resData;   
    return (
      <div className="res-card">
        <img className= "res-logo" 
        src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating}</h4>
      </div>
    );
  };

  export default RestaurantCard;