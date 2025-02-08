import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  memos:localStorage.getItem('memos')?JSON.parse(localStorage.getItem('memos')):[],
}

export const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    addMemo: (state,action) => {
     
    },
    deleteMemo: (state,action) => {
      
    },
    editMemo: (state, action) => {
      
    },
    
    updateMemo:(state,action) => {   
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addMemo, deleteMemo, updateMemo } = memoSlice.actions

export default memoSlice.reducer