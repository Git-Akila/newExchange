import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatternLock from "react-pattern-lock";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Slicers/loginSlice"; // Adjust import based on your file structure
// import { setToken } from "./path/to/your/tokenSlice"; // Adjust import based on your file structure

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pattern, setPattern] = useState([]);
  const [isPatternLocked, setIsPatternLocked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>There was an error fetching the data.</p>;
  }

  const handleRegister = async (e) => {
    e.preventDefault();}

  //   if (!isPatternLocked) {
  //     toast.error("Please set a pattern first!");
  //     return;
  //   }

  //    try {
  //     const res = await axios.post("/api/login", {
  //       email,
  //       password,
  //       pattern: pattern.join("")
  //     });

  //     const token = res.data?.token;
  //     if (token) {
  //       localStorage.setItem("token", token);
  //       dispatch((token)); 
  //       toast.success("Login successful!");
  //       setEmail("");
  //       setPassword("");
  //       setPattern([]);
  //       setIsPatternLocked(false);
  //       navigate("/");
  //     } else {
  //       toast.error("Failed to retrieve token.");
  //     }
  //   } catch (error) {
  //     console.error("Login error", error);
  //     toast.error(
  //       error.response?.data?.message || "An error occurred during login."
  //     );
  //     if (error.response) {
  //       const { status, data } = error.response;
  //       if (status === 400 && data.message.includes("Retry limit exceeded")) {
  //         toast.error("Too many login attempts. Please wait for 10 seconds before trying again.");
  //       } else {
  //         toast.error(`Error: ${data.message || "An error occurred during login."}`);
  //       }
  //     } else if (error.request) {
  //       toast.error("No response from the server. Please try again later.");
  //     } else {
  //       toast.error("An unexpected error occurred.");
  //     }
  //     setIsPatternLocked(false);
  //   }
  // };

  // const handlePatternChange = (newPattern) => {
  //   setPattern(newPattern);
  // };

  // const handlePatternFinish = () => {
  //   setIsPatternLocked(true);
  // };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleRegister}
        className="bg-blue-900 justify-center items-center flex-col p-3"
      >
        <div className="justify-center items-center">
          <h2 className="text-white text-2xl font-bold p-3">Login</h2>
          <input
            placeholder="Enter email"
            className="py-3 mb-2 px-4 rounded-lg border w-full border-gray-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Enter password"
            className="py-3 mb-2 px-4 rounded-lg border w-full border-gray-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="justify-center items-center flex bg-blue-100 mb-4">
          <PatternLock
            width={300}
            pointSize={15}
            size={3}
            path={pattern}
            // onChange={handlePatternChange}
            // onFinish={handlePatternFinish}
            disabled={isPatternLocked}
          />
        </div>

        <div className="items-center justify-center flex">
          <button
            type="submit"
            className="p-3 m-2 bg-white rounded-2xl text-center"
            disabled={!isPatternLocked}
          >
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
