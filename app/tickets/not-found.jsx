import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h1 className='text-3xl my-5'>We reached an unpassed path</h1>
        <p className='text-lg'>we couldnt find the page you are looking for</p>
        <p className='text-lg'>Go back to <Link href={"/"}>Dashboard</Link></p>
    </main>
  )
}
