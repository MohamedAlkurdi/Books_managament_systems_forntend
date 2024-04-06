import { NavLink } from "react-router-dom";
import { fetchData } from '../redux/getSlicer';
import { useDispatch } from "react-redux";

export default function Navbar(){
    const dispatch = useDispatch();
    function handleListingBooks(){
        dispatch(fetchData());
    }
    return(
        <div className="navbar flex items-center justify-between w-full px-6 py-6 bg-custom-dark text-custom-light ">
            <div onClick={handleListingBooks} className="logo text-5xl "><NavLink to={'/'} >Library</NavLink></div>
            <div className="links flex items-center gap-4">
            <NavLink onClick={handleListingBooks} to={'/BooksList'} className="uppercase text-xl ">books list</NavLink>
            <NavLink to={'/addBook'} className="uppercase text-xl" >add books</NavLink>
            </div>
        </div>
    )
}