import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Error from "./error";
import Book from "./book";
import Loading from "./Loading";
import {deleteBookAndFetchData} from '../redux/deleteSlicer'
import {confirmDeletion} from "../redux/deleteSlicer"

export default function BooksList() {
    const booksData = useSelector(state => state.library_get);
    const deletionConfirm = useSelector(state => state.library_delete);
    const dispatch = useDispatch();
    const [newableList, setNewableList] = useState(booksData);
    const [loading, setLoading] = useState(booksData.isLoading);
    const [error, setError] = useState(booksData.error);
    const [showDeletionConfirm, setShowDeletionConfirm] = useState(false);
    const [bookToBeDeleted, setBookToBeDeleted] = useState(deletionConfirm.bookID);

    // const error = true;
    // const loading = true

    function handleDelete() {
        setShowDeletionConfirm(false);
        dispatch(deleteBookAndFetchData(bookToBeDeleted));
        dispatch(confirmDeletion({confirm:false,id:""}))
    }

    function rejectDelete() {
        setShowDeletionConfirm(false);
    }

    useEffect(() => {
        setLoading(booksData.isLoading);
        setError(booksData.error)
    }, [booksData])

    useEffect(() => {
        console.log("deletionConfirm: ", deletionConfirm);
        if (deletionConfirm.bookID !== "") {
            setShowDeletionConfirm(deletionConfirm.delete)
            setBookToBeDeleted(deletionConfirm.bookID);
        }
    }, [deletionConfirm])

    const renderBooks = newableList.books.map((el) => {
        return <Book key={el._id} props={el} />
    })
    useEffect(() => {
        console.log('booksData: ', booksData)
        setNewableList(booksData)
    }, [booksData])
    return (
        <div className="bookList w-full flex justify-center custom_height relative">
            {
                error ? <Error /> :
                    loading ? <Loading /> :
                        <ul className={`p-5 custom-grid-template w-full grid grid-cols-auto-fill grid-cols-1fr gap-5`}>
                            {renderBooks}
                        </ul>}
            {showDeletionConfirm ?
                <div className="confirmPopup bg-custom-dark p-8  w-96 flex flex-col fixed left-1/2 top-1/2 translate-x-1/2 translate-y-1/2">
                    <p>are you sure?</p>
                    <div className="confirmSlection w-full gap-2">
                        <button onClick={handleDelete} className="text-custom-light">yes</button>
                        <button onClick={rejectDelete} className="text-custom-light">no</button>
                    </div>
                </div> : ""
            }

        </div>
    )
}