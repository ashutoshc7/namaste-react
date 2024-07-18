import { LOGO_URL } from "../utils/constants";
import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    //console.log("Header render");
    
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    
    const cartItems = useSelector((store)=> store.cart.items);
    return (
        <div className="flex justify-between bg-yellow-50 shadow-lg sm:bg-green-100 lg:bg-blue-100">
            <div className="logo-container">
               <img className="w-36" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">OnlineStatus:{onlineStatus ? "✅" : "🔴" }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button className="login" onClick={()=>{
                         btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;