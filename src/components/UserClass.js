import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
       
        this.state={
            userinfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"http://dummy-photo.com",
            }
        };
       // console.log(this.props.name+"Child Constructor");
    }
    async componentDidMount(){
       // console.log(this.props.name+"child component Did Mount");
          const data = await fetch("https://api.github.com/users/ashutoshc7");
          const json = await data.json();
          this.setState({
             userinfo:json,
          })
          console.log(json);
    }
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){
        const {name,location,avatar_url}=this.state.userinfo;
        
       // console.log(this.props.name+"child Render");
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                 <h2>Name:{name}</h2>
                 <h3>Location:{location}</h3>
                 <h4>Contact:@ashutoshc7</h4>
            </div>
        )
    };
};

export default UserClass;
