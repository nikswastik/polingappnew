import React,{useContext} from "react";
import "@testing-library/react-native";
import { fireEvent, render } from "@testing-library/react-native";
import { Result } from "./Result";


describe("render result component",()=>{
    it("render result component",()=>{
        render(<Result/>)
    })
})