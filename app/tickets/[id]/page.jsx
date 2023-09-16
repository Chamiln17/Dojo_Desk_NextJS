import { notFound } from 'next/navigation'
import React from 'react'


export async function generateStaticParams() {
    const tickets = await fetch('http://localhost:4000/tickets').then(res => res.json())
    return tickets.map(ticket => ({id: ticket.id}))
}

async function getTickets(id) {
    const response = await fetch('http://localhost:4000/tickets/'+ id , {
      next : {
        revalidate : 60 // never gets data from cache
      }
    } )
    if(!response.ok) {notFound()}
    return await response.json()
  }

export default async function TicketDetails({params}) {
    const id = params.id;
    const ticket = await getTickets(id);
  return (
    <main>
        <nav>
           <h3>Ticket Datails</h3> 
        </nav>
        <div className='card'>
                    <h3>{ticket.title}</h3>
                    <small>Created by {ticket.user_email}</small>
                    <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </div> 
    </main>
  )
}
