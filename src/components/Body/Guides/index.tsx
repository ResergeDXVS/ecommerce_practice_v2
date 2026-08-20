import React, { useEffect } from "react";
import { GuideBase, GuideTable, GuideTHead } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/store";
import { fetchGuide, putGuide } from "../../../slices/guideSlice/guidesSlice";
import { GuideInfo } from "../../../store/status";
import Guide from "./Guide";


const GuideStructure = () => {
    const navigate = useNavigate();
    const {guides,status,error}=useAppSelector(state => state.guides);
    const dispatch = useDispatch();

    const updateGuideRecord = (guide:GuideInfo)=>{
        let new_status="";
        if(guide.status === "pending"){
            new_status = "intransit";
        }else if(guide.status === "intransit"){
            new_status = "delivered";
        }
        const new_guide: GuideInfo = {
            id:guide.id,
            id_guide: guide.id_guide,
            origin: guide.origin, 
            destiny: guide.destiny, 
            recipient: guide.recipient,
            status: new_status,
            datetime_created: guide.datetime_created,
            datetime_updated: guide.datetime_updated
        }
        dispatch(putGuide(new_guide) as any);
    }
    useEffect(() => {
        dispatch(fetchGuide() as any);
    }, [dispatch]);

    return (
        <GuideBase aria-labelledby="guideTitle">
            <div>
                <h3 id="guideTitle">Listado de Guías</h3>
            </div>
            <GuideTable>
                <GuideTHead>
                    <tr>
                        <th><strong>Número de guía</strong></th>
                        <th><strong>Estado actual</strong></th>
                        <th><strong>Origen</strong></th>
                        <th><strong>Destino</strong></th>
                        <th><strong>Destinatario</strong></th>
                        <th><strong>Fecha de última actualización</strong></th>
                        <th><strong>Acciones</strong></th>
                    </tr>
                </GuideTHead>
                    <tbody>
                    {
                        guides && (guides.map(data => {
                            const { id, id_guide, origin, destiny, recipient, datetime_updated, status } = data;
                            return (
                            <Guide
                                key={id}
                                id_guide={id_guide}
                                origin={origin}
                                destination={destiny}
                                recipient={recipient}
                                datetime={datetime_updated ?? ""}
                                state={status}
                                update={() => updateGuideRecord(data)}
                                historical={() => navigate(`/guides/${id}`)}
                            />
                            );
                        }))
                    }
                    </tbody>
            </GuideTable>
        </GuideBase>
    );
};

export default GuideStructure;