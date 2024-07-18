import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from '../utils/UserContext';

class About extends Component{
    constructor(props){
        super(props);
      //  console.log("Parent Constructor");
    }

    componentDidMount(){
       // console.log("Parent Component Did Mount");
    }

    render(){
      //  console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <div>
                  loggedInUser
                  <UserContext.Consumer>
                    {({ loggedInUser }) =>(
                      <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                  </UserContext.Consumer>
                </div>
                <h2>This is Namaste react Web Series</h2>
                
                <UserClass name={"First Child"} location={"Kanpur Class"}/>
            </div>
        );
    } 
}

export default About;