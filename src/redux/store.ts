import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import postSlices from './reducer-slices/post-slices'
import rootReducer from './reducers/rootReducer'

export const store = configureStore({
  reducer: { post: postSlices },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>