import { signIn } from "next-auth/react";
import { LoginButton } from "./components/LogIn";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Home page</h1>
      <div className="bg-white text-gray-800 p-2 px-8 rounded-md font-medium mx-3 ">
        <LoginButton className="hover:cursor-pointer">
          Login
        </LoginButton>
      </div>
    </div>
  );
}
