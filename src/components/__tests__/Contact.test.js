import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases",()=>{
    test("Should load contact us component", ()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button inside contact page",()=>{
        render(<Contact/>);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })
    
    test("should load input name inside contact component",()=>{
        render(<Contact/>);
        const inputname=screen.getByPlaceholderText("name");
        expect(inputname).toBeInTheDocument();
    })
    
    test("should be two input boxes",()=>{
        render(<Contact/>);
        const inputboxes = screen.getAllByRole("textbox");
        console.log(inputboxes.length);
        expect(inputboxes.length).toBe(2);
    })
});

