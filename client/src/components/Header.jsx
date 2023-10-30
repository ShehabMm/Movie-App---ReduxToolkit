import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Store from "../pages/Context";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../Redux/searchMovSlice";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
const Header = () => {
  const { userName, setUserName } = useContext(Store);

  const [res, setRes] = useState("");


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const perform = () => {
    dispatch(getSearch(res));

    navigate("/search");
  };

  return (
    <header className="bg-slate-900 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3  ">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <Link to="/">
            <span className="text-slate-500">Movies</span>
            <span className="text-slate-700">Planet</span>
          </Link>
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            perform();
          }}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
                    <FaSearch className="text-slate-500 mr-2" />

          <input
            onChange={(e) => {
              setRes(e.target.value);
            }}
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-slate-800"
          />

<Button onClick={()=>{
perform()

}} variant="text" color="primary" size="small">
  Search Now
</Button>

        </form>

        <ul className="flex justify-between gap-8">
          <Link to="/">
            <li className="hidden sm:inline hover:underline transition-all- duration-1000">
              Home
            </li>
          </Link>
          <Link
            onClick={() => {
              if (userName) {
                localStorage.clear();
                setUserName("");
              }
            }}
            to="/sign-in"
          >
            <li className="hidden sm:inline hover:underline">
              {userName ? "Sign Out" : "Sign in"}
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
