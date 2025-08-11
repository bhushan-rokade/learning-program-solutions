import React, { useState } from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import './App.css';

const coursesData = [
  { id: 1, name: 'Hindi Web Development', date: '15-Aug-2023' },
  { id: 2, name: 'Advanced Java with Spring Boot', date: '26-Jan-2023' },
  { id: 3, name: 'React Native in Marathi', date: '02-Oct-2023' },
  { id: 4, name: 'Python for Data Science', date: '14-Apr-2023' },
];

const booksData = [
  { id: 101, bname: 'Mastering React in Hindi', price: 499 },
  { id: 102, bname: 'Java Guru by NPTEL', price: 699 },
  { id: 103, bname: 'Python for Beginners (in Tamil)', price: 399 },
  { id: 104, bname: 'Machine Learning with BharatGPT', price: 899 },
];

const blogsData = [
  {
    id: 1,
    title: 'Learning React Native',
    author: 'Sundar Kumar',
    content: 'React Native is the future of mobile apps in India.',
  },
  {
    id: 2,
    title: 'Why Spring Boot is Popular in India',
    author: 'Priya Sharma',
    content: 'Explore how Java + Spring Boot powers Indian startups.',
  },
  {
    id: 3,
    title: 'Government of India’s AI Initiative',
    author: 'Amit Chaturvedi',
    content: "A deep dive into BharatGPT and India's digital future.",
  },
];

function App() {
  const [show, setShow] = useState('all');

  const renderContent = () => {
    switch (show) {
      case 'courses':
        return (
          <div className='single-view'>
            <CourseDetails courses={coursesData} />
          </div>
        );
      case 'books':
        return (
          <div className='single-view'>
            <BookDetails books={booksData} />
          </div>
        );
      case 'blogs':
        return (
          <div className='single-view'>
            <BlogDetails blogs={blogsData} />
          </div>
        );
      default:
        return (
          <div className='container'>
            <div className='column'>
              <CourseDetails courses={coursesData} />
            </div>
            <div className='column'>
              <BookDetails books={booksData} />
            </div>
            <div className='column'>
              <BlogDetails blogs={blogsData} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className='App'>
      <h1 className='main-heading'>Indian Knowledge Hub</h1>

      <div className='buttons'>
        <button onClick={() => setShow('all')}> Show All</button>
        <button onClick={() => setShow('courses')}> Courses</button>
        <button onClick={() => setShow('books')}> Books</button>
        <button onClick={() => setShow('blogs')}> Blogs</button>
      </div>

      <hr />

      {show === 'all' && <h2 className='subheading'>All Resources</h2>}

      {renderContent()}

      <div className='footer-note'>
        {show !== 'all' ? (
          <p>
            Showing <strong>{show}</strong> only. Click "Show All" to view
            everything.
          </p>
        ) : (
          <p>Currently displaying all educational content.</p>
        )}
      </div>
    </div>
  );
}

export default App;
