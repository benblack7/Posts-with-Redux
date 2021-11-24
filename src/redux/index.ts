//Importing Redux Toolkit because that is the recommended modern usage pattern
import { createSlice } from '@reduxjs/toolkit';

//Adding some initial posts to the store
const initialState = [
  { id: 'iqf4_NIq_3DuraMrK0InU', heading: 'First Post', subHeading: 'subheading', summary: 'First!' },
  { id: 'iqf4_NIq_3DuraMrK0Inr', heading: 'Second!', subHeading: 'subbed', summary: 'I missed it!' },
]

//Creating a Redux State Slice with a name, initial State and reducer functions to define how
// state can be updated
export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    postAdded(state, action) {
      //Redux Toolkit uses Immer to allow for mutating state proxies that become correct immutable objects
      state.push(action.payload)
    }
  }
})

//export action creators for each reducer function
export const { postAdded } = postsSlice.actions

//export the reducer function for the entire slice
export default postsSlice.reducer