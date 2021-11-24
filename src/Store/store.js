import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../redux';

export default configureStore({
  reducer: {
    //Added Posts Slice Reducer to the Store
    posts: postsReducer
  }
})

//Configure a store and add the Posts Reducer to the store