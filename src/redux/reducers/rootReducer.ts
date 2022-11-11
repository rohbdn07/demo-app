import { combineReducers } from 'redux'

import postSlices from '../reducer-slices/post-slices'

/** it combine all reducer(s) if there are many */
const rootReducer = combineReducers({
  post: postSlices,
})
export default rootReducer
