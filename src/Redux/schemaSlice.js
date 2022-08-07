import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  segment: "",
  schema:[],
}

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    updateSegment: (state,action)=>{
      state.segment = action.payload;
    },
    appendSchema: (state,action) => {

        //state.schema.push(action.payload);
        //console.log(state.schema);

        //State management disabled. As objects types are being treated differently 
    },
    removeSchema: (state,action) => {
    
      //state.schema.filter((obj) => obj!==action.payload)
      //console.log(state.schema)
      
      //State management disabled. As objects types are being treated differently

    },
    updateSchema: (state,action) => {

      state.schema=action.payload;
    }
  }})
  
    


export const { appendSchema, removeSchema, updateSchema, updateSegment } = schemaSlice.actions

export default schemaSlice.reducer