import React from "react";
import { GuideBase, GuideTable, GuideTHead } from "./styles";
import Guide from "./Guide";
import { useNavigate } from "react-router-dom";
import useFetchGuides from "../../../hooks/useFetchGuides";

type Guide = {
    id: string,
    origin: string, 
    destiny: string, 
    recipient: string,
    dateCreate: string, 
    state: string, 
}



const GuideStructure = () => {
    const navigate = useNavigate();
    const { list } = useFetchGuides();

    const formatDateTime = (dateString:string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };



        /*Traducción de valores de estado*/
    const translateValue = (state:string) => {
        const translations:Record<string,string> = {
            pending:"Pendiente",
            intransit:"En Transito",
            delivered:"Entregado",
        }
        console.log(state);
        return translations[state].toUpperCase() || state.toUpperCase();
    }


    const updateRecord = (id_guide:string) =>{
        console.log(id_guide);
    }
    
    return(
        <GuideBase>
            <div>
                <h3>Listado de Gu&iacute;as</h3>
            </div>
            <GuideTable>
                <GuideTHead>
                    <tr>
                        <th><strong>N&uacute;mero de gu&iacute;a</strong></th>
                        <th><strong>Estado actual</strong></th>
                        <th><strong>Destinatario</strong></th>
                        <th><strong>Origen</strong></th>
                        <th><strong>Destino</strong></th>
                        <th><strong>Fecha de ultima actualizaci&oacute;n</strong></th>
                        <th><strong>Acciones</strong></th>
                    </tr>
                </GuideTHead>
            </GuideTable>
            <tbody>
                {
                    list.map( data =>{
                        const {id, origin, destiny, recipient, dateCreate, state} = data;
                        return(
                            <Guide
                                id_guide={id}
                                origin={origin}
                                destination={destiny}
                                recipient={recipient}
                                datetime={formatDateTime(dateCreate)}
                                state={translateValue(state)}
                                update={()=>updateRecord(id)}
                                historical={()=>navigate(`/guides/${id}`)}
                            />
                        )
                    })
                }
            </tbody>
        </GuideBase>
    );
}
export default GuideStructure;