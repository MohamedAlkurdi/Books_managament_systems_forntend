import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchBooksData", async () => {
    try {
        const response = await axios.get('http://localhost:3001/books');
        return response.data;
    } catch (error) {
        console.log("you phone is linging");
        console.log(error.message);
        throw error;
    }
});

const initialState = {
    books: [],
    isLoading: false,
    error: false,
}

const getSlicer = createSlice({
    name: "GET_SLICER",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
            console.log("actions error:",action.error);
        })
    }
})

export const { addBook } = getSlicer.actions;
export default getSlicer.reducer;