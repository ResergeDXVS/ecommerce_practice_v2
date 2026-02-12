import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generateGuides from "../hooks/generateGuides";
import { DELIVERED, GuideInfo, HistoricalInfo, INTRANSIT, PENDING } from "./status";
import generateHistoricalList from "../hooks/generateHistoricalGuide";

export interface GuideState {
    guides:GuideInfo[],
    historical:HistoricalInfo[],
    guides_total:number,
    guides__transit:number,
    guides__delivered:number,
}
const listGuides = generateGuides();
const listHistorical = generateHistoricalList();
const initialState: GuideState = {
    guides:listGuides,
    historical:listHistorical,
    guides_total:listGuides.length,
    guides__transit:listGuides.filter(n => n.state === INTRANSIT).length,
    guides__delivered:listGuides.filter(n => n.state === DELIVERED).length,
}


const guideSlice = createSlice({
    name:"guides",
    initialState,
    reducers:{
        addGuide: (state,action:PayloadAction<GuideInfo>) => {
            

            const Historical = {
                guide_id: action.payload.id,
                new_status: action.payload.state,
                datetime: action.payload.dateCreate,
            }
            console.log("Efsdfdsf");
            state.guides.push(action.payload);
            state.historical.push(Historical);
            state.guides_total = state.guides.length;
            state.guides__transit = state.guides.filter(n => n.state === INTRANSIT).length;
            state.guides__delivered = state.guides.filter(n => n.state === DELIVERED).length;
            
        },
        updateGuide: (state, action:PayloadAction<string>) => {
            console.log("asdasdad");
            const guide = state.guides.find((guide:GuideInfo) => guide.id === action.payload);
            console.log("ACTUALIZAR", guide);
            if (guide){
                if (guide.state === PENDING) {
                    guide.state = INTRANSIT;
                } else if (guide.state === INTRANSIT) {
                    guide.state = DELIVERED;
                }
                const Historical:HistoricalInfo = {
                    guide_id: guide.id,
                    new_status: guide.state,
                    datetime: new Date().toISOString(),
                }
                state.historical.push(Historical);
                state.guides_total = state.guides.length;
                state.guides__transit = state.guides.filter(n => n.state === INTRANSIT).length;
                state.guides__delivered = state.guides.filter(n => n.state === DELIVERED).length;
            }
        },
    }
})

export const { addGuide,updateGuide } = guideSlice.actions;
const { reducer:guideReducer } = guideSlice;
export default guideReducer;