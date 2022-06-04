import { useState, useCallback } from "react";

export const AddBookForm = ({ addBook }) => {
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookImage, setBookImage] = useState("");

  const handleInputChange = useCallback(
    (event) => {
      let files = event.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = (e) => {
        setBookImage({
          selectedFile: e.target.result,
        });
      };
    },
    [setBookImage]
  );

  return (
    <div className="flex  flex-col gap-y-2">
      <div className="flex justify-between">
        <label>Название книги</label>
        <input
          className="rounded-sm  border-2 border-zinc-800"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        ></input>
      </div>
      <div className="flex justify-between">
        <label>Автор книги</label>
        <input
          className="rounded-sm border-2 border-zinc-800"
          value={bookAuthor}
          onChange={(e) => setBookAuthor(e.target.value)}
        ></input>
      </div>
      <div className="flex justify-between">
        <label>Обложка книги</label>
        <input
          type="file"
          name="upload_file"
          onChange={handleInputChange}
          className="bg-dark-green text-white rounded-sm "
        ></input>
      </div>
      <button
        onClick={() => addBook(bookAuthor, bookName, bookImage.selectedFile)}
        className="bg-dark-green text-white rounded-sm py-1 px-8 my-2"
      >
        Добавить книгу
      </button>
    </div>
  );
};
