import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log("form", form);

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
    } catch (err) {
      alert(err.response.data.message || "Login failed");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-red-500">Login</h1>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
