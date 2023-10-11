// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'

function Update() {
    const { id } = useParams()
    const users = useSelector((state) => state.users)
    const existingUsers = users.filter((user) => user.id == id)
    const { name, location } = existingUsers[0]
    const [updateName, setName] = useState(name)
    const [updateLocation, setLocation] = useState(location)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateUser({ id: id, name: updateName, location: updateLocation }))
        navigate('/')
    }

    return (
        <div className='container'>
            <h4>Update User</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">User Name
                        <input type="text" className="form-control" id="user" value={updateName}
                            onChange={e => setName(e.target.value)} />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Location
                        <input type="text" className="form-control" id="location" value={updateLocation}
                            onChange={e => setLocation(e.target.value)} />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default Update