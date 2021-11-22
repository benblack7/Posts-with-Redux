import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../redux';

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})