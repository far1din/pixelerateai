"use client";
import { GithubSVG } from "@/lib/svg";
import { signIn } from "next-auth/react";

function GithubButton() {
    return (
        <button
            onClick={() => signIn("github")}
            className="hover:opacity-80 ease-in duration-75 flex justify-between items-center bg-slate-950 w-80 md:w-96 text-neutral-100 p-2.5 rounded-xl text-2xl"
        >
            <GithubSVG width={37} height={37} className="fill-neutral-100" />
            <span className="w-full">Sign in with github</span>
        </button>
    );
}

export default GithubButton;
