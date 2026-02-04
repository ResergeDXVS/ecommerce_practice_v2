import React, { useEffect, useState } from "react";
import { GuideBase, GuideTable, GuideTHead } from "./styles";
import Guide from "./Guide";
import { useNavigate } from "react-router-dom";
import { GuideInfo } from "../../../hooks/GuidesType";
import generateGuides from "../../../hooks/generateGuides";
import generateHistoricalList from "../../../hooks/generateHistoricalGuide";



const GuideStructure = () => {
    const navigate = useNavigate();
    const [guides, setGuides] = useState<GuideInfo[]>([]);

    // Cargar datos iniciales desde localStorage
    useEffect(() => {
        const stored = generateGuides();
        setGuides(stored);
    }, []);

    const updateRecord = (id_guide: string) => {
        const listGuide = generateGuides(); // array actual de guías
        let historicalRecord = generateHistoricalList(); // array actual de históricos

        const guide = listGuide.find(p => p.id === id_guide);
        const index = listGuide.findIndex(p => p.id === id_guide);

        if (!guide || index === -1) return;

        // Determinar nuevo estado
        let newStatus = guide.state;
        if (guide.state === "pending") {
        newStatus = "intransit";
        } else if (guide.state === "intransit") {
        newStatus = "delivered";
        }

        // Actualizar guía
        const updatedGuide = {
        ...guide,
        state: newStatus,
        dateCreate: new Date().toISOString(),
        };

        // Crear histórico
        const Historical = {
        guide_id: guide.id,
        new_status: newStatus,
        datetime: new Date().toISOString(),
        };


        listGuide[index] = updatedGuide;
        historicalRecord.push(Historical);

        localStorage.setItem("guideRecord", JSON.stringify(listGuide));
        localStorage.setItem("guideHistorical", JSON.stringify(historicalRecord));

        setGuides(listGuide);
    };






    
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
                <tbody>
                    {
                        guides.map( data =>{
                            const {id, origin, destiny, recipient, dateCreate, state} = data;
                            console.log({id, origin, destiny, recipient, dateCreate, state});
                            return(
                                <Guide
                                    id_guide={id}
                                    origin={origin}
                                    destination={destiny}
                                    recipient={recipient}
                                    datetime={dateCreate}
                                    state={state}
                                    update={()=>updateRecord(id)}
                                    historical={()=>navigate(`/guides/${id}`)}
                                />
                            )
                        })
                    }
                </tbody>
            </GuideTable>
            
        </GuideBase>
    );
}
export default GuideStructure;