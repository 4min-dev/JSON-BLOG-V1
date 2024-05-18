import React from 'react'

import { CustomButton } from './CustomButton'
import { usePaginate } from '../../hooks/usePaginate'

export const CustomPaginateButtons = ({totalPages,setPaginateContent,paginateContent}) => {
    const totalPaginateArray = usePaginate(totalPages)
  return (
    <div className='containerPaginateButtons'>
      <div className="contentPaginateButtons">
      {totalPaginateArray 
      && totalPaginateArray.map((paginateNumber) => 
      <CustomButton id={'customPaginateButton'} disabled={paginateContent.currPage === paginateNumber} buttonText={paginateNumber} key={paginateNumber} handleClick={() => setPaginateContent({...paginateContent,currPage:paginateNumber})}/>)}
      </div>
    </div>
  )
}
