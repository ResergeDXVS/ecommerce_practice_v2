import React from "react";
import { HistoricalBase, HistoricalTable, HistoricalTop } from "./styles";
import { useParams } from "react-router-dom";
import useFetchHistoricals from "../../../hooks/useFetchHistoricals";
import Historical from "./Historical";



const HistoricalView = () => {
    const { idGuide } = useParams<{ idGuide: string }>();
    
    const { list } = useFetchHistoricals(idGuide ?? "");

    return(
        <HistoricalBase>
            <HistoricalTop>
                <h2>Hist&oacute;rico de la gu&iacute;a: <b>0</b></h2>
            </HistoricalTop>
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
                                    new_status={new_status}
                                    datetime={datetime}/>
                            );
                        })
                    }
                </tbody> 
            </HistoricalTable>
        </HistoricalBase>
    );
}

export default HistoricalView;