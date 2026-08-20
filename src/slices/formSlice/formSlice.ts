import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_GUIDES } from "../../constants/actionTypes";
import api from "../../api";
import { ASYNC_STATUS } from "../../constants/asyncState";
import { GuideInfo } from "../../store/status";

export const createGuide = createAsyncThunk(CREATE_GUIDES,async (guide:GuideInfo)=>{
    const response = await api.post('/create-guide',{
        id_guide:guide.id_guide,
        origin:guide.origin,
        destiny:guide.destiny,
        recipient:guide.recipient,
        status:guide.status
    })
    return response.data;
});

const formSlice = createSlice({
    name:"form",
    initialState:{
        form:{
            id_guide:"",
            origin: "", 
            destiny: "", 
            recipient: "",
            datetime_created: "",
            status: "", 
        },
        status:"idle",
        error: null as null|string,
    },
    reducers:{
        clearForm: state => {
            state.form = {
                id_guide:"",
                origin: "", 
                destiny: "", 
                recipient: "",
                datetime_created: "",
                status: "", 
            }
        },
    },
    extraReducers: builder => {
        builder
        .addCase(createGuide.pending, state => {
            state.status = ASYNC_STATUS.PENDING;
        })
        .addCase(createGuide.fulfilled, (state, action) => {
            state.status = ASYNC_STATUS.FULFILLED;
        })
        .addCase(createGuide.rejected, (state, action) => {
            state.status = ASYNC_STATUS.REJECTED;
            state.error = action.error.message as string;
        });
    }

});

export const { clearForm } = formSlice.actions;
export default formSlice.reducer;