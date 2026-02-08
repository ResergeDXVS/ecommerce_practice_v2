import { GuideInfo } from "../store/status";

const generateGuides = (): GuideInfo[] => {
    const stored = localStorage.getItem("guideRecord") || "[]";
    const guideGuideRecord: GuideInfo[] = JSON.parse(stored);

    return guideGuideRecord.map(item => ({
        id: item.id,
        origin: item.origin,
        destiny: item.destiny,
        recipient: item.recipient,
        dateCreate: item.dateCreate,
        state: item.state,
    }));
};

export default generateGuides;