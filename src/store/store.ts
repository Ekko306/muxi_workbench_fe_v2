import { configureStore } from '@reduxjs/toolkit'
import statusSlice from 'store/features/statusList/statusListSlice'
import statusDtlSlice from 'store/features/statusDetail/statusDetailSlice'

const store = configureStore({
    reducer: {
        statusDtl: statusDtlSlice,
        statusList: statusSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
