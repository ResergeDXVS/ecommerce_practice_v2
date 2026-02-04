import { useEffect, useState } from "react";

type GuideInfo = {
    id: string,
    state: string, 
}

type Information = {
    guides_total:number,
    guides__transit:number,
    guides__delivered:number,
}


const generateGuides = (): GuideInfo[] => {
  // Si no existe, devolvemos un array vacío
    const stored = localStorage.getItem("guideRecord") || "[]";
    const guideGuideRecord: GuideInfo[] = JSON.parse(stored);

    // Map correcto: devolvemos un objeto con las propiedades
    return guideGuideRecord.map(item => ({
        id: item.id,
        state: item.state,
    }));
};



const useFetchInformation = () => {
    const [informationState, setInformationState] = useState<Information>({
        guides_total:0,
        guides__transit:0,
        guides__delivered:0,
    });
    useEffect(()=>{
        const listGuide = generateGuides();
        if (listGuide.length>0){
            setInformationState({
                guides_total:listGuide.length,
                guides__transit:listGuide.filter(n => n.state === "intransit").length,
                guides__delivered:listGuide.filter(n => n.state === "delivered").length,
            });
        }else{
            setInformationState({
                guides_total:0,
                guides__transit:0,
                guides__delivered:0,
            });
        }
        
    },[]);
    return informationState;
}

export default useFetchInformation;