import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Book({props}){
    const { book_title, genre, writer, pages_number, publisher, release_date} = props;

    return(
        <li className="bg-custom-brown flex flex-col items-center justify-center gap-6 p-4 rounded-md">
            <div className="bookData flex flex-col items-center justify-center gap-3">
            <h1 className="text-3xl text-center">{book_title}</h1>
            <h2>{genre}</h2>
            <h3>{writer}</h3>
            <p>{pages_number}</p>
            <p>{publisher}</p>
            <p>{release_date}</p>
            </div>
            <div className="functions flex w-full justify-between ">
                <button className="deleteBtn text-center w-1/2">delete</button>
                <NavLink to={'/updateBook'} className="updateBtn text-center w-1/2">update</NavLink>
            </div>
        </li>
    )
}