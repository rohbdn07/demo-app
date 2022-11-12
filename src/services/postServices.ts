import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { PostModel } from '../models/redux-models'

/**
 * @axiosFetchAuthAPI baseurl to connect frontend to backend.
 * @baseurl "https://jsonplaceholder.typicode.com"
 */

const axiosFetchAPI: AxiosInstance & AxiosRequestConfig = axios.create({
  // baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json',
  },
})

/** fetch all posts from baseUrl */
const getAllPost = async (): Promise<PostModel[]> => {
  const response = await axiosFetchAPI.get<PostModel[]>('posts')
  return response?.data
}

/** fetch just a particular post by its ID from baseUrl */
const getPostById = async (id: number): Promise<PostModel> => {
  const response = await axiosFetchAPI.get<PostModel>(`posts/${id}`)
  return response?.data
}

export default {
  getAllPost,
  getPostById,
}
