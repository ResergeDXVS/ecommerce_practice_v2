import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { MemoryRouter } from "react-router-dom";
import Theme from "../../../../theme";
import Historical from ".";



describe("Historical component",()=>{
    //Render de envio
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <table>
                        <tbody>
                            <Historical
                            new_status="intransit"
                            datetime="01:01:01"/>
                        </tbody>
                    </table>
                </MemoryRouter>
            </ThemeProvider>
        );
    };

    it("should render a historical record",()=>{
        renderWithProviders();
        const status = screen.getByText("intransit");
        expect(status).toBeInTheDocument();
        const date = screen.getByText("01:01:01");
        expect(status).toBeInTheDocument();
    })
});