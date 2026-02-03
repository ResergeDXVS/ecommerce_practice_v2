import React from "react";
import { GuideBase, GuideTable, GuideTHead } from "./styles";
import Guide from "./Guide";
import { useNavigate } from "react-router-dom";

type Guide = {
    id_guide: number,
    origin: string,
    destination: string,
    recipient: string,
    datetime: string,
    state: string,
}

interface SearchResultProps {
    list:Guide[],
}

const GuideStructure = ({list}:SearchResultProps) => {
    const navigate = useNavigate();

    const updateRecord = (id_guide:number) =>{
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
                    list.map(data=>{
                        const {id_guide, origin, destination, recipient, datetime, state} = data;
                        return(
                            <Guide
                                id_guide={id_guide}
                                origin={origin}
                                destination={destination}
                                recipient={recipient}
                                datetime={datetime}
                                state={state}
                                update={()=>updateRecord(id_guide)}
                                historical={()=>navigate(`/guides/${id_guide}`)}
                            />
                        )
                    })
                }
            </tbody>
        </GuideBase>
    );
}
export default GuideStructure;