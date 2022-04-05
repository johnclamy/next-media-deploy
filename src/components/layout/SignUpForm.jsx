import { useState } from 'react'

const SignUpForm = ({ onToggleSignin }) => {
  const [username, setUsername] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);
  const isInValid =
    username === "" || passwordOne === "" || passwordOne !== passwordTwo;

  const handleSubmit = (e) => {
    e.preventDefault();
    onToggleSignin();
    console.log(username, passwordOne, error);
    setUsername("");
    setPasswordOne("");
    setPasswordTwo("");
    setError(null);
  };

  return (
    <>
      <form className="flex flex-col items-center my-3 p-6 bg-amber-400">
        <h1 className="text-black pt-2 pb-4 text-xl font-bold text-center">
          Sign Up
        </h1>
        <div className=" flex flex-col p-8 bg-slate-50 max-w-md">
          <div className="flex justify-between align-center">
            <label className="text-md text-gray-800" htmlFor="username">
              username
            </label>
            <input
              id="username"
              className="border py-2 px-3 text-gray-900"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <label className="text-md text-gray-800" htmlFor="passwordOne">
              password
            </label>
            <input
              id="passwordOne"
              className="border py-2 px-3 text-gray-900"
              type="password"
              value={passwordOne}
              onChange={(e) => setPasswordOne(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <label className="text-md text-gray-800" htmlFor="passwordTwo">
              confirm password
            </label>
            <input
              id="passwordTwo"
              className="border py-2 px-3 text-gray-900"
              type="password"
              value={passwordTwo}
              onChange={(e) => setPasswordTwo(e.target.value)}
            />
          </div>
          <button
            disabled={isInValid}
            onClick={handleSubmit}
            className="mt-6 py-2 px-4 bg-slate-400 hover:bg-slate-600 text-white uppercase"
          >
            sign up
          </button>
        </div>
      </form>
      {error && <p>{error.message}</p>}
    </>
  );
};

export default SignUpForm