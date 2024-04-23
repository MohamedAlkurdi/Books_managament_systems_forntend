
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./getSlicer";
import axios from "axios";

export const deleteBook = createAsyncThunk("deleteSingleBook", async (bookID)=>{
    try{
    const response = await axios.delete(`http://localhost:3001/books/${bookID}`);
    return response.data;
    }catch(error){
        console.log(error.message);
        throw error;
    }
})
const initialState = {
    isLoading: false,
    error: false,
    delete: false,
    bookID:"",
}

const deleteSlicer = createSlice({
    name:"DELETE_SLICER",
    initialState:initialState,
    reducers:{
        confirmDeletion: (state,action)=>{
            const {confirm,id} = action.payload;
            state.delete = confirm;
            state.bookID = id;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(deleteBook.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteBook.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.books = action.payload;
            console.log("from the deleteBook fulfilled case: ",action.payload)
        })
        builder.addCase(deleteBook.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
            console.log("actions error:",action.error);
        })
    }
})
export const deleteBookAndFetchData = (bookID) => async (dispatch) => {
    try {
        await dispatch(deleteBook(bookID));
        await dispatch(fetchData());
    } catch (error) {
        console.error('Error deleting book:', error);
    }
};

export const {confirmDeletion} = deleteSlicer.actions;
export default deleteSlicer.reducer;