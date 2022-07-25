import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";

const MyReadings = (props) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf books={props.books} shelf="currentlyReading" title="Currently Reading" shelfChangeHandle={props.shelfChangeHandle} />
          <BookShelf books={props.books} shelf="wantToRead" title="Want To Read"  shelfChangeHandle={props.shelfChangeHandle} />
          <BookShelf books={props.books} shelf="read" title="Read" shelfChangeHandle={props.shelfChangeHandle} />
        </div>
      </div>

      <div className="open-search">
        <Link to="/search" >
            Add a book
        </Link>
      </div>
    </div>
  );
}

MyReadings.propTypes = {
  books: PropTypes.array.isRequired,
  shelfChangeHandle: PropTypes.func.isRequired
}


export default MyReadings;