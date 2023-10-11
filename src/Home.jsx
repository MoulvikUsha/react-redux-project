// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteUser } from './UserReducer'

function Home() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const deleteMovie = (id) => {
        dispatch(deleteUser({ id: id }))
    }
    return (
        <div className='container tabled mt-3'>
            <NavLink to='/create' className='btn btn-dark mt-2'>Create</NavLink>
            <div>
                <h4>Crud App with JSON Server</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Movie</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) =>
                            <tr key={index}>
                                <th>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.location}</td>
                                <td>
                                    <NavLink className='btn btn-sm btn-primary' to={`/edit/${user.id}`}>
                                        Edit
                                    </NavLink>
                                    <button className='btn btn-sm btn-danger ms-2' onClick={() => deleteMovie(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home