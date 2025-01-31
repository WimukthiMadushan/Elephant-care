import React, { useEffect, useState } from "react";
import Login_Image from "./../../assets/Login_Image.png";
import { Stack, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { auth } from "./../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";

const Login = ({ setShowLogin, mode }) => {
  const [signState, setSignState] = useState(mode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      if (signState === "Sign Up") {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully");
        setShowLogin(false);
        toast.success("User created successfully", {
          position: "bottom-right",
          theme: "colored",
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully");
        setShowLogin(false);
        toast.success("Sign In successfully", {
          position: "bottom-right",
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Somthing Wrong", {
        position: "bottom-right",
        theme: "colored",
      });
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center"
    >
      <button
        className="absolute top-5 right-5 text-white z-60"
        onClick={() => setShowLogin(false)}
      >
        <CloseIcon />
      </button>
      <div className="bg-white rounded-lg max-w-3xl w-full flex flex-col md:flex-row overflow-hidden relative">
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
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
              </Stack>
            )}
            <Stack spacing={3}>
              <TextField
                label="Your Email"
                type="email"
                variant="outlined"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
            <Button
              variant="contained"
              fullWidth
              style={{
                backgroundColor: "#d46429",
                color: "#fff",
                marginTop: "1.5rem",
              }}
              onClick={signIn}
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
