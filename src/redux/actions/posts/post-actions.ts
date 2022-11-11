import { PostModel } from '../../../models/redux-models'
import postService from '../../../services/postServices'
import { setAllPost } from '../../reducer-slices/post-slices'
import { AppThunk } from '../../store'

const fetchPosts = (): AppThunk => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return async (dispatch, getState) => {
    const postResponse: PostModel[] = await postService.getAllPost()
    console.log('the post', postResponse)
    dispatch(setAllPost(postResponse))
  }
}

export default fetchPosts
