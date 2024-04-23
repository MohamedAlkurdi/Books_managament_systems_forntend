import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addBook } from "../redux/getSlicer";
import { postData } from '../redux/postSlicer'

export default function AddBook() {
    const [newBook, setNewBook] = useState({ book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
    const [warning, setWarning] = useState(false);
    const dispatch = useDispatch();

    function checkFormStatus() {
        const inputsStatusArray = [];
        for (let key in newBook) {
            console.log("debugging checkFormStatus function: ",newBook[key])
            const inputStatus = newBook[key] === "" || newBook[key] === 0;
            inputsStatusArray.push(inputStatus)
        }
        console.log("inputsStatusArray for debugging: ",inputsStatusArray)
        const inputsStatusCheck = inputsStatusArray.every(el => el === false); // if all thed inputs are false (false = input is full) return false
        return inputsStatusCheck;
    }
    
    function handleAddClick(e) {
        const fromStatus = checkFormStatus(); // if the status is false = inputs are full
        console.log("fromStatus for debugging: ", fromStatus);
        console.log("the inputs are", fromStatus === false ? "filled." : "empty.");
        if(!fromStatus){ // if status is not null = some or all the inputs are empty
            setWarning(true); // show warning
        }
        e.preventDefault();
        if (fromStatus) { 
            dispatch(postData(newBook));
            setNewBook({ book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
        }
    }

    useEffect(() => {
        if (warning) {
            const timeOut = setTimeout(() => {
                setWarning(false);
            }, 3000)
        }
    }, [warning])

    return (
        <div className="addBookPage flex flex-col items-center justify-center py-20 relative">
            <form className="flex flex-col w-2/3 gap-6 p-6 items-center bg-custom-brown rounded-xl">
                <h1 className="text-4xl text-custom-dark font-bold my-8">Adding Book Form</h1>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Add the book title: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="text"
                        placeholder="Title"
                        value={newBook.book_title}
                        onChange={e => setNewBook({ ...newBook, book_title: e.target.value })}
                    />
                </div>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Add the author: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="text"
                        placeholder="Author"
                        value={newBook.writer}
                        onChange={e => setNewBook({ ...newBook, writer: e.target.value })}
                    />
                </div>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Add the genre: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="text"
                        placeholder="Genre"
                        value={newBook.genre}
                        onChange={e => setNewBook({ ...newBook, genre: e.target.value })}
                    />
                </div>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Add the pages number: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="number"
                        placeholder="Pages Number"
                        value={newBook.pages_number}
                        onChange={e => setNewBook({ ...newBook, pages_number: e.target.value })}
                    />
                </div>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Add the publisher: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="text"
                        placeholder="publisher"
                        value={newBook.publisher}
                        onChange={e => setNewBook({ ...newBook, publisher: e.target.value })}
                    />
                </div>
                <div className="input flex w-full items-center justify-between gap-4">
                    <label className="input_label text-xl text-custom-light font-bold" >Add the release date: </label>
                    <input
                        className="flex-1 max-w-[580px] focus:outline-none px-2 py-1 text-xl rounded-md"
                        type="text"
                        placeholder="release_date"
                        value={newBook.release_date}
                        onChange={e => setNewBook({ ...newBook, release_date: e.target.value })}
                    />
                </div>
                <button className="px-4 py-2 mt-6 bg-custom-light text-custom-dark text-xl rounded-xl cursor-pointer" onClick={handleAddClick}>Add Book</button>
            </form>
            {warning ? <div className=" bg-custom-dark text-custom-light font-bold p-4 rounded-xl text-xl fixed bottom-10 right-1/2 translate-x-1/2 translate-y-1/2">Fill the inputs</div> : ""}
        </div>


    )
}