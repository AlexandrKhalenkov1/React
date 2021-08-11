import { useState } from 'react'
import './index.css'

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className='todoFormWrapper'>
            <input
                className='todoFormInput'
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Enter your task name here'
            />        
        </form>
    )
}

export default ToDoForm