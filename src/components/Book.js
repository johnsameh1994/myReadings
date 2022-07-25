import PropTypes from 'prop-types';

const Book = (props) => {

    let bookImage = "";
    if (props.book.imageLinks === undefined || props.book.imageLinks === null || props.book.imageLinks === ""){
        bookImage = ""
        
    }else{
        bookImage = props.book.imageLinks.smallThumbnail;
    }

    let bookAuthors = [];
    if (props.book.authors === undefined || props.book.authors === null || props.book.authors === ""){
        bookAuthors = []
        
    }else{
        bookAuthors = props.book.authors.join(", ");
    }
    

    return (
            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 120,
                        height: 180,
                        backgroundImage: `url(${bookImage})`,
                    }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select value={props.book.shelf} onChange={(event) => props.shelfChanger(event, props.book)}>
                            <option value="" disabled>
                            Move to...
                            </option>
                            <option value="currentlyReading">
                            Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        
                    </div>
                </div>
                {/* <div className="book-title">{props.book.shelf}</div> */}
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">
                    {bookAuthors}
                </div>
            </div>
    );

}

Book.propTypes = {
    id: PropTypes.string.isRequired,
    shelfChanger: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
}

export default Book;