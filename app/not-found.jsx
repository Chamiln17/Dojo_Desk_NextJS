import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h1 className='text-3xl my-5'>Sorry there is a problem</h1>
        <p className='text-lg'>we couldnt find the page you are looking for</p>
        <p className='text-lg'>Go back to <Link href={"/"}>Dashboard</Link></p>
    </main>
  )
}
