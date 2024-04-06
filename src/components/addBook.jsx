import { useState } from "react"
import { useDispatch } from "react-redux";
import { addBook } from "../redux/getSlicer";
import {postData} from '../redux/postSlicer'

export default function AddBook() {
    const [newBook, setNewBook] = useState({ book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
    const dispatch = useDispatch();

    function handleAddClick(e) {
        e.preventDefault();
        dispatch(postData(newBook));
        setNewBook({ book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
    }
    return (
        <form className="flex flex-col w-full">
            <input
                type="text"
                placeholder="Title"
                value={newBook.book_title}
                onChange={e => setNewBook({ ...newBook, book_title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Author"
                value={newBook.writer}
                onChange={e => setNewBook({ ...newBook, writer: e.target.value })}
            />
            <input
                type="text"
                placeholder="Genre"
                value={newBook.genre}
                onChange={e => setNewBook({ ...newBook, genre: e.target.value })}
            />
            <input
                type="number"
                placeholder="Genre"
                value={newBook.pages_number}
                onChange={e => setNewBook({ ...newBook, pages_number: e.target.value })}
            />
            <input
                type="text"
                placeholder="publisher"
                value={newBook.publisher}
                onChange={e => setNewBook({ ...newBook, publisher: e.target.value })}
            />
            <input
                type="text"
                placeholder="release_date"
                value={newBook.release_date}
                onChange={e => setNewBook({ ...newBook, release_date: e.target.value })}
            />
            <button onClick={handleAddClick}>Add Book</button>
        </form>
    )
}