import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './useReducer';
import { useNavigate } from 'react-router-dom';
import showSuccessToast from '../utils/toast';
const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id: newUserId, name: name, email: email }));
    showSuccessToast("User added successfully!");
    navigate('/');
  }
  return (
    <div>
      <div>
        <h3>Add New User</h3>
        <form>
          <div>
            <label>Name:</label>
            <input type='text' className='form-control' onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type='email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
          </div><br />
          <button className='btn btn-info' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser;
