import React from 'react'
import { BsTrash } from 'react-icons/bs'
import './Filter.css'

function Filter(props) {
  return (
    <div className="filter-item">
        <p className="filter-field">{props.fieldName}</p>
        <p className="filter-value">{props.fieldValue}</p>
        <BsTrash className="filter-del-icon" onClick={()=>props.handleClick()} />
    </div>
  )
}

export default Filter