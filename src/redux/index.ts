import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id: '1', Heading: 'First Post', SubHeading: 'subheading', Summary: 'First!'},
  {id: '2', Heading: 'Second!', SubHeading: 'subbed', Summary: 'I missed it!'}
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    }
})

export default postsSlice.reducer