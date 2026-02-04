import React, { useState } from "react";
import { FormBase, FormButtonSubmit, FormDecoration, FormFeedback, FormFieldset, FormInput, FormLabel, FormLine, FormSelect, FormStructure } from "./styles";
import generateGuides from "../../../hooks/generateGuides";
import generateHistoricalList from "../../../hooks/generateHistoricalGuide";

type FormState = {
  id_guide: string;
  origin: string;
  destination: string;
  recipient: string;
  datetime: string;
  state: string;
};

const Form = () => {
    const [form, setForm] = useState<FormState>({
        id_guide: "",
        origin: "",
        destination: "",
        recipient: "",
        datetime: "",
        state: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Traemos lo que ya existe en localStorage
        let guideRecord = generateGuides();
        let historicalRecord = generateHistoricalList();
        // Creamos el nuevo registro
        const newGuide = {
            id: form.id_guide,
            origin: form.origin.toUpperCase(),
            destiny: form.destination.toUpperCase(),
            recipient: form.recipient.toUpperCase(),
            dateCreate: form.datetime.toUpperCase(),
            state: form.state,
        };
        const Historical = {
            guide_id: form.id_guide,
            new_status: form.state,
            datetime: form.datetime,
        }
        // Lo agregamos al array
        guideRecord.push(newGuide);
        historicalRecord.push(Historical);
        // Guardamos en localStorage
        localStorage.setItem("guideRecord", JSON.stringify(guideRecord));
        localStorage.setItem("guideHistorical", JSON.stringify(historicalRecord));
        // Reiniciamos el formulario
        setForm({
            id_guide: "",
            origin: "",
            destination: "",
            recipient: "",
            datetime: "",
            state: "",
        });
    };

    return (
        <FormBase>
        <FormStructure onSubmit={handleSubmit}>
            <h2>Registro de guías</h2>
            <FormFieldset>
            <FormLine>
                <FormLabel htmlFor="id_guide">Número de guía:</FormLabel>
                <FormInput
                id="id_guide"
                name="id_guide"
                type="number"
                value={form.id_guide}
                onChange={handleChange}
                required
                />
                <FormFeedback>Este campo es obligatorio.</FormFeedback>
            </FormLine>

            <FormLine>
                <FormLabel htmlFor="origin">Origen:</FormLabel>
                <FormInput
                id="origin"
                name="origin"
                type="text"
                value={form.origin}
                onChange={handleChange}
                required
                />
                <FormFeedback>Por favor ingresa el origen.</FormFeedback>
            </FormLine>

            <FormLine>
                <FormLabel htmlFor="destination">Destino:</FormLabel>
                <FormInput
                id="destination"
                name="destination"
                type="text"
                value={form.destination}
                onChange={handleChange}
                required
                />
                <FormFeedback>Por favor ingresa el destino.</FormFeedback>
            </FormLine>

            <FormLine>
                <FormLabel htmlFor="recipient">Destinatario:</FormLabel>
                <FormInput
                id="recipient"
                name="recipient"
                type="text"
                value={form.recipient}
                onChange={handleChange}
                required
                />
                <FormFeedback>Por favor ingresa el destinatario.</FormFeedback>
            </FormLine>

            <FormLine>
                <FormLabel htmlFor="datetime">Fecha de creación:</FormLabel>
                <FormInput
                id="datetime"
                name="datetime"
                type="datetime-local"
                value={form.datetime}
                onChange={handleChange}
                required
                />
                <FormFeedback>Por favor selecciona una fecha y hora.</FormFeedback>
            </FormLine>

            <FormLine>
                <FormLabel htmlFor="state">Selecciona el estado inicial</FormLabel>
                <FormSelect
                id="state"
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                >
                <option value="">-- Selecciona --</option>
                <option value="pending">Pendiente</option>
                <option value="intransit">En tránsito</option>
                <option value="delivered">Entregado</option>
                </FormSelect>
                <FormFeedback>Debes seleccionar un estado.</FormFeedback>
            </FormLine>

            <FormLine>
                <FormButtonSubmit id="submit" type="submit" value="REGISTRAR" />
            </FormLine>
            </FormFieldset>
        </FormStructure>
        <FormDecoration>
            <img src="/img/icons/clipboard.png" alt="Registro" />
        </FormDecoration>
        </FormBase>
    );
};

export default Form;
