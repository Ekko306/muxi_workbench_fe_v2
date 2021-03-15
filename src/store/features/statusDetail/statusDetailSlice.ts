import { createSlice, createAsyncThunk, Dispatch } from '@reduxjs/toolkit'
import store from 'store/store'

export interface statusDataState {
    statusInfo: defs.StatusDetail
    comments: Array<defs.Comment>
}

interface StatusDtlState {
    statusDtl: statusDataState
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null
}
const initialState: StatusDtlState = {
    statusDtl: { statusInfo: { like_count: 0, liked: false, sid: 0 }, comments: [] },
    loading: 'idle',
    error: null
}

export const fetchStatusDtl = createAsyncThunk<statusDataState, number, { state: RootState }>(
    'statusDetail/fetchStatusDtl',
    async (id, thunkAPI) => {
        const info = await API.status.getStatusDetailById.request({ id }).then((res) => {
            return res.data
        })
        const comments = await API.status.getStatusDetailByIdComments
            .request({ id })
            .then((res) => {
                return res.data.commentlist
            })
        const data = await Promise.all([info, comments]).then((values) => {
            const detail: statusDataState = {
                statusInfo: { like_count: 0, liked: false, sid: 0 },
                comments: []
            }
            const [a, b] = values
            detail.statusInfo = a
            detail.comments = b === null ? [] : b // 若没有评论 后端传递comments=null
            return detail
        })
        return data as statusDataState
    }
)

const statusDetailSlice = createSlice({
    name: 'statusDtl',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStatusDtl.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(fetchStatusDtl.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.statusDtl = action.payload
        })
    }
})

export default statusDetailSlice.reducer

type RootState = ReturnType<typeof store.getState>
export const selectStatusDtl = (state: RootState) => state.statusDtl.statusDtl
export const selectLoading = (state: RootState) => state.statusDtl.loading

// export const { addPageNum } = statusDetailSlice.actions
