import React, { useState} from 'react'
import Book from "./Book";
import "./styles.css";

function BookCollectionManager() {

  const [books, setBooks] = useState([
    {id: 1, title:"React in Depth", author:"Morten Barklund", year:"2024"},
    {id: 2, title:"Effective TypeScript, 2nd Edition", author:"Dan Vanderkam", year:"2024"},
    {id: 3, title:"Mastering Node.js Web Development", author:"Adam Freeman", year:"2024"}
  ]);
  const [input, setInput] = useState({
    id:4,
    title:"",
    author:"",
    year:""
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:e.target.value
  })
  }

  const addBook = (e) => {
    e.preventDefault();
    setBooks([
      ...books,
      input,
    ])

    setInput(prev => {
      return {
        id:prev.id++,
        title:"",
        author:"",
        year:""
      }
    })
  }

  const handleDelete = (id) => {
    const tmp = books.filter(book => book.id !== id);
    setBooks(tmp);
  }


  return (
    <div className='content'>
    <div className='title'>BookCollectionManager</div>
    <div className='input-field'>
            <form onSubmit={addBook} method="post">
            <p>
                <input type="text" placeholder="Book Title" id="title" name="title" value={input.title} onChange={handleChange} />
            </p>
            <p>
                <input type="text" placeholder="Author" id="author" name="author" value={input.author} onChange={handleChange} />
            </p>
            <p>
                <input type="text" placeholder="Year of Publication" id="year" name="year" value={input.year} onChange={handleChange} />
            </p>
            <input className='addbtn' type="submit" value="Add book" />
    </form>
    </div>
    <div className='books-listing'>
      {books.map(book => <Book key={book.id} {...book} handleDelete={handleDelete} />)}
    </div>
    </div>
  )
}

export default BookCollectionManager
