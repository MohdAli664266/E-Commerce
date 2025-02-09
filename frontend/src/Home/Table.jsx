import React, { useState, useEffect } from 'react';
import BackgroundImage from '../assets/login.jpg';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get('/api/allusers')
      .then((res) => {
        setData(res.data.data) // Assume API returns an array of user objects
      })
      .catch((err) => {
        setError('Failed to fetch user data'); 
      });
  }, []);

  const deleteHandler = (userId)=>{
    axios.delete(`/api/delete/${userId}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err)
    )
  }

  const viewHandler = (userId)=>{
    axios.delete(`/api/delete/${userId}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err)
    )
  }

  return (
    <div className="relative min-h-screen p-4 bg-cover bg-center">
      <h2 className="text-2xl font-bold text-white mb-4">User Details</h2>
      <div className="overflow-x-auto">
        {error ? ( // Display an error message if data fetch fails
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <table className="min-w-full shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-700 text-white text-left">
                <th className="py-3 px-6">Username</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Password</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Full Info</th>
                <th className="py-3 px-6">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <td className="py-3 px-6">{row.Username}</td>
                  <td className="py-3 px-6">{row.Email}</td>
                  <td className="py-3 px-6">{row.PasswordHash}</td>
                  <td className="py-3 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        row.isActive === 1 ? 'bg-green-400' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {row.isActive === 1 ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                  <button 
                    key={row.UserId}
                    className='bg-gray-700 rounded-full px-2 text-white' 
                    type="button"
                    onClick={viewHandler}
                    >View</button>
                  </td>
                  <td className="py-3 px-6">
                  <button 
                    key={row.UserId}
                    className='bg-red-500 rounded-full px-2' 
                    type="button"
                    onClick={deleteHandler}
                    >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
