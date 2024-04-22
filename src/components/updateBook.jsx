import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { updateBook } from "../redux/putSlicer";
import { updateBookAndFetchData } from "../redux/putSlicer";
import { useLocation } from "react-router-dom";

export default function UpdateBook() {
    const [UpdatedBook, setUpdatedBook] = useState({ _id: '', book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        console.log("finally!")
    }, [])
    useEffect(() => {
        console.log("updatedBookId: ", location.state.id);
        setUpdatedBook({...updateBook,_id: location.state.id});
    }, [location])

    function handleUpdateClick(e) {
        e.preventDefault();
        console.log("the new version of the book that is goiinf to be updated: ", UpdatedBook)
        dispatch(updateBookAndFetchData(UpdatedBook));
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