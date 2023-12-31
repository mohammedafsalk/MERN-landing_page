import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userCheck, userLogin } from "../services/userSignup";
import { useUser } from "../context/UserContext";
import { message } from "antd";

export default function Login() {
  const { setRefresh } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hasErrors = () => {
    return email.trim() === "" || password.trim() === "";
  };
  const handleSubmit = async () => {
    let values = { email, password };
    const { data } = await userLogin(values);

    if (!data.error) {
      localStorage.setItem("jwtToken", data.token);
      setRefresh();
    } else {
      console.log(data.message);
      message.warning(data.message);
    }
  };

  return (
    <>
      <section className="p-4 bg-transparent flex justify-center bg-blue-300 align-middle">
        <div className="">
          <h1 className="text-xl text-blue-700 font-extrabold">Landings</h1>
        </div>
      </section>
      <main className="flex flex-col items-center align-middle p-24">
        <div className="max-w-md">
          <div className="text-center p-2 mb-5 ">
            <h1 className="text-2xl font-semibold">Login with your account</h1>
            <h2 className="text-gray-500 font-medium ">
              Get your account in ease
            </h2>
          </div>
          <div className="flex flex-col ">
            <div className=" py-3 flex flex-col gap-3">
              <div>
                <input
                  className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id=""
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className=" py-3 flex flex-col gap-3">
              <div>
                <input
                  className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id=""
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleSubmit}
                disabled={hasErrors()}
                className={`w-full p-2 ${
                  !hasErrors()
                    ? "bg-blue-600"
                    : "bg-blue-100 cursor-not-allowed "
                } rounded-lg text-white`}
              >
                Login
              </button>
              <p>
                Dont have an account ? <Link to={"/signup"}>Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
