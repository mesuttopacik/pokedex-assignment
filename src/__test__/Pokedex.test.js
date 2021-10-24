import React from "react"
import Pokedex from "../containers/Pokedex"
import {render, fireEvent} from "@testing-library/react" 
import "@testing-library/jest-dom/extend-expect"



test("dark light mode switch button works correctly" , () => {
    const {getByTestId} = render(<Pokedex />);
    const turnTheSwitch = getByTestId("turn_the_switch")

    fireEvent.change(turnTheSwitch, {
        target:{
            checked:'true'
        }
    });
    expect(turnTheSwitch.checked).toBe("true")
})