import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import supabase from "../../config/supabase";
import { toast } from "react-toastify";

export default function Log_in() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    if (searchParams.get("verified") === "true") {
      toast.success("✅ Your email is verified! You can now log in.");
    }
  }, [searchParams]);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.trim() && email.trim()) {
      try {
        const { data: supabasedata } = await supabase.auth.signInWithPassword({
          email,password
        });

        if (supabasedata) {
          navigate("/home");
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
          <Link to='/signUp'>create accout and sign up</Link>
          <button
            type="submit"
            className="mt-2 rounded-xl bg-[var(--nb-green)] text-white px-4 py-2 text-sm font-semibold"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
