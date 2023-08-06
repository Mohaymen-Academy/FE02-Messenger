import React, { useState } from "react";

export default function Login() {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });


    const handleRegisterClick = (event) => {
        event.preventDefault();
        // Check for empty fields
        if (!values.username || !values.password) {
            alert("لطفاً همه فیلدها را پر کنید.");
            return;
        } else {
            console.log(values);
        }
    };

    const changeinput = (name, value) => {
        setValues({
            ...values,
            [name]: value
        });
    };
    return (
        <div dir="rtl" className="bg-complete">
            <div className="main-div">
                <div className="flex flex-col justify-center items-center">
                    <a href="/">
                        <img width={100} src="images/logo.png" />
                    </a>
                    <div className="mb-5 text-[20px] text-text1">ورود</div>
                </div>
                <div className="w-full px-6 py-4  overflow-hidden bg-color1 shadow-md  border rounded sm:max-w-lg sm:rounded-lg ">
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-text1 undefined mt-3"
                            >
                                نام کاربری
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="useername"
                                    className="input-div"
                                    onChange={(e) => { changeinput("username", e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-text1 undefined"
                            >
                                رمز عبور
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="input-div"
                                    onChange={(e) => { changeinput("password", e.target.value) }}
                                />
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-xs text-color4 hover:underline"
                        >
                            رمز عبور خود را فراموش کرده اید؟
                        </a>
                        <div className="flex items-center mt-4">
                            <button
                                onClick={handleRegisterClick}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#1e7889] rounded-md hover:bg-[#7fc2cf] focus:outline-none focus:bg-[#135461]"
                            >
                                ورود 
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-text1">
                         اکانت ندارید؟{" "}
                        <span>
                            <a className="text-[#1e7889] hover:underline" href="/Register">
                                ثبت نام کنید
                            </a>
                        </span>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 text-text1">یا</p>
                        <hr className="w-full" />
                    </div>
                    <div className="my-6 space-y-2">
                        <button
                            aria-label="Login with Google"
                            type="button"
                            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5 fill-current mx-5 text-text1"
                            >
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p className="text-text1">ورود با حساب گوگل</p>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}