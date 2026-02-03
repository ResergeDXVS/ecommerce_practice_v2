import React from "react";
import { StatusInformation, StatusStructure } from "./styles";
import useFetchInformation from "../../../hooks/useFetchInformation";

const StatusView = () => {
    const { guides_total, guides__transit, guides__delivered } = useFetchInformation();
    return(
        <StatusStructure>
            <StatusInformation>
                <h3>Estado general de Gu&iacute;as</h3>
            </StatusInformation>
            <StatusInformation id="guides__total">
                <p>N&uacute;mero total de gu&iacute;as activas: <b>{guides_total}</b></p>
            </StatusInformation>
            <StatusInformation id="guides__transit">
                <p>Gu&iacute;as en tr&aacute;nsito: <b>{guides__transit}</b></p>
            </StatusInformation>
            <StatusInformation id="guides__delivered">
                <p>Gu&iacute;as entregadas: <b>{guides__delivered}</b></p>
            </StatusInformation>
        </StatusStructure>
    );
}

export default StatusView;