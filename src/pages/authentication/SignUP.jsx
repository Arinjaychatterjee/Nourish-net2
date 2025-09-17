import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../config/supabase";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
 
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() && password.trim() && email.trim()) {
      try {
        const { data: supabasedata } = await supabase.auth.signUp({
          email:email,
          password:password,
          options:{
            data:{
              username: name
            }
            ,
            emailRedirectTo:`${window.location.origin}/login?verified=true`
          }
        });
  
        if (supabasedata ) {
          navigate("/");
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container-px max-w-7xl mx-auto py-10">
      <div className="max-w-md mx-auto rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="font-display text-2xl font-bold text-center">Login</h1>
        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-neutral-800">
              Name / ID
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-neutral-300 px-3 py-2"
              placeholder="Enter your name or ID"
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-neutral-800">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="rounded-xl border border-neutral-300 px-3 py-2"
              placeholder="Enter your email id"
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-neutral-800">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="rounded-xl border border-neutral-300 px-3 py-2"
              placeholder="Enter password"
              required
            />
          </div>
          <Link to='/login'> Already have an account?</Link>
          <button
            type="submit"
            className="mt-2 rounded-xl bg-[var(--nb-green)] text-white px-4 py-2 text-sm font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
