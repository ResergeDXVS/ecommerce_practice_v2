import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../../../theme";
import Form from ".";
import { useAppSelector } from "../../../store/store";
import { addGuide } from "../../../store/guidesSlice";

// Mocks
const mockDispatch = jest.fn();
const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

jest.mock("../../../store/store", () => ({
    useAppSelector: jest.fn(),
}));

jest.mock("react-redux", () => ({
    useDispatch: () => mockDispatch,
}));

jest.mock("../../../store/guidesSlice", () => ({
    addGuide: jest.fn(),
}));

describe("Form component", () => {

    beforeEach(() => {
        jest.clearAllMocks();
        (useAppSelector as jest.Mock).mockImplementation((selectorFn: any) =>
            selectorFn({ guides: { guides: [] } })
        );
    });

    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <Form />
            </ThemeProvider>
        );
    };

    it("should render all form fields", () => {
        renderWithProviders();

        expect(screen.getByLabelText(/Número de guía/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Origen/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Destino/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Destinatario/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Fecha de creación/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Selecciona el estado/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /REGISTRAR/i })).toBeInTheDocument();
    });

    it("should show validation errors when submitted empty", () => {
        renderWithProviders();

        const submitBtn = screen.getByRole("button", { name: /REGISTRAR/i });
        fireEvent.click(submitBtn);

        expect(screen.getByText(/Este campo es obligatorio/i)).toBeInTheDocument();
        expect(screen.getByText(/Por favor ingresa el origen/i)).toBeInTheDocument();
        expect(screen.getByText(/Por favor ingresa el destino/i)).toBeInTheDocument();
        expect(screen.getByText(/Por favor ingresa el destinatario/i)).toBeInTheDocument();
        expect(screen.getByText(/Por favor selecciona una fecha y hora/i)).toBeInTheDocument();
        expect(screen.getByText(/Debes seleccionar un estado/i)).toBeInTheDocument();
    });

    it("should update input values on change", () => {
        renderWithProviders();

        const idInput = screen.getByLabelText(/Número de guía/i) as HTMLInputElement;
        fireEvent.change(idInput, { target: { value: "123" } });
        expect(idInput.value).toBe("123");

        const originInput = screen.getByLabelText(/Origen/i) as HTMLInputElement;
        fireEvent.change(originInput, { target: { value: "CDMX" } });
        expect(originInput.value).toBe("CDMX");

        const stateSelect = screen.getByLabelText(/Selecciona el estado/i) as HTMLSelectElement;
        fireEvent.change(stateSelect, { target: { value: "pending" } });
        expect(stateSelect.value).toBe("pending");
    });

    it("should dispatch addGuide on valid submit", () => {
        renderWithProviders();

        fireEvent.change(screen.getByLabelText(/Número de guía/i), { target: { value: "101" } });
        fireEvent.change(screen.getByLabelText(/Origen/i), { target: { value: "CDMX" } });
        fireEvent.change(screen.getByLabelText(/Destino/i), { target: { value: "TORREON" } });
        fireEvent.change(screen.getByLabelText(/Destinatario/i), { target: { value: "ALAN" } });
        fireEvent.change(screen.getByLabelText(/Fecha de creación/i), { target: { value: "2026-12-25T09:00" } });
        fireEvent.change(screen.getByLabelText(/Selecciona el estado/i), { target: { value: "pending" } });

        fireEvent.click(screen.getByRole("button", { name: /REGISTRAR/i }));

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(addGuide).toHaveBeenCalledTimes(1);
        expect(mockAlert).toHaveBeenCalledWith(
            expect.stringContaining("Registro de guía 101 guardada correctamente")
        );
    });

    it("should alert if guide already exists", () => {
        // Mock existing guide
        (useAppSelector as jest.Mock).mockImplementation((selectorFn: any) =>
            selectorFn({ guides: { guides: [{ id: "101" }] } })
        );

        renderWithProviders();

        fireEvent.change(screen.getByLabelText(/Número de guía/i), { target: { value: "101" } });
        fireEvent.change(screen.getByLabelText(/Origen/i), { target: { value: "CDMX" } });
        fireEvent.change(screen.getByLabelText(/Destino/i), { target: { value: "TORREON" } });
        fireEvent.change(screen.getByLabelText(/Destinatario/i), { target: { value: "ALAN" } });
        fireEvent.change(screen.getByLabelText(/Fecha de creación/i), { target: { value: "2026-12-25T09:00" } });
        fireEvent.change(screen.getByLabelText(/Selecciona el estado/i), { target: { value: "pending" } });

        fireEvent.click(screen.getByRole("button", { name: /REGISTRAR/i }));

        expect(mockAlert).toHaveBeenCalledWith(
            expect.stringContaining("El Registro de guía 101 ya existe")
        );

        // No dispatch should happen
        expect(mockDispatch).not.toHaveBeenCalled();
    });
});
