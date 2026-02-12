import React, { Fragment } from "react";
import { HistoricalBase, HistoricalTable, HistoricalTop } from "./styles";
import { useParams } from "react-router-dom";
import Historical from "./Historical";
import { formatDateTime, translateValue } from "../../../hooks/formatData";
import { useAppSelector } from "../../../store/store";



const HistoricalView = () => {
    const { idGuide } = useParams<{ idGuide: string }>();
    
    const historical = useAppSelector(state=>state.guides.historical);
    const list = historical.filter(history => history.guide_id === idGuide);
    return(
        <Fragment>
            <HistoricalTop>
                <h2>Hist&oacute;rico de la gu&iacute;a: <b>{idGuide}</b></h2>
            </HistoricalTop>
            <HistoricalBase>
                <HistoricalTable>
                    <thead>
                        <tr>
                            <th><strong>Estado</strong></th>
                            <th><strong>Fecha de actualizaci&oacute;n</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map( item =>{
                                const {new_status, datetime} = item;
                                return(
                                    <Historical
                                        new_status={translateValue(new_status)}
                                        datetime={formatDateTime(datetime)}/>
                                );
                            })
                        }
                    </tbody> 
                </HistoricalTable>
            </HistoricalBase>
        </Fragment>
    );
}

export default HistoricalView;