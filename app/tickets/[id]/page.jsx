import React from 'react'

async function getTickets(id) {
    const response = await fetch('http://localhost:4000/tickets/'+ id , {
      next : {
        revalidate : 0 // never gets data from cache
      }
    } )
    const json = await response.json()
    return json
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
