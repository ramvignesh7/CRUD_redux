import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './useReducer';
import showSuccessToast from '../utils/toast';
const Home = () => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({
      id: id
    }))
    showSuccessToast("User deleted successfully!");
  }
  return (
    <div className='container'>
      <h2>Create App with JSon</h2>
      <Link to={'/create'} className='btn btn-success my-3'>Create +</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Link to={`/update/${data.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                <button onClick={() => handleDelete(`${data.id}`)} className='btn btn-sm btn-danger ms-2'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home;
