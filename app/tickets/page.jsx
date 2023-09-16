import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import Link from 'next/link'

export default function Tickets() {
  return (
    <main>
        <nav className='flex justify-between'>
          <div>
            <h2>Tickets</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
          <div>
            <Link href={"/tickets/create"}>
              <button className='btn-primary'>Create Ticket</button>
            </Link>
          </div>
        </nav>
        
        <Suspense fallback={<Loading></Loading>}>
          <TicketList />
        </Suspense>    
    </main>
  )
}
