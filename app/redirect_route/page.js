"use client"
import React, {useEffect} from 'react'

export default function page() {
  useEffect(()=>{
    window.location.href = '/hello'
  },[])  
  return (
    <div>page</div>
  )
}
