import React from "react";
import { GuideBase, GuideTable, GuideTHead } from "./styles";
import Guide from "./Guide";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/store";
import { updateGuide } from "../../../store/guidesSlice";



const GuideStructure = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const guides = useAppSelector(state => state.guides.guides);

    const updateGuideRecord = (id: string) => {
        dispatch(updateGuide(id));
    };

    return (
        <GuideBase>
            <div>
                <h3>Listado de Guías</h3>
            </div>
            <GuideTable>
                <GuideTHead>
                    <tr>
                        <th><strong>Número de guía</strong></th>
                        <th><strong>Estado actual</strong></th>
                        <th><strong>Destinatario</strong></th>
                        <th><strong>Origen</strong></th>
                        <th><strong>Destino</strong></th>
                        <th><strong>Fecha de última actualización</strong></th>
                        <th><strong>Acciones</strong></th>
                    </tr>
                </GuideTHead>
                    <tbody>
                    {
                        guides && (guides.map(data => {
                            const { id, origin, destiny, recipient, dateCreate, state } = data;
                            return (
                            <Guide
                                id_guide={id}
                                origin={origin}
                                destination={destiny}
                                recipient={recipient}
                                datetime={dateCreate}
                                state={state}
                                update={() => updateGuideRecord(id)}
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