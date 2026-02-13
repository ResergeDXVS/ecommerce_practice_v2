import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { MemoryRouter } from "react-router-dom";
import Theme from "../../../../theme";
import Guide from ".";

const updateAction = jest.fn();
const historicalAction = jest.fn();

describe("Guide component",()=>{
    afterEach(() => {
		jest.clearAllMocks();
	});
    //Render de envio
    
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <table>
                        <tbody>
                            <Guide
                                id_guide="1"
                                origin="CDMX"
                                destination="TORREON"
                                recipient="ALAN JUAREZ"
                                datetime="2026-12-25T09:00:00"
                                state="pending"
                                update={updateAction}
                                historical={historicalAction}
                            />
                        </tbody>
                    </table>
                </MemoryRouter>
            </ThemeProvider>
        );
    };

    it("should render a guide record",()=>{
        renderWithProviders();
        const status = screen.getByText("PENDIENTE");
        expect(status).toBeInTheDocument();
        
    });

    it("should call update when clicking update button", () => {
        renderWithProviders();

        const button = screen.getByRole("button", {
            name: /actualizar estado/i
        });

        fireEvent.click(button);

        expect(updateAction).toHaveBeenCalledTimes(1);
    });

    it("should use a action for see the historical record",()=>{
        renderWithProviders();
        const button = screen.getByRole("button", {
            name: /ver historial/i
        });

        fireEvent.click(button);

        expect(historicalAction).toHaveBeenCalledTimes(1);
    });
});