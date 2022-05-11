import { createSlice } from '@reduxjs/toolkit'
import Main from '../../Page/Home/Components/Main'

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        page: 0,
    },
    reducers: {
        setPage: (state, value) => {
            state.page = parseInt(value.payload)
        },
    },
})

export const { setPage } = pageSlice.actions

export default pageSlice.reducer