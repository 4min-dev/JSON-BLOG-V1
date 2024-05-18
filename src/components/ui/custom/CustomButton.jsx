import React from 'react'

export const CustomButton = ({buttonText,id,handleClick,disabled,classname}) => {
  return (
    <button disabled={disabled} type='button' id={id} className={classname} onClick={() => handleClick()}>{buttonText}</button>
  )
}