import React, { useState } from 'react'
import { FiFilter } from 'react-icons/fi'
import './FilterAdd.css'
import { FilterDialog } from './'

function FilterAdd(props) {

  return (
    <div className="filter-add-item" onClick={()=>props.handleClick()}>
      <FiFilter className="filter-icon" />
      <p className="filter-label">フィルタを追加</p>
    </div>

  )
}

export default FilterAdd