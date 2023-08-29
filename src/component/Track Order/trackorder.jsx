import React, { useState, useEffect } from 'react';

const TrackOrder = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders', {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });

        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          setMessage('Failed to fetch orders.');
        }
      } catch (error) {
        setMessage('An error occurred. Please try again later.');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Track Your Orders</h2>
      {message && <p>{message}</p>}
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackOrder;
