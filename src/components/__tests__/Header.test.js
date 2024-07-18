import {fireEvent,render,screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";
import {Provider} from "react-redux";
import "@testing-library/jest-dom"

test("Should render Header component with login button",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
              <Header/>
          </Provider>
        </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button",{name:"Login"});
    expect(loginbutton).toBeInTheDocument();
})

test("Should render Header component with cart items 0",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
              <Header/>
          </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");
    expect(cartItems).toBeInTheDocument();
})

test("Should render Header component with cart item",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
              <Header/>
          </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})

test("Should change Login button to Logout on click",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
              <Header/>
          </Provider>
        </BrowserRouter>
    );

    const logginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(logginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})