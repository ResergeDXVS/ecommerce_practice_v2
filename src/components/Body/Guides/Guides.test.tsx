import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../../../theme";
import { MemoryRouter, useNavigate } from "react-router-dom";
import GuideStructure from ".";
import { useAppSelector } from "../../../store/store";


const mockDispatch = jest.fn();

jest.mock("../../../store/store", () => ({
    useAppSelector: jest.fn(),
}));

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
    useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => {
    const actual = jest.requireActual("react-router-dom");
    return {
        ...actual,
        useNavigate: jest.fn(),
    };
});


describe("Guides Structure component",()=>{
    //Render de envio
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <GuideStructure/>
                </MemoryRouter>
            </ThemeProvider>
        );
    };

    it("should render a guide structure",()=>{
        renderWithProviders();
        const title = screen.getByText("Listado de Guías");
        expect(title).toBeInTheDocument();
    });

    it("should render the guides information",()=>{
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
            guides: {
                guides:[
                    {
                        id:"121",
                        origin:"CDMX",
                        destiny:"TORREON",
                        recipient:"ALAN JUAREZ",
                        dateCreate:"2026-12-25T09:00:00",
                        state:"pending",
                    }
                ]
            }
            })
        );
        renderWithProviders();
        const title = screen.getByText("CDMX");
        expect(title).toBeInTheDocument();
    });

    it("should render and use of the update action",()=>{
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
            guides: {
                guides:[
                    {
                        id:"121",
                        origin:"CDMX",
                        destiny:"TORREON",
                        recipient:"ALAN JUAREZ",
                        dateCreate:"2026-12-25T09:00:00",
                        state:"pending",
                    }
                ]
            }
            })
        );
        renderWithProviders();
        const button = screen.getByRole("button", {
            name: /actualizar estado/i
        });

        fireEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it("should render and use the historical action", () => {
        const mockedSelector = useAppSelector as jest.Mock;

        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
                guides: {
                    guides: [
                        {
                            id: "121",
                            origin: "CDMX",
                            destiny: "TORREON",
                            recipient: "ALAN JUAREZ",
                            dateCreate: "2026-12-25T09:00:00",
                            state: "pending",
                        }
                    ]
                }
            })
        );

        const mockedUseNavigate = useNavigate as jest.Mock;
        const mockNavigate = jest.fn();

        mockedUseNavigate.mockReturnValue(mockNavigate);

        renderWithProviders();

        const button = screen.getByRole("button", {
            name: /ver historial/i
        });

        fireEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledWith("/guides/121");
    });

});