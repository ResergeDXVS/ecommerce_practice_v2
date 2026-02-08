import React, { useState } from "react";
import { FormBase, FormButtonSubmit, FormDecoration, FormFeedback, FormFieldset, FormInput, FormLabel, FormLine, FormSelect, FormStructure } from "./styles";
import { useDispatch } from "react-redux";
import { addGuide } from "../../../store/guidesSlice";
import { DELIVERED, FormState, GuideInfo, INTRANSIT, PENDING } from "../../../store/status";
import { useAppSelector } from "../../../store/store";



const Form = () => {
    const [submitted, setSubmitted] = useState<boolean|null>(null);
    const dispatch = useDispatch();
    const list_guides = useAppSelector(state => state.guides.guides);
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
        if (!form.id_guide ||
            !form.origin ||
            !form.destination ||
            !form.recipient ||
            !form.datetime ||
            !form.state) {
                setSubmitted(true);
            return;
        }
        console.log("envio de datos");
        const index = list_guides.find(p=>p.id===form.id_guide);
        if (index){
            alert(`El Registro de guía ${form.id_guide} ya existe, favor de revisar los datos.`);
            return;
        }
        const newGuide:GuideInfo = {
            id: form.id_guide,
            origin: form.origin.toUpperCase(), 
            destiny: form.destination.toUpperCase(), 
            recipient: form.recipient.toUpperCase(),
            dateCreate: form.datetime.toUpperCase(),
            state: form.state
        }
        dispatch(addGuide(newGuide));
        setForm({
            id_guide: "",
            origin: "",
            destination: "",
            recipient: "",
            datetime: "",
            state: "",
        });
        setSubmitted(null);
        alert(`Registro de guía ${form.id_guide} guardada correctamente.`);
        
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
                $invalid={submitted && !form.id_guide}

                />
                <FormFeedback
                    $invalid={submitted && !form.id_guide}
                    >Este campo es obligatorio.
                </FormFeedback>
            </FormLine>

            <FormLine>
                <FormLabel htmlFor="origin">Origen:</FormLabel>
                <FormInput
                id="origin"
                name="origin"
                type="text"
                value={form.origin}
                onChange={handleChange}
                $invalid={submitted && !form.origin}
                />
                <FormFeedback
                    $invalid={submitted && !form.origin}
                    >Por favor ingresa el origen.
                </FormFeedback>
            </FormLine>

            <FormLine>
                <FormLabel htmlFor="destination">Destino:</FormLabel>
                <FormInput
                id="destination"
                name="destination"
                type="text"
                value={form.destination}
                onChange={handleChange}
                $invalid={submitted && !form.destination}
                />
                <FormFeedback
                    $invalid={submitted && !form.destination}
                    >Por favor ingresa el destino.
                </FormFeedback>
            </FormLine>

            <FormLine>
                <FormLabel htmlFor="recipient">Destinatario:</FormLabel>
                <FormInput
                id="recipient"
                name="recipient"
                type="text"
                value={form.recipient}
                onChange={handleChange}
                $invalid={submitted && !form.recipient}
                />
                <FormFeedback
                    $invalid={submitted && !form.recipient}
                    >Por favor ingresa el destinatario.
                </FormFeedback>
            </FormLine>

            <FormLine>
                <FormLabel htmlFor="datetime">Fecha de creación:</FormLabel>
                <FormInput
                id="datetime"
                name="datetime"
                type="datetime-local"
                value={form.datetime}
                onChange={handleChange}
                $invalid={submitted && !form.datetime}
                />
                <FormFeedback
                    $invalid={submitted && !form.datetime}
                    >Por favor selecciona una fecha y hora.
                </FormFeedback>
            </FormLine>

            <FormLine>
                <FormLabel htmlFor="state">Selecciona el estado inicial</FormLabel>
                <FormSelect
                id="state"
                name="state"
                value={form.state}
                onChange={handleChange}
                $invalid={submitted && !form.state}
                >
                <option value="">-- Selecciona --</option>
                <option value={PENDING}>Pendiente</option>
                <option value={INTRANSIT}>En tránsito</option>
                <option value={DELIVERED}>Entregado</option>
                </FormSelect>
                <FormFeedback
                    $invalid={submitted && !form.state}
                >Debes seleccionar un estado.</FormFeedback>
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
