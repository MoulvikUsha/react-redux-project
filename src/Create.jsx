// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './UserReducer'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, location }))
        navigate('/')
    }

    return (
        <div className='container'>
            <h4>Add New User</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">User Name
                        <input type="text" className="form-control" id="user"
                            onChange={e => setName(e.target.value)} />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Location
                        <input type="text" className="form-control" id="location"
                            onChange={e => setLocation(e.target.value)} />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create