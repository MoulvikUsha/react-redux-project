import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, location } = action.payload
            const updateUser = state.find(user => user.id == id)
            if (updateUser) {
                updateUser.name = name,
                    updateUser.location = location
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload
            const deleteUser = state.find(user => user.id == id)
            if (deleteUser) {
                return state.filter(u => u.id !== id)
            }
        },
    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer