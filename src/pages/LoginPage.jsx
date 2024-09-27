import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function handleInput(event) {
    console.log(event.target.value, event.target.name);
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    //1. cuvaj podatke
    localStorage.setItem("vite_user", JSON.stringify({ email, password }));
    //2. redirect on homePage

    setTimeout(() => {
        setEmail('')
        setPassword('')
        toast.success('Dobri su podaci!! Logovan si!')
        navigate('/products')
    }, 5000);

    console.log(email, password);
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl my-10">Login</h2>

      <form className="w-[50%] mx-auto border-2 border-blue-500 p-8 flex flex-col gap-3">
        <input
          type="text"
          onChange={handleInput}
          className="border px-3 py-2"
          placeholder="email"
          name="email"
          value={email}
          id=""
        />
        <input
          type="text"
          onChange={handleInput}
          className="border px-3 py-2"
          placeholder="password"
          name="password"
          value={password}
        />
        <button
          type="submit"
          className="bg-blue-400 text-blue-50 py-3"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
