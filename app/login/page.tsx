"use client";
import { signIn } from "next-auth/react";
import { useRouter as UseRouter } from "next/navigation";
import React, { FormEvent, useRef as UseRef } from "react";

const page = () => {
  const usernameRef = UseRef<HTMLInputElement>(null);
  const passwordRef = UseRef<HTMLInputElement>(null);

  const router = UseRouter();
  const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    e.preventDefault();
    signIn("credentials", {
      username,
      password,
      redirect: false,
    }).then((res) => {
      if (!res?.ok) {
        console.log(res);
      } else {
        console.log(res);
        router.push("/");
      }
    });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              فرم ورود به اکانت
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handlesubmit}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  نام کاربری
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  ref={usernameRef}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  گذرواژه
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  ref={passwordRef}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                ورود به اکانت
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                اکانت نساختی هنوز؟{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  ثبت نام
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
