import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({data,showItems,setShowIndex}) =>{
   // const [showItems,setShowItems]=useState(false);

    const handleClick =() =>{
        // showItems===false? setShowItems(true) : setShowItems(false);
        setShowIndex();
    };
   // console.log(data);
    return (
    <div>
        <div className="w-6/12 m-auto bg-gray-50 mx-auto my-4 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
              <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
              <span>🔽</span>
            </div>
             
             {showItems && <ItemList items={data.itemCards} />}
        </div>
    </div>
    );
};

export default RestaurantCategory;