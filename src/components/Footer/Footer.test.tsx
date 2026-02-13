import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { MemoryRouter } from "react-router-dom";
import Theme from "../../theme";
import Footer from ".";


describe("Footer component",()=>{
    //Render de envio
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <Footer/>
                </MemoryRouter>
            </ThemeProvider>
        );
    };

    it("should render a normal footer",()=>{
        renderWithProviders();
        const title = screen.getByText("Facebook");
        expect(title).toBeInTheDocument();
    })
});