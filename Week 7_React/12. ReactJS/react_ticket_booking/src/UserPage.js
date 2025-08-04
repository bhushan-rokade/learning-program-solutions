import React from 'react';

function UserPage() {
  const handleBooking = () => {
    alert('Ticket booked successfully!');
  };

  return (
    <div className='user-page'>
      <h1>Welcome Back!</h1>
      <p>You can now book your tickets.</p>
      <button className='book-button' onClick={handleBooking}>
        Book Ticket
      </button>
    </div>
  );
}

export default UserPage;
