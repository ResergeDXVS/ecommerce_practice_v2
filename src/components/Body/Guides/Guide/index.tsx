import React from "react";
import { GuideButton, GuideButtons, GuideCell, GuideRow } from "./styles";

interface GuideProps {
    id_guide: number,
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
            <GuideCell>{state}</GuideCell>
            <GuideCell>{origin}</GuideCell>
            <GuideCell>{recipient}</GuideCell>
            <GuideCell>{destination}</GuideCell>
            <GuideCell>{datetime}</GuideCell>
            <GuideButtons>
                <GuideButton
                    onClick={update}>
                    <p>Actualizar Estado</p>
                    <img src="img/icons/update.svg"/>
                </GuideButton>
                <GuideButton
                    onClick={historical}>
                    <p>Ver Historial</p>
                    <img src="img/icons/historical.svg"/>
                </GuideButton>
            </GuideButtons>
        </GuideRow>
    );
}

export default Guide;