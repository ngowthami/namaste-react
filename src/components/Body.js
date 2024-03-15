import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState(listOfRestaurants);

  const [searchText, setsearchText] = useState("");

  //if no dependency array ==> useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on intial render(just once)
  //if dependency array is [btnNameReact] => useEffect called everytime btnNameReact is updated 
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return listOfRestaurants.length === 0 ? (
  <Shimmer/>
  ) :  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setsearchText(e.target.value);
          }}></input>
          <button onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log("data ===============>", filteredRestaurant);
            setfilteredRestaurant(filteredRestaurant)

          }}>Search</button>
        </div>
        <button className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              res.avgRating > 4
            });
            console.log(filteredList);
            setListOfRestaurant(filteredList)

          }}
        > Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant} resData={restaurant.info} />;
        })}
      </div>

    </div>
  );
};

export default Body;