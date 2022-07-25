import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "../App.css";

import SearchPage from "../components/SearchPage";
import MyReadings from "../components/MyReadings";
import PageNotFound from "../components/PageNotFound";
import * as BooksAPI from "../BooksAPI";


function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [shelfs, setShelfs] = useState([]);

  useEffect(() => {
    getallBooks();
  }, [])

  const getallBooks = async () => {
    const res = await BooksAPI.getAll();
    setAllBooks(res);
  }

  const shelfChange = (e, book) =>{
    let newShelf = e.target.value;
    
    BooksAPI.update(book, newShelf).then(bookShelfs => {
      
      setShelfs(bookShelfs);

      getallBooks();
    });
    
  }

  return (

    <Routes>
      <Route exact path="/" element={<MyReadings books={allBooks} shelfChangeHandle={shelfChange} />} />
      <Route path="/search" element={<SearchPage getAllBooks={getallBooks} books={allBooks} shelfChangeHandle={shelfChange} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
