import { GithubSVG } from "@/lib/svg";
import ImageSlider from "./components/ImageSlider";

function Auth() {
    return (
        <main className="h-screen">
            <div className="grid md:grid-cols-2 items-center w-full h-full p-2">
                <div className="flex flex-col items-center gap-5">
                    <div className="w-80 md:w-96 flex flex-col gap-1">
                        <h1 className="text-4xl font-bold">Welcome</h1>
                        <p className="text-neutral-500 text-lg">Please sign in to continue...</p>
                    </div>
                    <button className="hover:opacity-80 ease-in duration-75 flex justify-between items-center bg-slate-950 w-80 md:w-96 text-neutral-100 p-2.5 rounded-xl text-2xl">
                        <GithubSVG width={37} height={37} className="fill-neutral-100" />
                        <span className="w-full">Sign in with github</span>
                    </button>
                </div>
                <div className="hidden bg-black h-full text-neutral-100 md:flex flex-col gap-7 justify-center items-center p-4">
                    <div className="flex flex-col items-center text-center gap-2">
                        <p className="text-4xl font-bold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-cyan-600">
                                AI-Generated
                            </span>{" "}
                            Self-Portraits
                        </p>
                        <p className="text-2xl font-medium">
                            See yourself through{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-cyan-600">
                                the eyes of AI
                            </span>
                        </p>
                    </div>
                    <ImageSlider />
                </div>
            </div>
        </main>
    );
}

export default Auth;
