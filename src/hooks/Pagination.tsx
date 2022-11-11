import React from 'react'
import { PostModel } from '../models/redux-models'

interface UsePaginationProps {
  data: PostModel[]
  itemsPerPage: number
}

/** pagination hook */
const usePagination = ({ data, itemsPerPage }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1)
  const maxPage = Math.ceil(data.length / itemsPerPage)

  function currentData(): PostModel[] {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    return data.slice(begin, end)
  }
  function moveToNextPage(page: number): void {
    const pageNumber = Math.max(1, page)
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage))
  }

  return {
    maxPage,
    currentData,
    moveToNextPage,
  }
}

export default usePagination
