import {useState} from "react";

const User=({name})=>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
         <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
             <h1>Count = {count}</h1>
             <h1>Count2 = {count2}</h1>
             <h2>Name:{name}</h2>
             <h3>Location:Kanpur</h3>
             <h4>Contact:@ashutoshc7</h4>
         </div>
    );
};

export default User;