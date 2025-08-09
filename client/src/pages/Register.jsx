import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );
      localStorage.setItem("token", res.data.token);

      alert("Registration successful!");
    } catch (err) {
      alert(err.response.data.message || "Registration failed");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input type="name" placeholder="Username" onChange={handleChange} />
      <input type="email" placeholder="Email" onChange={handleChange} />
      <input type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
