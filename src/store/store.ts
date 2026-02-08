import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import guideReducer from "./guidesSlice";



export const store = configureStore({
    reducer:{
        guides:guideReducer,
    }
});

store.subscribe(() => {
    const state = store.getState().guides;
    localStorage.setItem("guideRecord", JSON.stringify(state.guides));
    localStorage.setItem("guideHistorical", JSON.stringify(state.historical));
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;