import { useState, useEffect, useCallback } from "react";
import { Book } from "./components/book/index";
import { AddBookForm } from "./components/add-book-form/index";
import "./App.css";

function App() {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || []
  );
  const [openModal, setOpenModal] = useState(false);
  const clickOpenModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal, setOpenModal]);

  const addBook = useCallback(
    (bookName, bookAuthor, bookImage) => {
      setBooks([
        ...books,
        {
          name: bookName,
          author: bookAuthor,
          img: bookImage,
          id: books.length + 1,
        },
      ]);
    },
    [books, setBooks]
  );

  useEffect(() => {
    try {
      localStorage.setItem("books", JSON.stringify(books));
    } catch (e) {
      alert(
        "Вы не можете загрузить книгу, хранилище переполнено. Отчистите хранилище."
      );
    }
  }, [books]);

  const removeBooks = useCallback(() => {
    setBooks([]);
  },[setBooks]);

  return (
    <div className="flex flex-col items-center my-8">
      {openModal && <AddBookForm addBook={addBook} />}

      <div className="flex overflow-x-auto w-80 gap-x-4">
        {books.map((book) => (
          <Book
            key={book.id}
            author={book.author}
            name={book.name}
            img={book.img}
          />
        ))}
      </div>
      <button
        className="bg-dark-green text-white rounded-sm py-1 px-8 my-2"
        onClick={removeBooks}
      >
        Удалить все книги
      </button>
      <button
        onClick={clickOpenModal}
        className="bg-dark-green text-white rounded-sm py-1 px-8 my-2"
      >
        Изменение библиотеки
      </button>
    </div>
  );
}

export default App;
