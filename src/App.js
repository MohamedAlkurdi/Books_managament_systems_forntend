import './App.css';
import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchData } from './redux/getSlicer';
import { Routes,Route } from 'react-router-dom';
import BooksList from './components/booksList.jsx'
import AddBook from './components/addBook.jsx';
import UpdateBook from './components/updateBook.jsx';
import Navbar from './components/navbar.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className='bg-custom-light'>
      <Navbar/>
      <Routes>
        <Route index element={<BooksList/>} />
        <Route path='/BooksList' element={<BooksList/>} />
        <Route path='/addBook' element={<AddBook/>}/>
        <Route path='/updateBook' element={<UpdateBook/>}/>
        <Route path='/*'/>
      </Routes>
    </div>
  );
};

export default App;



// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = axios.get("http://localhost:3000/books");
//     fetchData.then(res => {
//       console.log("fetched data: ", res.data);
//       setData(res.data);
//     });
//   }, [])

//   const render_data = data.map(el=>{
//     return <li className='flex flex-col p-5 rounded-lg bg-slate-500'><h1>{el.book_title}</h1><p>{el.genre}</p></li>
//   })

//   return (
//     <div className="App">
//       <ul className='flex flex-col items-center justify-center w-full gap-3'>
//         {render_data}
//       </ul>
//     </div>
//   );
// }

// export default App;








  // const updateBook = async (id, updatedBook) => {
  //   try {
  //     const response = await axios.put(`http://localhost:3000/books/${id}`, updatedBook);
  //     const updatedBooks = books.map(book => (book._id === id ? response.data : book));
  //     setBooks(updatedBooks);
  //   } catch (error) {
  //     console.error(`Error updating book with id ${id}:`, error);
  //   }
  // };

  // const deleteBook = async id => {
  //   try {
  //     await axios.delete(`http://localhost:3000/books/${id}`);
  //     const updatedBooks = books.filter(book => book._id !== id);
  //     setBooks(updatedBooks);
  //   } catch (error) {
  //     console.error(`Error deleting book with id ${id}:`, error);
  //   }
  // };