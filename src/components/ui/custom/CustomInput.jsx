import React from 'react'

export const CustomInput = ({placeholder,type,id,className,onChange,value}) => {
  return (
    <input value={value} placeholder={placeholder} type={type} id={id} className={className ? `customInput ${className}` : `customInput`} onChange={(e) => onChange(e)}>
    </input>
  )
}