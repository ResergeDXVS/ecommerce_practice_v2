
type HistoricalInfo = {
    guide_id: string,
    new_status: string,
    datetime: string,
}


const generateHistoricalList = (): HistoricalInfo[] => {
  // Si no existe, devolvemos un array vacío
    const stored = localStorage.getItem("guideHistorical") || "[]";
    const guideHistoricalRecord: HistoricalInfo[] = JSON.parse(stored);

    // Map correcto: devolvemos un objeto con las propiedades
    return guideHistoricalRecord.map(item => ({
        guide_id: item.guide_id,
        new_status: item.new_status,
        datetime: item.datetime
    }));
};

export default generateHistoricalList;