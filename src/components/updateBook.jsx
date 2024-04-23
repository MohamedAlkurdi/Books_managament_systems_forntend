import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { updateBook } from "../redux/putSlicer";
import { updateBookAndFetchData } from "../redux/putSlicer";
import { useLocation } from "react-router-dom";

export default function UpdateBook() {
    const [UpdatedBook, setUpdatedBook] = useState({ _id: '', book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
    const [previosVersion, setPreviosVersion] = useState({ _id: '', book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', })
    const dispatch = useDispatch();
    const location = useLocation();


    useEffect(() => {
        console.log("updatedBookId: ", location.state.id);
        setUpdatedBook({ ...updateBook, _id: location.state.id });
        setPreviosVersion({ ...previosVersion, _id: location.state.id, book_title: location.state.book_title, genre: location.state.genre, writer: location.state.writer, pages_number: location.state.pages_number, publisher: location.state.publisher, release_date: location.state.release_date })
    }, [location])

    function handleUpdateClick(e) {
        e.preventDefault();
        console.log("the new version of the book that is goiinf to be updated: ", UpdatedBook)
        dispatch(updateBookAndFetchData(UpdatedBook));
        setUpdatedBook({ book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
    }
    return (
        <div className="updateBookPage bg-custom-light flex flex-col items-center gap-20 pb-20 pt-12">
            <div className="previousVersion flex flex-col w-2/3 gap-8">
                <h1 className="text-4xl text-center flex justify-center items-center italic font-bold text-custom-dark pt-4 min-h-[110px] relative z-10">{previosVersion.book_title}</h1>
                <h2 className="bookInfo text-2xl flex justify-between bold text-custom-dark items-center w-full"><span className="capitalize text-custom-dark ">Genre:</span>{previosVersion.genre}</h2>
                <h3 className="bookInfo text-2xl flex justify-between bold text-custom-dark items-center w-full"><span className="capitalize text-custom-dark ">Writer:</span>{previosVersion.writer}</h3>
                <p className="bookInfo text-2xl flex justify-between bold text-custom-dark items-center w-full"><span className="capitalize text-custom-dark ">Pages Number:</span>{previosVersion.pages_number}</p>
                <p className="bookInfo text-2xl flex justify-between bold text-custom-dark items-center w-full"><span className="capitalize text-custom-dark ">Publisher:</span>{previosVersion.publisher}</p>
                <p className="bookInfo text-2xl flex justify-between bold text-custom-dark items-center w-full"><span className="capitalize text-custom-dark ">Released Date:</span>{previosVersion.release_date}</p>
            </div>
            <form className="flex flex-col w-2/3 gap-6 p-6 items-center bg-custom-brown rounded-xl">
                <h1 className="text-4xl text-custom-dark font-bold my-8">Book Updating Form</h1>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Change the book title: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="text"
                        placeholder="Title"
                        value={UpdatedBook.book_title}
                        onChange={e => setUpdatedBook({ ...UpdatedBook, book_title: e.target.value })}
                    />
                </div>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Change the author: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="text"
                        placeholder="Author"
                        value={UpdatedBook.writer}
                        onChange={e => setUpdatedBook({ ...UpdatedBook, writer: e.target.value })}
                    />
                </div>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Change the genre: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="text"
                        placeholder="Genre"
                        value={UpdatedBook.genre}
                        onChange={e => setUpdatedBook({ ...UpdatedBook, genre: e.target.value })}
                    />
                </div>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Change the pages number: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="number"
                        placeholder="Pages Number"
                        value={UpdatedBook.pages_number}
                        onChange={e => setUpdatedBook({ ...UpdatedBook, pages_number: e.target.value })}
                    />
                </div>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Change the publisher: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="text"
                        placeholder="publisher"
                        value={UpdatedBook.publisher}
                        onChange={e => setUpdatedBook({ ...UpdatedBook, publisher: e.target.value })}
                    />
                </div>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Change the release date: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="text"
                        placeholder="release_date"
                        value={UpdatedBook.release_date}
                        onChange={e => setUpdatedBook({ ...UpdatedBook, release_date: e.target.value })}
                    />
                </div>
                <button className="px-4 py-2 mt-6 bg-custom-light text-custom-dark text-xl rounded-xl cursor-pointer" onClick={handleUpdateClick}>Update</button>
            </form>
        </div>
    )
}