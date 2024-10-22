import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-3 ">
      <h1 className="font-semibold my-7 text-3xl text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          className="border rounded-lg p-3 "
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="border rounded-lg p-3 "
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="border rounded-lg bg-slate-600 p-3 text-white uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "sign in"}
        </button>
      </form>
      <div className="my-4 flex gap-2">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-500 mt-3">{error ? `${error} !` : ""}</p>
    </div>
  );
}
