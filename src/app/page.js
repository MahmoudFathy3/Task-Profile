import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-10">
      <h1 className="text-4xl font-bold">Task</h1>
      <div className="flex items-center gap-5">
        <Link href="/login">
          <button className="bg-black opacity-90 pr-10 pl-10 pt-3 pb-3 rounded-lg  text-white">
            Login
          </button>
        </Link>
        <Link href="/profile">
          <button className="bg-black opacity-90 pr-10 pl-10 pt-3 pb-3 rounded-lg  text-white">
            Profile
          </button>
        </Link>
      </div>
    </main>
  );
}
