import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
}

export const DataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addMovie: (state,payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.movies = payload
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { addMovie} = DataSlice.actions

export default DataSlice.reducer