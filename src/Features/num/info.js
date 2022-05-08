import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
    name: 'info',
    initialState: {
        name: '',
        email: '',
        num: '#'
    },
    reducers: {
        setName: (state, value) => {
            state.name = value.payload
        },
        setEmail: (state, value) => {
            state.email = value.payload
        },
        setNum: (state, value) => {
            state.num = value.payload
        },
    },
})

export const { setName, setEmail, setNum } = infoSlice.actions

export default infoSlice.reducer