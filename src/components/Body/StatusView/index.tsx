import React, { useEffect } from "react";
import { StatusInformation, StatusStructure } from "./styles";
import { useAppSelector } from "../../../store/store";
import { useDispatch } from "react-redux";
import { fetchReport } from "../../../slices/guideSlice/guidesSlice";
import { useLocation } from "react-router-dom";


const StatusView = () => {
    const guides_report = useAppSelector(state => state.guides);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(fetchReport() as any);
    }, [location.pathname, dispatch]);


    
    return (
        <StatusStructure aria-labelledby="statusTitle">
            <StatusInformation>
                <h3 id="statusTitle">Estado general de Gu&iacute;as</h3>
            </StatusInformation>
            <StatusInformation id="guides__total">
                <p>N&uacute;mero total de gu&iacute;as activas: <b>{guides_report.guides_total}</b></p>
            </StatusInformation>
            <StatusInformation id="guides__transit">
                <p>Gu&iacute;as en tr&aacute;nsito: <b>{guides_report.guides_transit}</b></p>
            </StatusInformation>
            <StatusInformation id="guides__delivered">
                <p>Gu&iacute;as entregadas: <b>{guides_report.guides_delivered}</b></p>
            </StatusInformation>
        </StatusStructure>
    );
};

export default StatusView;
