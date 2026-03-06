import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../../../theme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../../store/store";
import HistoricalView from ".";

jest.mock("../../../store/store", () => ({
    useAppSelector: jest.fn(),
}));

describe("HistoricalView component", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const renderWithProviders = (initialPath: string) => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter initialEntries={[initialPath]}>
                    <Routes>
                        <Route 
                            path="/guides/:idGuide"
                            element={<HistoricalView/>}
                        />
                    </Routes>
                </MemoryRouter>
            </ThemeProvider>
        );
    };

    it("should render the guide ID in the header", () => {
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
                guides: {
                    historical: [
                        {
                            guide_id: "301",
                            new_status: "intransit",
                            datetime: "2026-12-25T09:00:00",
                        }
                    ]
                }
            })
        );

        renderWithProviders("/guides/301");

        const title = screen.getByRole("heading", { level: 2 });
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent("Histórico de la guía: 301");
    });

    it("should render the historical status information", () => {
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
                guides: {
                    historical: [
                        {
                            guide_id: "121",
                            new_status: "intransit",
                            datetime: "2026-12-25T09:00:00",
                        }
                    ]
                }
            })
        );

        renderWithProviders("/guides/121");

        const status = screen.getByText("EN TRANSITO");
        expect(status).toBeInTheDocument();
    });

});
