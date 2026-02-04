
/*Formateo de Fechas */
const formatDateTime = (dateString:string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };



/*Traducción de valores de estado*/
const translateValue = (state:string) => {
    const translations:Record<string,string> = {
        pending:"Pendiente",
        intransit:"En Transito",
        delivered:"Entregado",
    }
    console.log(state);
    return translations[state].toUpperCase() || state.toUpperCase();
}

export {
    formatDateTime,
    translateValue
}