import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import guideReducer from "../slices/guideSlice/guidesSlice";
import historyReducer from "../slices/historySlice/historySlice";



export const store = configureStore({
    reducer:{
        guides:guideReducer,
        history:historyReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;