"use client";

import React, {useState} from 'react'
import {useRouter} from 'next/navigation'

export default function CreateForm() {

    const router = useRouter()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)
    const [userEmail, setUserEmail] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        const ticket = {title, body, priority , user_email : userEmail}
        const response = await fetch('http://localhost:4000/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        })
        if (response.ok) {
            router.refresh()
            router.push("/tickets")
        }
    }
    

  return (
    <main>
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Title:</span>
                <input
                required 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />
            </label>
            <label>
                <span>Email:</span>
                <input
                required 
                type="email"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                />
            </label>
            <label>
                <span>body:</span>
                <textarea
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select 
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button 
                className="btn-primary" 
                disabled={isLoading}
            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    </main>
  )
}
