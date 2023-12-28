import React from "react";
import useValidations from "../hooks/useValidations";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { userSignup } from "../services/userSignup";

export default function Signup() {
  const navigate = useNavigate();
  const {
    name,
    setName,
    email,
    setEmail,
    isEmailValid,
    mobileNumber,
    setMobileNumber,
    isMobileNumberValid,
    password,
    setPassword,
    isPasswordValid,
    confirmPassword,
    setConfirmPassword,
    isConfirmPasswordValid,
    hasErrors,
  } = useValidations();

  const handleSubmit = async () => {
    let values = { email, password, mobileNumber, name };
    const { data } = await userSignup(values);
    if (!data.error) {
      navigate("/login");
    } else {
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
        <div className="max-w-md ">
          <div className="text-center p-2 mb-5 ">
            <h1 className="text-2xl font-semibold">Create your account</h1>
            <h2 className="text-gray-500 font-medium ">
              Set-up your account in ease
            </h2>
          </div>
          <div className="flex flex-col ">
            <div className=" py-3 flex flex-col gap-3">
              <h2 className="text-gray-500 font-medium">Basic Details</h2>
              <div>
                <input
                  className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  id=""
                  placeholder="User name"
                />
              </div>
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
                {!isEmailValid && (
                  <p className="text-red-700 ">Email is not valid</p>
                )}
              </div>
              <div>
                <input
                  className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  name="mobile"
                  id=""
                  placeholder="Mobile Number"
                />
                {!isMobileNumberValid && (
                  <p className="text-red-700">Mobile number is not valid</p>
                )}
              </div>
            </div>
            <div className=" py-3 flex flex-col gap-3">
              <h2 className="text-gray-500 font-medium">Set a password</h2>
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
                {!isPasswordValid && (
                  <p className="text-red-700">
                    Must 6 characters,1 uppercase letter and one number is must!
                  </p>
                )}
              </div>
              <div>
                <input
                  className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id=""
                  placeholder="Confirm your password"
                />
                {!isConfirmPasswordValid && (
                  <p className="text-red-700">Password not matching</p>
                )}
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
                Signup
              </button>
              <p>
                Already have an account ? <Link to={"/login"}>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
