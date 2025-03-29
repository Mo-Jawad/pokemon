import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postsSlicer';

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})