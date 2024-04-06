import { configureStore } from "@reduxjs/toolkit";
import getSlicer from "./getSlicer";
import postSlicer from './postSlicer'
import putSlicer from "./putSlicer";

export const store = configureStore({
    reducer:{
        library_get:getSlicer,
        library_post:postSlicer,
        library_put:putSlicer,
    }
})
