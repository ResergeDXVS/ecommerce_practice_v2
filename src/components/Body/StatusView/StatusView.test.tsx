import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import Theme from "../../../theme";
import StatusView from ".";
import { useAppSelector } from "../../../store/store";


jest.mock("../../../store/store", () => ({
    useAppSelector: jest.fn(),
}));

describe("StatusView component",()=>{
    afterEach(() => {
		jest.clearAllMocks();
	});

    //Render de envio
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <StatusView/>
                </MemoryRouter>
            </ThemeProvider>
        );
    };

    it("should render the status information from the guides",()=>{
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
                guides:{
                    guides_total:5,
                    guides__transit:7,
                    guides__delivered:12,
                } 
            })
        );
        renderWithProviders();
        const information01 = screen.getByText("Número total de guías activas:").firstElementChild?.textContent;
        expect(information01).toBe("5");
        const information02 = screen.getByText("Guías en tránsito:").firstElementChild?.textContent;
        expect(information02).toBe("7");
        const information03 = screen.getByText("Guías entregadas:").firstElementChild?.textContent;
        expect(information03).toBe("12");
    })
});