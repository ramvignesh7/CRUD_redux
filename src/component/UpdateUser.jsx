import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './useReducer';
import { useNavigate, useParams } from 'react-router-dom';
import showSuccessToast from '../utils/toast';
const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state);
  const existingUser = users.filter((data) => data.id === Number(id));
  const { name, email } = existingUser[0];
  const [updateName, setUpdateName] = useState(name);
  const [updateEmail, setUpdateEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: updateName,
      email: updateEmail
    }))
    showSuccessToast("User updated successfully!");
    navigate('/');
  }
  return (
    <div>
      <div>
        <h3>Update User</h3>
        <form>
          <div>
            <label>Name:</label>
            <input type='text' className='form-control' value={updateName} onChange={(e) => setUpdateName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type='email' className='form-control' value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} />
          </div><br />
          <button className='btn btn-info' onClick={handleUpdate}>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update;
