import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../../../theme";
import { MemoryRouter } from "react-router-dom";
import Banner from ".";


describe("Banner component",()=>{
    //Render de envio
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <Banner/>
                </MemoryRouter>
            </ThemeProvider>
        );
    };

    it("should render a normal banner",()=>{
        renderWithProviders();
        const title = screen.getByText("Quiénes Somos");
        expect(title).toBeInTheDocument();
    })
});