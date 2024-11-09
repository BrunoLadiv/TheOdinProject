"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url('/images/universe11-infested.jpeg')] bg-cover bg-no-repeat flex justify-center">
      <div className="pb-4 px-8 flex flex-col pb-14 pt-4 font-font1 text-2xl self-start border w-[500px] rounded border-yellow-200 bg-black/50 mt-28 mx-auto">
        <h1 className="mb-4 text-center text-4xl text-yellow-300">
          Welcome to Spy Scout!
        </h1>
        <p className="text-md leading-2">
          Can you find the spies hiding in plain sight? Your mission: locate
          each one as fast as you can!
        </p>

        <Link
          href="/map/universe-infested"
          className="mt-4 text-center border border-yellow-300 py-2 rounded hover:bg-yellow-200 hover:text-black "
        >
          START GAME
        </Link>
        <Link
          href="/leaderboard"
          className="mt-4 text-center border border-yellow-300 py-2 rounded hover:bg-yellow-200 hover:text-black "
        >
          LEADERBOARD
        </Link>
      </div>
    </div>
  );
}
