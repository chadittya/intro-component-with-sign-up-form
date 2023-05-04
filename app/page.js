"use client";

import Image from "next/image";
import Link from "next/link";
import errorImg from "../public/icon-error.svg";

import { useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorCopy = { ...errors };
    let hasErrors = false;

    if (firstName.trim() === "") {
      errorCopy.firstName = "First Name cannot be empty";
      hasErrors = true;
    } else {
      errorCopy.firstName = "";
    }

    if (lastName.trim() === "") {
      errorCopy.lastName = "Last Name cannot be empty";
      hasErrors = true;
    } else {
      errorCopy.lastName = "";
    }

    if (!validateEmail(email)) {
      errorCopy.email = "Looks like this is not an email";
      hasErrors = true;
    } else {
      errorCopy.email = "";
    }

    if (password.trim() === "") {
      errorCopy.password = "Password cannot be empty";
      hasErrors = true;
    } else {
      errorCopy.password = "";
    }

    setErrors(errorCopy);

    if (!hasErrors) {
      setSubmitted(true);
      console.log("Form submitted sucessfully!");
      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex lg:flex-row flex-col box-border lg:gap-0 gap-16">
        <div className="lg:w-1/2 my-auto lg:pr-12 lg:pl-44 px-6 mx-auto lg:text-left text-center">
          <h1 className="font-bold text-white lg:text-[50px] text-[28px] lg:leading-[55px] leading-9 lg:tracking-[-0.52px] tracking-[-0.29px] mb-3">
            Learn to code by watching others
          </h1>
          <p className="font-medium text-white leading-[26px]">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-6 lg:pr-44 mx-auto px-6">
          <div className="w-full">
            <button className="bg-[#5E54A4] w-full  rounded-xl shadow-[0px_8px_0px_0px_#00000025] text-white text-[15px] leading-[26px] font-medium text-center lg:px-0 px-[67px] py-[18px]">
              Try it free 7 days{" "}
              <span className="pl-1 font-normal">then $20/mo. thereafter</span>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-xl shadow-[0px_8px_0px_0px_#00000025] px-10 py-10 flex flex-col gap-5">
              <div className="flex flex-col relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className={`w-full  rounded-md focus:outline-none focus:border-[#5E54A4] h-14 lg:pl-8 pl-5 ${
                    errors.firstName
                      ? "border-2 border-[#FF7979]"
                      : "border border-[#DEDEDE]"
                  }`}
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <>
                    <Image
                      className="absolute top-1/4 right-5"
                      src={errorImg}
                      alt="errors"
                    />
                    <p className="text-[#FF7979] font-medium italic text-[11px] leading-4 text-right">
                      {errors.firstName}
                    </p>
                  </>
                )}
              </div>
              <div className="flex flex-col relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className={`w-full  rounded-md focus:outline-none focus:border-[#5E54A4] h-14 lg:pl-8 pl-5 ${
                    errors.lastName
                      ? "border-2 border-[#FF7979]"
                      : "border border-[#DEDEDE]"
                  }`}
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <>
                    <Image
                      className="absolute top-1/4 right-5"
                      src={errorImg}
                      alt="errors"
                    />
                    <p className="text-[#FF7979] font-medium italic text-[11px] leading-4 text-right">
                      {errors.lastName}
                    </p>
                  </>
                )}
              </div>
              <div className="flex flex-col relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className={`w-full  rounded-md focus:outline-none focus:border-[#5E54A4] h-14 lg:pl-8 pl-5 ${
                    errors.email
                      ? "border-2 border-[#FF7979]"
                      : "border border-[#DEDEDE]"
                  }`}
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <>
                    <Image
                      className="absolute top-1/4 right-5"
                      src={errorImg}
                      alt="errors"
                    />
                    <p className="text-[#FF7979] font-medium italic text-[11px] leading-4 text-right">
                      {errors.email}
                    </p>
                  </>
                )}
              </div>
              <div className="flex flex-col relative text-sm font-semibold leading-[26px] tracking-[0.25px]">
                <input
                  className={`w-full  rounded-md focus:outline-none focus:border-[#5E54A4] h-14 lg:pl-8 pl-5 ${
                    errors.password
                      ? "border-2 border-[#FF7979]"
                      : "border border-[#DEDEDE]"
                  }`}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <>
                    <Image
                      className="absolute top-1/4 right-5"
                      src={errorImg}
                      alt="errors"
                    />
                    <p className="text-[#FF7979] font-medium italic text-[11px] leading-4 text-right">
                      {errors.password}
                    </p>
                  </>
                )}
              </div>

              <button className="w-full bg-[#38CC8B] hover:bg-[#77E2B3] h-14 rounded-md text-center uppercase font-semibold text-[15px] leading-[26px] tracking-[1px] text-white shadow-[0px_8px_0px_0px_#00000025] active:bg-[#38CC8B]">
                {submitted ? "Submitting..." : "Claim your free trial"}
              </button>
              <p className="text-center font-bold text-[11px] text-[#BAB7D4]">
                By clicking the button, you are agreeing to our{" "}
                <Link className="font-medium text-[#FF7979]" href="#">
                  Terms and Services
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
