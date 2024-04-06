import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchBooksData", async () => {
    console.log("hello darkness my old friend")
    try {
        const response = await axios.get('http://localhost:3000/books');
        return response.data;
    } catch (error) {
        console.log(error.message);
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
        deleteBook: (state, action) => { },
        updateBook: (state, action) => { },
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
            console.log(action.error);
        })
    }
})

export const { addBook, deleteBook, updateBook } = getSlicer.actions;
export default getSlicer.reducer;