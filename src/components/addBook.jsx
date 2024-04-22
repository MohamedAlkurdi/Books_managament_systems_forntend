import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addBook } from "../redux/getSlicer";
import {postData} from '../redux/postSlicer'

export default function AddBook() {
    const [newBook, setNewBook] = useState({ book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
    const [warning,setWarning] = useState(false);
    const dispatch = useDispatch();
    
    function checkFormStatus(){
        const inputsStatusArray = [];
        for(let key in newBook){
            const inputStatus = newBook[key] === "" || newBook[key] === 0;
            inputsStatusArray.push(inputStatus)
        }
        const inputsStatusCheck = inputsStatusArray.every(el => el===true);
        return inputsStatusCheck;
    }
    function handleAddClick(e) {
        console.log("the inputs are",checkFormStatus() === false ? "filled." : "empty.");
        setWarning(checkFormStatus());
        e.preventDefault();
        if(!checkFormStatus()){
            dispatch(postData(newBook));
            setNewBook({ book_title: '', genre: '', writer: '', pages_number: 0, publisher: '', release_date: '', });
        }
    }

    useEffect(()=>{
        if(warning){
            const timeOut = setTimeout(()=>{
                setWarning(false);
            },3000)
        }
    },[warning])
    
    return (
        <form className="flex flex-col w-full relative">
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
            {warning ? <div>fill the inputs</div> : ""}
        </form>
    )
}