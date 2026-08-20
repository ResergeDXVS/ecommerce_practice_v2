import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FETCH_HISTORY } from "../../constants/actionTypes";
import api from "../../api";
import { ASYNC_STATUS } from "../../constants/asyncState";


export const fetchHistory = createAsyncThunk(FETCH_HISTORY,async (guideID:number) => {
    const response = await api.get(`/get-history/${guideID}`);
    console.log(response.data);
    return response.data;
});


const historySlice = createSlice({
    name:"history",
    initialState:{
        list:[],
        status:'idle',
        error: null as null|string,
    },
    reducers:{},
    extraReducers: builder =>{
        builder
        .addCase(fetchHistory.pending, (state) => {
            state.status=ASYNC_STATUS.PENDING;
        })
        .addCase(fetchHistory.fulfilled, (state, action) => {
            state.status=ASYNC_STATUS.FULFILLED;
            state.list = action.payload;
        })
        .addCase(fetchHistory.rejected, (state, action) => {
            state.status=ASYNC_STATUS.REJECTED;
            state.error = action.error.message as string;
        });
    }
})

const { reducer:historyReducer } = historySlice;
export default historyReducer;