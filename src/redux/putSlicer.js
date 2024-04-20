import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./getSlicer";
import axios from "axios";

export const updateBook = createAsyncThunk("updateSingleBook", async (bookID)=>{
    try{
    const response = await axios.put(`http://localhost:3001/books/${bookID}`);
    return response.data;
    }catch(error){
        console.log(error.message);
        throw error;
    }
})
const initialState = {
    isLoading: false,
    error: false,
}

const updateSlicer = createSlice({
    name:"PUT_SLICER",
    initialState:initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(updateBook.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateBook.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log("from the updateBook fulfilled case: ",action.payload)
        })
        builder.addCase(updateBook.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
            console.log("actions error:",action.error);
        })
    }
})
export const deleteBookAndFetchData = (bookID) => async (dispatch) => {
    try {
        
        await dispatch(updateBook(bookID));
        await dispatch(fetchData());
    } catch (error) {
        console.error('Error deleting book:', error);
    }
};


export default updateSlicer.reducer;
