import React from "react";
import { StatusInformation, StatusStructure } from "./styles";
import { useAppSelector } from "../../../store/store";

const StatusView = () => {
    const guides_total = useAppSelector(state => state.guides.guides_total);
    const guides__transit = useAppSelector(state => state.guides.guides__transit);
    const guides__delivered = useAppSelector(state => state.guides.guides__delivered);

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