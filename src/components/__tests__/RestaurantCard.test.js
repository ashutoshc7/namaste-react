import {render,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import Mock_Data from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render restaurantCard Component with props Data",()=>{
       render(<RestaurantCard resData={Mock_Data}/>);

       const name=screen.getByText("Chinese Wok");

       expect(name).toBeInTheDocument();
})