import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FETCH_REPORT, GET_GUIDES, PUT_GUIDES } from "../../constants/actionTypes";
import api from "../../api";
import { ASYNC_STATUS } from "../../constants/asyncState";
import { GuideInfo } from "../../store/status";


export const fetchReport = createAsyncThunk(FETCH_REPORT,async () => {
    const response = await api.get('/report');
    return response.data;
});

export const fetchGuide = createAsyncThunk(GET_GUIDES,async () => {
    const response = await api.get('/get-guides');
    console.log(response);
    return response.data;
});

export const putGuide = createAsyncThunk(PUT_GUIDES,async (guide:GuideInfo)=>{
    const response = await api.put(`/update-guide/${guide.id}`,{
        id_guide:guide.id_guide,
        origin:guide.origin,
        destiny:guide.destiny,
        recipient:guide.recipient,
        status:guide.status
    })
    console.log(response);
    return response.data;
});


const guideSlice = createSlice({
    name:"guides",
    initialState:{
        guides_total:0,
        guides_transit:0,
        guides_delivered:0,
        guides:[] as GuideInfo[],
        status:'idle',
        error: null as null|string,
    },
    reducers:{},
    extraReducers: builder =>{
        builder
        .addCase(fetchReport.pending, (state) => {
            state.status=ASYNC_STATUS.PENDING;
        })
        .addCase(fetchReport.fulfilled, (state, action) => {
            state.status=ASYNC_STATUS.FULFILLED;
            state.guides_total = action.payload["count"]
            state.guides_transit = action.payload["intransit_count"]
            state.guides_delivered = action.payload["delivered_count"]
        })
        .addCase(fetchReport.rejected, (state, action) => {
            state.status=ASYNC_STATUS.REJECTED;
            state.error = action.error.message as string;
        })
        .addCase(fetchGuide.pending, (state) => {
            state.status=ASYNC_STATUS.PENDING;
        })
        .addCase(fetchGuide.fulfilled, (state, action) => {
            state.status=ASYNC_STATUS.FULFILLED;
            state.guides = action.payload;
        })
        .addCase(fetchGuide.rejected, (state, action) => {
            state.status=ASYNC_STATUS.REJECTED;
            state.error = action.error.message as string;
        })
         .addCase(putGuide.pending, (state) => {
            state.status=ASYNC_STATUS.PENDING;
        })
        .addCase(putGuide.fulfilled, (state, action) => {
            state.status = ASYNC_STATUS.FULFILLED;
            const updatedGuide = action.payload;
            state.guides = state.guides.map(g =>
                g.id === updatedGuide.id ? updatedGuide : g
            );
        })
        .addCase(putGuide.rejected, (state, action) => {
            state.status=ASYNC_STATUS.REJECTED;
            state.error = action.error.message as string;
        });
    }
})

const { reducer:guideReducer } = guideSlice;
export default guideReducer;