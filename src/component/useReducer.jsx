import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./Data";

const userSlice = createSlice({
    name : "users",
    initialState : usersList,
    reducers : {
        addUser : (state,action) => {
            state.push(action.payload);
        },
        updateUser : (state,action) => {
            const {id,email,name} = action.payload;
            const updatedValue = state.find((data) => data.id === Number(id));
            if(updatedValue){
                updatedValue.name = name;
                updatedValue.email = email;
            }
        },
        deleteUser: (state,action) => {
            const id = action.payload.id;
            const deleteId = state.find((data) => data.id === Number(id));
            if(deleteId){
                return state.filter((data) => data.id != Number(id));
            }
        }
    }
})
export default userSlice.reducer;
export const {addUser, updateUser, deleteUser} = userSlice.actions;