import { useEffect, useState } from "react";
import generateHistoricalList from "./generateHistoricalGuide";

type HistoricalInfo = {
    guide_id: string,
    new_status: string,
    datetime: string,
}

type HistoricalList = {
    list: HistoricalInfo[],
}




const useFetchHistoricals = (id:string) => {
    const [historicalState, setHistoricalState] = useState<HistoricalList>({
        list:[],
    });

    useEffect(()=>{
        const listHistorical = generateHistoricalList();
        const list = listHistorical.filter(p => p.guide_id === id);
        setHistoricalState({list});
    },[id]);
    return historicalState;
}

export default useFetchHistoricals;