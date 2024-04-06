import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postData = createAsyncThunk("postNewBook", async (newBook) => {
    try {
        const response = await axios.post('http://localhost:3000/books', newBook);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const initialState = {
    isLoading: false,
    error: false,
}
const postSlicer = createSlice({
    name: "POST_SLICER",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(postData.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(postData.fulfilled,(state,action)=>{
            state.isLoading = false;
        })
        builder.addCase(postData.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = true
            console.log("POST request rejected: ",action.error.message);
        })
    }
})

export default postSlicer.reducer;
