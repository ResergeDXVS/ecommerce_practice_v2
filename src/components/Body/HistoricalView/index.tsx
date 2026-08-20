import React, { Fragment, useEffect } from "react";
import { HistoricalBase, HistoricalTable, HistoricalTop, HistoricalProgress } from "./styles";
import Historical from "./Historical";
import { formatDateTime, translateValue } from "../../../hooks/formatData";
import { useDispatch } from "react-redux";
import { fetchHistory } from "../../../slices/historySlice/historySlice";
import { HistoricalInfo } from "../../../store/status";
import { ASYNC_STATUS } from "../../../constants/asyncState";
import { useAppSelector } from "../../../store/store";
import { useParams } from "react-router-dom";
import { CircularProgress } from "react-loader-spinner";
import Theme from "../../../theme";



const HistoricalView = () => {
    const { idGuide } = useParams();
    const guideID = Number(idGuide);

    const {list,status} = useAppSelector(state => state.history);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchHistory(guideID) as any)
    },[dispatch,guideID]);

    if(status===ASYNC_STATUS.PENDING){
        return(
            <Fragment>
                <HistoricalTop>
                    <h2>Cargando...</h2>
                </HistoricalTop>
                <HistoricalProgress>
                    <CircularProgress
                        height="100"
                        width="100"
                        color={Theme.colors.secondary}
                        ariaLabel="circular-progress-loading"
                        wrapperStyle={{}}
                        wrapperClass="wrapper-class"
                        visible={true}
                        strokeWidth={2}
                        animationDuration={1}
                    />
                </HistoricalProgress>
            </Fragment>
        );

    }
    else if(status===ASYNC_STATUS.REJECTED){
        return(
            <Fragment>
                <HistoricalTop>
                    <h2>Error de carga</h2>
                </HistoricalTop>
            </Fragment>
        );
    }
    else{
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
    
}

export default HistoricalView;