import React from "react";
import { StatusInformation, StatusStructure } from "./styles";

const StatusView = () => {
    return(
        <StatusStructure>
            <StatusInformation>
                <h3>Estado general de Gu&iacute;as</h3>
            </StatusInformation>
            <StatusInformation id="guides__total">
                <p>N&uacute;mero total de gu&iacute;as activas&colon; <b>15,320</b></p>
            </StatusInformation>
            <StatusInformation id="guides__transit">
                <p>Gu&iacute;as en tr&aacute;nsito&colon; <b>9,565</b></p>
            </StatusInformation>
            <StatusInformation id="guides__delivered">
                <p>Gu&iacute;as entregadas&colon; <b>5,755</b></p>
            </StatusInformation>
        </StatusStructure>
    );
}

export default StatusView;