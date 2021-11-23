import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'iqf4_NIq_3DuraMrK0InU', heading: 'First Post', subHeading: 'subheading', summary: 'First!' },
  { id: 'iqf4_NIq_3DuraMrK0Inr', seading: 'Second!', subHeading: 'subbed', summary: 'I missed it!' },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer