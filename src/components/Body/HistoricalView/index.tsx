import React, { Fragment, useEffect } from "react";
import { HistoricalBase, HistoricalTable, HistoricalTop } from "./styles";
import Historical from "./Historical";
import { formatDateTime, translateValue } from "../../../hooks/formatData";
import { useDispatch } from "react-redux";
import { fetchHistory } from "../../../slices/historySlice/historySlice";
import { HistoricalInfo } from "../../../store/status";
import { ASYNC_STATUS } from "../../../constants/asyncState";
import { useAppSelector } from "../../../store/store";
import { useParams } from "react-router-dom";



const HistoricalView = () => {
    const { idGuide } = useParams(); // viene como string
    const guideID = Number(idGuide); // lo conviertes a número si lo necesitas

    const {list,status,error} = useAppSelector(state => state.history);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchHistory(guideID) as any)
    },[]);

    if(status===ASYNC_STATUS.PENDING){
        return <div>Loading...</div>;
    }
    if(status===ASYNC_STATUS.REJECTED){
        return <div>Error:{error}</div>;
    }

    return(
        <Fragment>
            <HistoricalTop>
                <h2 id="historicalTitle">Hist&oacute;rico de la gu&iacute;a: <b>{guideID}</b></h2>
            </HistoricalTop>
            <HistoricalBase
                aria-labelledby="historicalTitle">
                <HistoricalTable>
                    <thead>
                        <tr>
                            <th><strong>Estado</strong></th>
                            <th><strong>Fecha de actualizaci&oacute;n</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item: HistoricalInfo) =>{
                                const {guide, new_status, datetime_created} = item;
                                return(
                                    <Historical
                                        key={guide} 
                                        new_status={translateValue(new_status)}
                                        datetime={formatDateTime(datetime_created)}/>
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