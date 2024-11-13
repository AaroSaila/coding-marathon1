const Book = ({id, title, author, year, handleDelete}) => {
    return <div className="book">
        <div className="book-title">{title}</div>
        <div className="book-author"><b>Author</b>: {author}</div>
        <div className="book-year"><b>Year</b>: {year}</div>
        <button className="book-delete-btn" onClick={() => handleDelete(id)}>Delete</button>
    </div>
}

export default Book;