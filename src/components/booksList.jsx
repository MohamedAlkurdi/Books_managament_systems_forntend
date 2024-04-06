import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Book from "./book";

export default function BooksList(){
    const booksData = useSelector(state=>state.library_get);
    const [newableList,setNewableList] = useState(booksData);
    
    const renderBooks = newableList.books.map(el=>{
        return <Book props={el}/>
        // return <li className="p-10 flex flex-col"><h1>{el.book_title}</h1><p>{el.writer}</p><p>{el.publisher}</p></li>
    })
    useEffect(()=>{
        console.log('booksData: ',booksData)
        setNewableList(booksData)
    },[booksData])
    return(
        <ul className={`p-5 custom-grid-template w-full grid grid-cols-auto-fill grid-cols-1fr gap-5`}>
            {renderBooks}
        </ul>
    )
}