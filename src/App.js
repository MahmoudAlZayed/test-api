import { useRef, useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const myRef = useRef(null);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Axios.get(
      `http://localhost:8000/books`  
    ).then((res) => {
      console.log(res.data);
      setBooks(res.data);
    });
  }, []);
  return (
    <>
      <input
        className="searchBar"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="booksListContainer">
        {books
          .filter((book) => {
            return search.toLowerCase() === ""
              ? book
              : book.title.toLowerCase().includes(search);
          })
          .map((book, id) => (
            <div key={id} className="booksList" ref={myRef}>
              <img
                src={book.image_url}
                alt={book.title + "book cover image"}
                className="booksCover"
              />
              <h1> {book.title} </h1>

              <h2>{book.year}</h2>
              <p>{book.description}</p>
            </div>
          ))}
      </div>
       
    </>
  );
}

export default App;
