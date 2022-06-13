import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAlert } from '../features/alert/alertSlice'

function Alert() {
  const {color,message} = useSelector((store) => store.alert)
  const dispatch = useDispatch()
  
  useEffect(() => {
    setTimeout(() => {
     dispatch(clearAlert())
    },3000)
  },[dispatch])

  return (
    <div className={`${color === 'danger' ? 'alert danger':'alert success'}`}>{message}</div>
  )
}

export default Alert