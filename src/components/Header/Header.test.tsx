import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { MemoryRouter } from "react-router-dom";
import Theme from "../../theme";
import Header from ".";



describe("Header component",()=>{
    //Render de envio
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <Header/>
                </MemoryRouter>
            </ThemeProvider>
        );
    };

    it("should render a normal header",()=>{
        renderWithProviders();
        const title = screen.getByText("Registro de Guias");
        expect(title).toBeInTheDocument();
    })
});