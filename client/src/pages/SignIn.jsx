import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Store from "./Context";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setcheck] = useState(true);
  const navigate = useNavigate();
  const [phrase, setphrase] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/api", { email, password })
      .then((res) => {
        setphrase(res.data);

        if (res.data === "success") {
          setUserName(email);
          localStorage.name = email;

          setcheck(false);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      });
  };

  // eslint-disable-next-line no-unused-vars
  const { userName, setUserName } = useContext(Store);
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl bg-red-400 text-center my-7 p-5">Sign In</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 justify-center items-center mx-auto  max-w-lg position-relative"
      >
        <input
          type="email"
          placeholder="email"
          id="email"
          className="mx-24 p-3 rounded-lg  w-full sm:w-64"
          autoComplete="off"
          onChange={(eo) => {
            setEmail(eo.target.value);
          }}
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          className="mx-24 p-3 rounded-lg  w-full sm:w-64"
          onChange={(eo) => {
            setPassword(eo.target.value);
          }}
        />

        <button className="bg-slate-700 rounded-lg uppercase hover:opacity-70 disabled:opacity-20 w-56 text-white">
          {check ? "Sign in" : "Loading..."}
        </button>
        <p>{phrase}</p>
      </form>

      <div className="flex gap-2 my-2 justify-center items-center">
        <p>Don &apos;t Have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700 "> Sign up </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
