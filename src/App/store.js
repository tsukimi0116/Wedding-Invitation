import { configureStore } from '@reduxjs/toolkit'
import infoReducer from '../Features/num/info'
import pageReducer from '../Features/nav/nav'

export default configureStore({
    reducer: {
        info: infoReducer,
        page: pageReducer
    },
})