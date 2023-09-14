import { createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from '../interfaces/globalState.interface';



  
 const initialState: IGlobalState = {
    sideBarOpen: true,
    currentDate: {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    }
  };

  const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
      toggleSidebar(state) {
        state.sideBarOpen = !state.sideBarOpen;
      },
     
    },
  });


  export const { toggleSidebar } = globalSlice.actions;
  export default globalSlice.reducer;