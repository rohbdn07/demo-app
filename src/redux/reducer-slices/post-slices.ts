import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostArrayModel, PostModel } from '../../models/redux-models'

/** inital state of the application */
const initialPostState: PostArrayModel = {
  allPosts: [],
  postById: {
    userId: 1,
    id: 1,
    title: '',
    body: '',
  },
}

/** createSlice will infer the state type from the `initialState` argument */
const postSlice = createSlice({
  name: 'post',
  initialState: initialPostState,
  reducers: {
    setAllPost(state, action: PayloadAction<PostModel[]>) {
      state.allPosts = action.payload
    },
  },
})

/** export this actions, which then will be in use in the actions folder */
export const { setAllPost } = postSlice.actions

export default postSlice.reducer
