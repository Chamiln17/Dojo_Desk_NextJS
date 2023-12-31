import Link from 'next/link';
import React from 'react'

async function getTickets() {
  const response = await fetch('http://localhost:4000/tickets' , {
    next : {
      revalidate : 0 // never gets data from cache
    }
  } )
  const json = await response.json()
  return json
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
    {tickets.map((ticket) => (
      <div key={ticket.id} className='card my-5'>
        <Link href={`/tickets/${ticket.id}`}>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0,200)}...</p>
          <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
        </Link>
      </div>
    ))}
    </>
  )
}
