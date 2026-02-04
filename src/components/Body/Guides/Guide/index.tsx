import React from "react";
import { GuideButton, GuideButtons, GuideCell, GuideRow } from "./styles";
import { formatDateTime, translateValue } from "../../../../hooks/formatData";

interface GuideProps {
    id_guide: string,
    origin: string,
    destination: string,
    recipient: string,
    datetime: string,
    state: string,
    update: any,
    historical: any,
}


const Guide = ({id_guide, origin, destination, recipient, datetime, state, update, historical}: GuideProps) =>{
    return(
        <GuideRow>
            <GuideCell>{id_guide}</GuideCell>
            <GuideCell>{translateValue(state)}</GuideCell>
            <GuideCell>{origin}</GuideCell>
            <GuideCell>{recipient}</GuideCell>
            <GuideCell>{destination}</GuideCell>
            <GuideCell>{formatDateTime(datetime)}</GuideCell>
            <GuideButtons>
                {
                    state!=="delivered" &&
                    (<GuideButton
                    onClick={update}>
                        <p>Actualizar Estado</p>
                        <img 
                            src="/img/icons/update.svg"
                            alt="Actualizar Estado"/>
                    </GuideButton>)
                }
                <GuideButton
                    onClick={historical}>
                    <p>Ver Historial</p>
                    <img 
                        src="/img/icons/historical.svg"
                        alt="Ver Historial"/>
                </GuideButton>
            </GuideButtons>
        </GuideRow>
    );
}

export default Guide;