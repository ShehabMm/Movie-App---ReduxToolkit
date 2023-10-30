import { Link } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [check, setcheck] = useState(true);
const navigate = useNavigate()

  const handleSubmit =async(e)=>{

e.preventDefault()

try {
  
  await axios.post('http://localhost:8080/signup', {  username,email ,password }).then(() => {
  

  setcheck(false)
  })
  
  setTimeout(() => {
    navigate("/")
  
  }, 5000);
  
  
  


} catch (error) {
  console.log(error)
}


  }
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl bg-red-400 text-center my-7 p-5">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center mx-auto  max-w-lg position-relative">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg  w-56"
          id="username"
          autoComplete="false"

          onChange={(eo)=>{

            setUsername(eo.target.value)

          }}
        />

        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg  w-56"
          autoComplete="false"

          onChange={(eo)=>{
            setEmail(eo.target.value)


          }}
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg w-56"
          onChange={(eo)=>{

            setPassword(eo.target.value)

          }}
        />

        <button className="bg-slate-700 rounded-lg uppercase hover:opacity-70 disabled:opacity-20 w-56 text-white">

        {check?  "Sign up":"Loading..."    }
        </button>
      </form>

      <div className="flex gap-2 my-2 justify-center items-center">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700 "> Sign in </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
