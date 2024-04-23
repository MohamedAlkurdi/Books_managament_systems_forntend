import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteBookAndFetchData } from "../redux/deleteSlicer";
import {confirmDeletion} from '../redux/deleteSlicer'

export default function Book({ props }) {
    const { _id, book_title, genre, writer, pages_number, publisher, release_date } = props;
    const dispatch = useDispatch();


    function handleDelete() {
        dispatch(confirmDeletion({confirm:false,id:""}))
        dispatch(confirmDeletion({confirm:true,id:_id}))
        // console.log("clicked element's id:", _id);
        // dispatch(deleteBookAndFetchData(_id));
    }

    return (
        <li className="book bg-custom-brown flex flex-col items-center justify-center gap-6 p-4 rounded-md relative">
            <div className="bookData flex flex-col items-center justify-center gap-5 w-full">
                <h1 className="text-3xl text-center flex justify-center items-center italic font-bold text-custom-light text-shadow pt-4 min-h-[110px] relative z-10">{book_title}</h1>
                <h2 className="text-xl flex justify-between px-5 items-center w-full"><span className="capitalize ">Genre:</span>{genre}</h2>
                <h3 className="text-xl flex justify-between px-5 items-center w-full"><span className="capitalize ">Writer:</span>{writer}</h3>
                <p className="text-xl flex justify-between px-5 items-center w-full"><span className="capitalize ">Pages Number:</span>{pages_number}</p>
                <p className="text-xl flex justify-between px-5 items-center w-full"><span className="capitalize ">Publisher:</span>{publisher}</p>
                <p className="text-xl flex justify-between px-5 items-center w-full"><span className="capitalize ">Released Date:</span>{release_date}</p>
            </div>
            <div className="functions flex w-full justify-between py-4 px-8 gap-6 ">
                <button onClick={handleDelete} className="deleteBtn text-center text-xl text-custom-light bg-red-800 py-1 cursor-pointer rounded-xl w-1/2 w-1/2">DELETE</button>
                <NavLink to={ '/updateBook'} state={{id:_id}} className="updateBtn text-center text-xl text-custom-light bg-custom-dark py-1 cursor-pointer rounded-xl w-1/2">UPDATE</NavLink>
            </div>
        </li>
    )
}