import { createSlice } from '@reduxjs/toolkit'

const name='student'
const initialState={
    date:null
}

const studentSlice = createSlice({
    name
    ,initialState
    ,reducers: {
        setData(state:any, action){
            state.data=action.payload
        }
    }
})

export const studentActions = studentSlice.actions
export default studentSlice.reducer