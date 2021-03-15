import { createSlice, createAsyncThunk, Dispatch } from '@reduxjs/toolkit'
import store from 'store/store'

interface StatusListState {
    status: Array<defs.Status>
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    page: number
    error: null
}
const initialState: StatusListState = {
    status: [],
    loading: 'idle',
    page: 0,
    error: null
}

export const fetchStatusList = createAsyncThunk<Array<defs.Status>, void, { state: RootState }>(
    'statusList/fetchStatusList',
    async (_, thunkAPI) => {
        const pageNum = selectStatusPage(thunkAPI.getState())
        const result = await API.status.getStatus
            .request({
                page: pageNum,
                limit: 10
            })
            .then((res) => {
                return res.data.stauts
            })
        return result as Array<defs.Status>
    }
)

const statusListSlice = createSlice({
    name: 'statusList',
    initialState,
    reducers: {
        addPageNum: (state) => {
            state.page += 1
        },
        initialPageNum: (state) => {
            state.page = 0
        },
        initialStatus: (state) => {
            state.page = 0
            state.status = []
            state.loading = 'idle'
        },
        putLikeInfo: (state, action) => {
            const { id, likeNew, likeNum } = action.payload
            const index = state.status.findIndex((ele) => ele.id === id)
            if (index !== -1) {
                state.status[index].like_count = likeNum
                state.status[index].liked = likeNew
            }
        },
        putCommentNum: (state, action) => {
            const { id, commentNum } = action.payload
            const index = state.status.findIndex((ele) => ele.id === id)
            if (index !== -1) {
                state.status[index].comment_count = commentNum
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStatusList.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(fetchStatusList.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.status = state.status.concat(action.payload)
        })
    }
})

export default statusListSlice.reducer

type RootState = ReturnType<typeof store.getState>
export const selectAllStatus = (state: RootState) => state.statusList.status
export const selectStatusPage = (state: RootState) => state.statusList.page
export const selectLoading = (state: RootState) => state.statusList.loading
export const selectStatusById = (id: number) => (state: RootState) => {
    const index = state.statusList.status.findIndex((ele) => ele.id === id)
    return state.statusList.status[index]
}
export const fetchStatusMore = () => (dispatch: Dispatch<any>) => {
    dispatch(addPageNum())
    dispatch(fetchStatusList())
}

export const {
    addPageNum,
    initialPageNum,
    initialStatus,
    putLikeInfo,
    putCommentNum
} = statusListSlice.actions
