import { useEffect, useState } from "react";

type GuideInfo = {
    id: string,
    origin: string, 
    destiny: string, 
    recipient: string,
    dateCreate: string, 
    state: string, 
}

type GuideList = {
    list: GuideInfo[],
}

const generateGuideList = (): GuideInfo[] => {
  // Si no existe, devolvemos un array vacío
    const stored = localStorage.getItem("guideRecord") || "[]";
    const guideGuideRecord: GuideInfo[] = JSON.parse(stored);

    // Map correcto: devolvemos un objeto con las propiedades
    return guideGuideRecord.map(item => ({
        id: item.id,
        origin: item.origin,
        destiny: item.destiny,
        recipient: item.recipient,
        dateCreate: item.dateCreate,
        state: item.state,
    }));
};



const useFetchGuides = () => {
    const [GuideState, setGuideState] = useState<GuideList>({
        list:[],
    });
    useEffect(()=>{
        const listGuide = generateGuideList();
        setGuideState({list:listGuide});
    },[]);
    return GuideState;
}

export default useFetchGuides;