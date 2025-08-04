import React from 'react';

function BookDetails({ books }) {
  return (
    <div className='book-section'>
      <h2 className='section-heading'>📚 Book Details</h2>
      {books.map((book) => (
        <div className='book-card' key={book.id}>
          <h3 className='book-name'>{book.bname}</h3>
          <p className='book-price'>Price: ₹{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
