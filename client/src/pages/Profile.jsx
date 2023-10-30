import {useRef} from 'react'
const Profile = () => {


  const file = useRef(null)
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-center text-black-700 text text-3xl my-5 font-semibold">
        Profile
      </h1>

      <form className="flex flex-col gap-10">
        <input type="file" ref={file}    hidden  accept='image/*'/>
        <img
          className="rounded-full h-20 w-20 self-center cursor-pointer mt-2"
          src="https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20.jpg"
          alt="profile"

          onClick={()=>{
            file.current.click()

          }}
        />
        <input
          type="text"
          placeholder="username"
          className="p-3 rounded-lg border "
        />
        <input
          type="text"
          placeholder="email"
          className="p-3 rounded-lg border "
        />
        <input
          type="text"
          placeholder="password"
          className="p-3 rounded-lg border "
        />

        <button className="bg-slate-700 round-lg p-3 text-white uppercase">
          update
        </button>
        {/* <button>create listing</button> */}
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer font-semibold">
          Delete Account
        </span>
        <span className="text-red-700 cursor-pointer font-semibold">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
