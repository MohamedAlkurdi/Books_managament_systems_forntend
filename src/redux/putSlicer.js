import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const putData = createAsyncThunk("updateBook", async (updatedBook) => {
    try {
        const response = await axios.put('http://localhost:3000/books', updatedBook);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }

})

const initialState = {
    isLoading: false,
    error: false,
}

const putSlicer = createSlice({
    name: "PUT_SLICER",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(putData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(putData.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(putData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
            console.log("PUT request rejected: ", action.error.message);
        })
    }
})

export default putSlicer.reducer;