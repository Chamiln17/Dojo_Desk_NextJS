import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

export default function Tickets() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
        </nav>
        <Suspense fallback={<Loading></Loading>}>
          <TicketList />
        </Suspense>    
    </main>
  )
}
