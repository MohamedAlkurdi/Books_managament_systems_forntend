import { useState } from "react"
import { useDispatch } from "react-redux";
import { updateBook } from "../redux/putSlicer";

export default function UpdateBook() {
    const [UpdatedBook, setUpdatedBook] = useState({ book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
    const dispatch = useDispatch();

    function handleUpdateClick(e) {
        e.preventDefault();
        dispatch(updateBook({UpdatedBook }));
        setUpdatedBook({ book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
    }
    return (
        <form className="flex flex-col w-full">
            <input
                type="text"
                placeholder="Title"
                value={UpdatedBook.book_title}
                onChange={e => setUpdatedBook({ ...UpdatedBook, book_title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Author"
                value={UpdatedBook.writer}
                onChange={e => setUpdatedBook({ ...UpdatedBook, writer: e.target.value })}
            />
            <input
                type="text"
                placeholder="Genre"
                value={UpdatedBook.genre}
                onChange={e => setUpdatedBook({ ...UpdatedBook, genre: e.target.value })}
            />
            <input
                type="number"
                placeholder="Genre"
                value={UpdatedBook.pages_number}
                onChange={e => setUpdatedBook({ ...UpdatedBook, pages_number: e.target.value })}
            />
            <input
                type="text"
                placeholder="publisher"
                value={UpdatedBook.publisher}
                onChange={e => setUpdatedBook({ ...UpdatedBook, publisher: e.target.value })}
            />
            <input
                type="text"
                placeholder="release_date"
                value={UpdatedBook.release_date}
                onChange={e => setUpdatedBook({ ...UpdatedBook, release_date: e.target.value })}
            />
            <button onClick={handleUpdateClick}>Update</button>
        </form>
    )
}