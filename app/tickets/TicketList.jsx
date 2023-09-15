import React from 'react'

async function getTickets() {
  const response = await fetch('http://localhost:4000/tickets')
  const json = await response.json()
  return json
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
    {tickets.map((ticket) => (
      <div key={ticket.id} className='card my-5'>
        <h5>{ticket.title}</h5>
        <p>{ticket.body.slice(0,200)}...</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
      </div>
    ))}
    </>
  )
}
