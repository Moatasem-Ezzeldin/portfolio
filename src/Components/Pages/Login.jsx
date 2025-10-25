// Login.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../redux/authSlice";
import { motion } from "framer-motion";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/dashboard", { replace: true });
      })
      .catch(() => {
        // الخطأ يتم عرضه من state.error
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      layout
    >
      <div className="flex-center flex-col h-[98vh]">
        <h3 className="text-2xl md:text-3xl mb-6 text-[var(--cyan)] font-bold">
          This page is for admins.
        </h3>
        <Link
              className='w-[9rem] mb-8 text-white p-4 bg-[var(--cyan)] transition-300 hover:bg-[var(--cyan-light)]
              text-[1rem] rounded-[30px] py-3 cursor-pointer
               shadow-[0_3px_10px_rgba(20. 184, 166, 0.3)] hover:shadow-[0_5px_15px_rgba(20. 184, 166, 0.5)]'
              to='/'>
              Go To Home Page
          </Link>
        <div className="max-w-[450px] w-full p-8 transition-300 border-1 border-solid border-[var(--border)]
        shadow-[3px_3px_10px_var(--cyan-shadow-hover)] rounded-[14px]">
          <h2 className="text-2xl my-4 text-center font-bold text-[var(--cyan-light)]">Log In</h2>

          {error && <p className="my-4 text-center text-red-400 font-bold">{error}</p>}

          <form onSubmit={handleLogIn} className="text-gray-500">
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="text-[1.1rem] text-[var(--title)] mb-2 cursor-pointer w-fit">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="User Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="transition-300 border-1 border-solid border-[var(--border)] 
                hover:shadow-[inset_3px_3px_10px_var(--cyan-shadow)]
                rounded-[16px] p-[10px_1rem] text-[var(--cyan)] placeholder:text-[var(--subtitle)]
                shadow-[inset_2px_2px_10px_var(--cyan-shadow)] focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)]"
              />
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="password" className="text-[1.1rem] text-[var(--title)] mb-2 cursor-pointer w-fit">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="User Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="transition-300 border-1 border-solid border-[var(--border)] 
                hover:shadow-[inset_3px_3px_10px_var(--cyan-shadow)]
                rounded-[16px] p-[10px_1rem] text-[var(--cyan)] placeholder:text-[var(--subtitle)]
                shadow-[inset_2px_2px_10px_var(--cyan-shadow)] focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)]"
              />
            </div>

            <div className="mt-8 mb-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-[var(--cyan)] transition-300 hover:bg-[var(--cyan-light)] text-[1.2rem] 
                rounded-[25px] disabled:bg-[var(--cyan-disabled)] py-3
                shadow-[0_3px_10px_rgba(20. 184, 166, 0.3)] hover:shadow-[0_5px_15px_rgba(20. 184, 166, 0.5)]"
              >
                {loading ? "Logging In..." : "Log In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;