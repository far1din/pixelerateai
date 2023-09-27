"use client";
import Navigation from "@/components/Navigation";
import MasonaryGrid from "./components/MasonaryGrid";

function page() {
    return (
        <main className="h-screen flex flex-col items-center w-[calc(100vw-18px)]">
            <div className="max-w-7xl w-full">
                <Navigation />
                <div className="flex flex-col p-4 gap-5">
                    {/* header */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold">Generated Images</h1>
                        <p className="text-neutral-500 text-lg">All your images! 📸</p>
                    </div>
                    {/* grid */}
                    <MasonaryGrid />
                </div>
            </div>
        </main>
    );
}

export default page;
