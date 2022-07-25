import Book from "./Book";
import PropTypes from 'prop-types';

const BookShelf = (props) => {

    const showingBooks = 
        props.books.filter((b) => b.shelf === props.shelf);

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    showingBooks.map((book) => {
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

BookShelf.propTypes = {
    shelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shelfChangeHandle: PropTypes.func.isRequired
  }

export default BookShelf;