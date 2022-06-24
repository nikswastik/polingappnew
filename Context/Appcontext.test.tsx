import React,{useContext} from "react";
import "@testing-library/react-native";
import { fireEvent, render } from "@testing-library/react-native";
import { AppContext, AppStore } from "./Appcontext";


describe("render context api",()=>{
    it("rendering context api",()=>{
        render(<AppStore/>)
    })
})