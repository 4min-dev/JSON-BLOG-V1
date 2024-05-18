import React from 'react'

export const CustomSortPan = ({defaultValue,options, onChange}) => {
  return (
   <select onChange={(e) => onChange(e.target.value)}>
    {defaultValue && <option value={defaultValue} disabled>{defaultValue}</option>}
    {options && options.map((el) => <option value={el.value} key={el.name}>{el.name}</option>)}
   </select>
  )
}