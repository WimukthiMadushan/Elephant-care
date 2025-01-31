import React, { useState } from "react";
import Login_Image from "./../../assets/Login_Image.png";
import { Stack, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion"; // Ensure you use 'framer-motion'

const Login = ({ setShowLogin, mode }) => {
  const [signState, setSignState] = useState(mode);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('path/to/your/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        className="absolute top-5 right-5 text-white z-60"
        onClick={() => setShowLogin(false)}
      >
        <CloseIcon />
      </button>
      <div
        className="bg-white rounded-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative"
        style={{
          transform: "translate(-50%, -50%)",
          top: "48%",
          left: "30%",
        }}
      >
        <div className="flex-1 bg-gray-100 p-6 flex items-center justify-center">
          <img
            src={Login_Image}
            alt="Login Illustration"
            className="w-3/4 md:w-full object-contain"
          />
        </div>

        <div className="flex-1 p-8">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
            {signState}
          </h1>
          <form>
            {signState === "Sign Up" && (
              <Stack spacing={3} className="mb-4">
                <TextField label="Your Name" variant="outlined" fullWidth />
              </Stack>
            )}
            <Stack spacing={3}>
              <TextField
                label="Your Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Stack>
            <Button
              variant="contained"
              fullWidth
              style={{
                backgroundColor: "#d46429",
                color: "#fff",
                marginTop: "1.5rem",
                padding: "0.75rem",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              {signState}
            </Button>
            <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Remember Me
              </label>
              <p className="cursor-pointer hover:text-gray-700">Need Help?</p>
            </div>
          </form>

          <div className="mt-8 text-gray-600 text-center">
            {signState === "Sign In" ? (
              <p>
                Need to Create Account?{" "}
                <span
                  className="text-d46429 font-semibold cursor-pointer hover:underline"
                  onClick={() => setSignState("Sign Up")}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already Have an Account?{" "}
                <span
                  className="text-d46429 font-semibold cursor-pointer hover:underline"
                  onClick={() => setSignState("Sign In")}
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
