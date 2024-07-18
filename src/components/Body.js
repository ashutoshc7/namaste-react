import { useState,useEffect,useContext } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    //Local State Variable = Super powerful Variable
    const [listOfrestaurants,setListOfRestaurant] = useState([]);
    const [filteredRestaurants,SetFilteredRestaurants] = useState([]);

    const [searchText,setSeacrhText]=useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    console.log(listOfrestaurants);
     
    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9822944&lng=77.5599826&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );   
         const json = await data.json();
         console.log(json);
         setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         SetFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus===false){
        return (
           <h1>Looks like you're offline!! Please check your internet connection</h1>
        );
    }

    const {loggedInUser,setUserName} = useContext(UserContext);
    
    return listOfrestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                    className="border border-solid border-black" 
                    value={searchText} 
                    onChange={(e) => {
                        setSeacrhText(e.target.value)
                        }}/>
                    <button 
                    className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        console.log(searchText);
                            const filteredRestaurants = listOfrestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            SetFilteredRestaurants(filteredRestaurants);
                        // setListOfRestaurant(filteredRestaurants);
                        
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                  <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                    const filteredList=listOfrestaurants.filter((x)=>x.info.avgRating>4.3);
                    SetFilteredRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                  <input className="border border-black p-2"
                  value={loggedInUser}
                  onChange={(e)=>setUserName(e.target.value)}
                  />
                  </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant)=>(
                        <Link key={restaurant.info.id}
                              to={"/restaurants/"+restaurant.info.id}>
                              {
                                restaurant.info.avgRating >= 4.5 ? (<RestaurantCardPromoted resData={restaurant} />) :
                                (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                              }
                        
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;