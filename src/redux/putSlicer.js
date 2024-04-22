import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./getSlicer";
import axios from "axios";

export const updateBook = createAsyncThunk("updateSingleBook", async (newBook) => {
    try {
        const response = await axios.put(`http://localhost:3001/books/${newBook._id}`, newBook);
        return response.data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
})

const initialState = {
    id: "",
    isLoading: false,
    error: false,
}

const updateSlicer = createSlice({
    name: "PUT_SLICER",
    initialState: initialState,
    reducers: {
        getID: (state, action) => {
            console.log("from the getID reducer .... action: " ,action)
            const id = action.payload;
            state.id = id;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateBook.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateBook.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log("from the updateBook fulfilled case: ", action.payload)
        })
        builder.addCase(updateBook.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
            console.log("actions error:", action.error);
            console.log("debugging updateBook function: ", action)
        })
    }
})

export const updateBookAndFetchData = (newBook) => async (dispatch) => {
    try {
        await dispatch(updateBook(newBook));
        await dispatch(fetchData());
    } catch (error) {
        console.error('Error deleting book:', error);
    }
};

export const { getID } = updateSlicer.actions;
export default updateSlicer.reducer;
