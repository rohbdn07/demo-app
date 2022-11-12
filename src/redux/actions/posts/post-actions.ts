import { PostModel } from '../../../models/redux-models'
import postService from '../../../services/postServices'
import { setAllPost, setErrorMessage, setParticularPost } from '../../reducer-slices/post-slices'
import { AppThunk } from '../../store'

/** this function dispatch an action with data(all posts) into reducer */
export const fetchPosts = (): AppThunk => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return async (dispatch, getState) => {
    if (getState().post.allPosts.length === 0) {
      try {
        const postResponse: PostModel[] = await postService.getAllPost()
        dispatch(setAllPost(postResponse))
      } catch (error) {
        console.log('Error', error)
        dispatch(setErrorMessage('Opps! something went wrong!!'))
      }
    }
  }
}

/** this function dispatch an action with data(particular post by Id) into reducer */
export const fetchParticularPostById = (postId: number): AppThunk => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return async (dispatch, getState) => {
    try {
      const response: PostModel = await postService.getPostById(postId)
      dispatch(setParticularPost(response))
    } catch (error) {
      console.log('ERROR while fetching post by postID', error)
      dispatch(setErrorMessage('Opps! something went wrong!!'))
    }
  }
}
