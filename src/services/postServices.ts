import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { PostModel } from '../models/redux-models'

export interface AxiosResponse<T = never> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
  config: AxiosRequestConfig<T>
  request?: any
}
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

// const responseBody = (response: AxiosResponse) => response.data

// const postRequests = {
//   get: async (url: string) => await axiosFetchAPI.get(url),
// }

/** fetch all posts from baseUrl */
const getAllPost = async (): Promise<PostModel[]> => {
  const response = await axiosFetchAPI.get<PostModel[]>('posts')
  console.log('the post service', response)
  return response?.data
}

/** fetch just a particular post by its ID from baseUrl */
const getPostById = async (id: number): Promise<PostModel | undefined> => {
  try {
    const response = await axiosFetchAPI.get<PostModel>(`post/${id}`)
    return response?.data
  } catch (error) {
    console.log('the error', error)
  }
}

export default {
  getAllPost,
  getPostById,
}
