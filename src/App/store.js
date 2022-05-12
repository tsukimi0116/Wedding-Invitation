import { configureStore } from '@reduxjs/toolkit'
import infoReducer from '../Features/num/info'

export default configureStore({
    reducer: {
        info: infoReducer,
    }
})