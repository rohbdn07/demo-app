import React from 'react'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'

import { PostModel } from '../../models/redux-models'

interface PagintationElProps {
  data: PostModel[]
  totalPage: number
  currentPage: number
  defaultPage: number
  size: 'small' | 'medium' | 'large'
  color: 'primary' | 'secondary' | 'standard'
  handlePageChange: (e: React.ChangeEvent<unknown>, value: number) => void
}

/**
 * @description this is a materialUI pagination
 * @param data PostModel[]
 * @param totalPage maxPage
 * @param currentPage current state page number
 * @param defaultPage show by default page number in pagination
 * @param handlePageChange onChange function
 * @returns materialUI pagination component as JSX Element
 */
const PaginationEl = (props: PagintationElProps) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={props.totalPage}
        size={props.size}
        color={props.color}
        page={props.currentPage}
        defaultPage={props.defaultPage}
        onChange={props.handlePageChange}
      />
    </Stack>
  )
}

export default PaginationEl
