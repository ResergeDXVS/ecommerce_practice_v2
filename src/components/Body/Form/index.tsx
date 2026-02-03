import React, { Fragment } from "react";
import { FormBase, FormButtonSubmit, FormDecoration, FormFeedback, FormFieldset, FormInput, FormLabel, FormLine, FormSelect, FormStructure } from "./styles";
const Form = () => {
    return (
        <FormBase>
            <FormStructure>
                <h2>Registro de guías</h2>
                <FormFieldset>
                    <FormLine>
                        <FormLabel htmlFor="id_guide">Número de guía:</FormLabel>
                        <FormInput id="id_guide" name="id_guide" type="number" required></FormInput>
                        <FormFeedback>Este campo es obligatorio.</FormFeedback>
                    </FormLine>
                    <FormLine>
                        <FormLabel htmlFor="origin">Origen:</FormLabel>
                        <FormInput id="origin" name="origin" type="text" required></FormInput>
                        <FormFeedback>Por favor ingresa el origen.</FormFeedback>
                    </FormLine>
                    <FormLine>
                        <FormLabel htmlFor="destination">Destino:</FormLabel>
                        <FormInput id="destination" name="destination" type="text" required></FormInput>
                        <FormFeedback>Por favor ingresa el destino.</FormFeedback>
                    </FormLine>
                    <FormLine>
                        <FormLabel htmlFor="recipient">Destinatario:</FormLabel>
                        <FormInput id="recipient" name="recipient" type="text" required></FormInput>
                        <FormFeedback>Por favor ingresa el destinatario.</FormFeedback>
                    </FormLine>
                    <FormLine>
                        <FormLabel htmlFor="datetime">Fecha de creación:</FormLabel>
                        <FormInput id="datetime" name="datetime" type="datetime-local" required></FormInput>
                        <FormFeedback>Por favor selecciona una fecha y hora.</FormFeedback>
                    </FormLine>
                    <FormLine>
                        <FormLabel htmlFor="state">Selecciona el estado inicial</FormLabel>
                        <FormSelect>
                            <option value="">-- Selecciona --</option>
                            <option value="pending">Pendiente</option>
                            <option value="intransit">En tránsito</option>
                            <option value="delivered">Entregado</option>
                        </FormSelect>
                        <FormFeedback>Debes seleccionar un estado.</FormFeedback>
                    </FormLine>
                    <FormLine>
                        <FormButtonSubmit id="submit" type="submit" value="REGISTRAR"/>
                    </FormLine>
                </FormFieldset>
            </FormStructure>
            <FormDecoration>
                <img src="/img/icons/clipboard.png" alt="Registro"></img>
            </FormDecoration>
        </FormBase>
    );
}

export default Form;