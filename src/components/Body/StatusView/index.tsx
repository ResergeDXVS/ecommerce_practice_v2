import React, { useEffect } from "react";
import { StatusInformation, StatusStructure } from "./styles";
import { useAppSelector } from "../../../store/store";
import { useDispatch } from "react-redux";
import { fetchReport } from "../../../slices/guideSlice/guidesSlice";
import { useLocation } from "react-router-dom";
import { ASYNC_STATUS } from "../../../constants/asyncState";
import Theme from "../../../theme";
import { CircularProgress } from "react-loader-spinner";


const StatusView = () => {
    const {guides_total,guides_transit,guides_delivered,status} = useAppSelector(state => state.guides);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(fetchReport() as any);
    }, [location.pathname, dispatch]);

    if(status===ASYNC_STATUS.PENDING){
        return(
            <StatusStructure>
                <CircularProgress
                    height="100"
                    width="100"
                    color={Theme.colors.white}
                    ariaLabel="circular-progress-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                    strokeWidth={2}
                    animationDuration={1}
                />
            </StatusStructure>
        );
    }
    else if(status===ASYNC_STATUS.REJECTED){
        return(
            <StatusStructure>
                <StatusInformation>
                    <h3>Error de carga de información</h3>
                </StatusInformation>
            </StatusStructure>
        );
    }else{
        return (
            <StatusStructure aria-labelledby="statusTitle">
                <StatusInformation>
                    <h3 id="statusTitle">Estado general de Gu&iacute;as</h3>
                </StatusInformation>
                <StatusInformation id="guides__total">
                    <p>N&uacute;mero total de gu&iacute;as activas: <b>{guides_total}</b></p>
                </StatusInformation>
                <StatusInformation id="guides__transit">
                    <p>Gu&iacute;as en tr&aacute;nsito: <b>{guides_transit}</b></p>
                </StatusInformation>
                <StatusInformation id="guides__delivered">
                    <p>Gu&iacute;as entregadas: <b>{guides_delivered}</b></p>
                </StatusInformation>
            </StatusStructure>
        );
    }
    
   
};

export default StatusView;
