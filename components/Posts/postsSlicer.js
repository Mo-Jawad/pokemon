import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async (limit) => {
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        const data = await reponse.json();
        
        
        return data;
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        post: [],
        status: 'idle'
    },
    extraReducers(builder) {
        builder.
        addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.post = state.post.concat(action.payload);
        })
    }

})

export default postSlice.reducer;

export const allPosts = (state) =>  state.posts.post 
export const statusState = (state) => state.posts.status