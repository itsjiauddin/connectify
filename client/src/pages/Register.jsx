import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

import { register, reset } from "../features/auth/authSlice";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, message, isSuccess, user, navigate, dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, email, password };
    dispatch(register(userData));
  };

  return (
    <div className="space-y-4 text-center">
      <div className="bg-primary-1 px-4 py-3 shadow-sm rounded-md">
        <h1 className="text-h1 font-bold">Connectify</h1>
      </div>
      <div className="bg-primary-1 p-4 shadow-sm rounded-md space-y-4">
        <h3 className="font-bold text-h3">Create a new account</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="bg-primary-2 block mx-auto outline-none px-4 py-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              className="bg-primary-2 block mx-auto outline-none px-4 py-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              className="bg-primary-2 block mx-auto outline-none px-4 py-2 rounded-md"
            />
          </div>
          {isLoading ? (
            <ClipLoader color="#86efac" loading={isLoading} />
          ) : (
            <>
              <button
                type="submit"
                className="bg-primary-3 px-4 py-2 rounded-md text-primary-1"
              >
                Register
              </button>
              <Link to={`/login`}>
                <p className="mt-4">Already have an account. Login here.</p>
              </Link>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
