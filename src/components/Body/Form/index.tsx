import React, { useState } from "react";
import { FormBase, FormButtonSubmit, FormDecoration, FormFeedback, FormFieldset, FormInput, FormLabel, FormLine, FormMessages, FormSelect, FormStructure } from "./styles";
import { useDispatch } from "react-redux";
import { DELIVERED, GuideInfo, INTRANSIT, PENDING } from "../../../store/status";
import { createGuide } from "../../../slices/formSlice/formSlice";
import { ASYNC_STATUS } from "../../../constants/asyncState";
import { useAppSelector } from "../../../store/store";




const Form = () => {
    const [submitted, setSubmitted] = useState<boolean|null>(null);
    const dispatch = useDispatch();
    const { status } = useAppSelector(state=> state.guides);

    const [form, setForm] = useState({
        id_guide: "",
        origin: "",
        destiny: "",
        recipient: "",
        datetime_created: "",
        status: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.id_guide ||
            !form.origin ||
            !form.destiny ||
            !form.recipient ||
            !form.datetime_created ||
            !form.status) {
                setSubmitted(true);
            return;
        }
        const newGuide:GuideInfo = {
            id_guide: form.id_guide,
            origin: form.origin.toUpperCase(), 
            destiny: form.destiny.toUpperCase(), 
            recipient: form.recipient.toUpperCase(),
            datetime_created: form.datetime_created.toUpperCase(),
            datetime_updated: form.datetime_created.toUpperCase(),
            status: form.status
        }
        console.log(newGuide);
        dispatch(createGuide(newGuide) as any);
        setForm({
            id_guide: "",
            origin: "",
            destiny: "",
            recipient: "",
            datetime_created: "",
            status: "",
        });
        setSubmitted(null);
    };

    return (
        <FormBase aria-labelledby="recordTitle">
            <FormStructure onSubmit={handleSubmit}>
                <h2 id="recordTitle">Registro de guías</h2>
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
                    aria-label="Ingresá el número de guía"
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
                    aria-label="Ingresa el lugar de origen del paquete"
                    />
                    <FormFeedback
                        $invalid={submitted && !form.origin}
                        >Por favor ingresa el origen.
                    </FormFeedback>
                </FormLine>

                <FormLine>
                    <FormLabel htmlFor="destiny">Destino:</FormLabel>
                    <FormInput
                    id="destiny"
                    name="destiny"
                    type="text"
                    value={form.destiny}
                    onChange={handleChange}
                    $invalid={submitted && !form.destiny}
                    aria-label="Ingresa el lugar de destino del paquete"
                    />
                    <FormFeedback
                        $invalid={submitted && !form.destiny}
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
                    aria-label="Ingresa el nombre del destinatario"
                    />
                    <FormFeedback
                        $invalid={submitted && !form.recipient}
                        >Por favor ingresa el destinatario.
                    </FormFeedback>
                </FormLine>

                <FormLine>
                    <FormLabel htmlFor="datetime_created">Fecha de creación:</FormLabel>
                    <FormInput
                    id="datetime_created"
                    name="datetime_created"
                    type="datetime-local"
                    value={form.datetime_created}
                    onChange={handleChange}
                    $invalid={submitted && !form.datetime_created}
                    aria-label="Ingresa la fecha de creación del registro del paquete"
                    />
                    <FormFeedback
                        $invalid={submitted && !form.datetime_created}
                        >Por favor selecciona una fecha y hora.
                    </FormFeedback>
                </FormLine>

                <FormLine>
                    <FormLabel htmlFor="status">Selecciona el estado inicial</FormLabel>
                    <FormSelect
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    $invalid={submitted && !form.status}
                    aria-label="Selecciona el estado inicial del paquete"
                    
                    >
                    <option value="" aria-label="Sin seleccion del estado">-- Selecciona --</option>
                    <option value={PENDING} aria-label="Estado pendiente del paquete">Pendiente</option>
                    <option value={INTRANSIT} aria-label="Paquete en transito de envio">En tránsito</option>
                    <option value={DELIVERED} aria-label="Paquete entregado">Entregado</option>
                    </FormSelect>
                    <FormFeedback
                        $invalid={submitted && !form.status}
                    >Debes seleccionar un estado.</FormFeedback>
                </FormLine>

                <FormLine>
                    <FormButtonSubmit 
                        aria-label="Enviar información del paquete para registrar"
                        id="submit" 
                        type="submit" 
                        value="REGISTRAR" />
                </FormLine>
                </FormFieldset>
                <FormMessages>
                    {status === ASYNC_STATUS.PENDING && <p>Guardando guía...</p>}
                    {status === ASYNC_STATUS.FULFILLED && <p>Guía registrada correctamente.</p>}
                    {status === ASYNC_STATUS.REJECTED && <p style={{color:"red"}}> Error en registro. Intentelo de nuevo.</p>}
                </FormMessages>

                
            </FormStructure>
            
            <FormDecoration>
                <img
                    aria-label="Icono decorativo del registro" 
                    src="/img/icons/clipboard.png" 
                    alt="Registro" />
            </FormDecoration>
        </FormBase>
    );
};

export default Form;
