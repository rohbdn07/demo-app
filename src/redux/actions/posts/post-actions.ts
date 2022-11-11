import { PostModel } from '../../../models/redux-models'
import postService from '../../../services/postServices'
import { setAllPost } from '../../reducer-slices/post-slices'
import { AppThunk } from '../../store'

const fetchPosts = (): AppThunk => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return async (dispatch, getState) => {
    try {
      const postResponse: PostModel[] = await postService.getAllPost()
      dispatch(setAllPost(postResponse))
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export default fetchPosts
