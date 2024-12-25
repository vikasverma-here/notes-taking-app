import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
     addToPastes: (state, action) => {
      
    },
    updateToPastes: (state,action) => {
      
    },
    resetAllPaste: (state, action) => {
      
    },
    removeFromPastes: (state, action) => {
      
    },
  },
})


export const {addToPastes , updateToPastes, resetAllPaste, removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer