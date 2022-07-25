import { Link } from "react-router-dom";
import Book from "./Book";
import { useState, useEffect  } from "react";
import * as BooksAPI from "../BooksAPI";
import PropTypes from 'prop-types';

const SearchPage = (props) => {

  // For Search Input
  const [query, setQuery] = useState("");
  const [allShelfBooks, setAllShelfBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  const getallBooks = async () => {
    const res = await BooksAPI.getAll();
    setAllShelfBooks(res);
  }

  useEffect(() => {
    getallBooks();
  }, [])
  
  const updateQuery = (NewQuery) => {

    if (NewQuery === '') {
      setSearchBooks([]);
      setQuery('');
      console.log("Empty Query - No Search")
    }
    else {
      
      BooksAPI.search(NewQuery.trim()).then(books =>{
        
        if(books.error === "empty query"){
          // console.log("didn't Match");
          setSearchBooks([]);

        }else{
          setSearchBooks(books);

        }
      });
      setQuery(NewQuery);
    }

  }

  // const showingBooks = searchBooks;
  for (let i = 0; i < searchBooks.length; i++) {
    for (let b = 0; b < allShelfBooks.length; b++) {
        if(searchBooks[i].id === allShelfBooks[b].id) {
          if(allShelfBooks[b].shelf !== "none"){
            searchBooks[i].shelf = allShelfBooks[b].shelf;
            break;
          }
          else{
            searchBooks[i].shelf = "none"
          }
        }
        else{
          searchBooks[i].shelf = "none"
        }
    }
  }



  return (
      <div className="search-books">
        <div className="search-books-bar">
          
          <Link className="close-search" to="/" >
              Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              searchBooks.map((book) => {
                return(
                  <li key={book.id}>
                    <Book book={book} id={book.id} shelfChanger={props.shelfChangeHandle} />
                  </li>
                );
              })
            }
          </ol>
        </div>
      </div>
  );
}

SearchPage.propTypes = {
  getAllBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  shelfChangeHandle: PropTypes.func.isRequired
}

export default SearchPage;