"use client"
import React from 'react'

function LogoutButton() {
  return (
    <button className='text-cherry hover:text-cherry/70 h-content m-0 flex items-start'
    onClick={() => console.log('Hello World')}
    >
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='mr-3'><path d="M6 12.5q1.042 0 1.771-.729Q8.5 11.042 8.5 10q0-1.042-.729-1.771Q7.042 7.5 6 7.5q-1.042 0-1.771.729Q3.5 8.958 3.5 10q0 1.042.729 1.771.729.729 1.771.729ZM6 15q-2.083 0-3.542-1.458Q1 12.083 1 10q0-2.083 1.458-3.542Q3.917 5 6 5q1.625 0 2.927.969T10.75 8.5h6.75L19 10l-2.75 3.312L14.5 11.5 13 13l-1.5-1.5h-.75q-.5 1.562-1.812 2.531Q7.625 15 6 15Z"/></svg>
    Kijelentkezés
    </button>
  )
}

export default LogoutButton