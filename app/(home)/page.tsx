"use client";
import Navigation from "@/components/Navigation";
import Inputs from "./components/Inputs";
import { HomeContextProvider } from "./utils/HomeContext";
import PickModel from "./components/PickModel";
import ImageView from "./components/ImageView";

export default function Home() {
    return (
        <main className="h-screen flex flex-col items-center">
            <div className="w-full">
                <Navigation />
                <HomeContextProvider>
                    <div className="grid md:grid-cols-10 md:h-[calc(100vh-65px)] md:max-h-[calc(100vh-65px)]">
                        <div className="border-r-2 flex flex-col gap-4 p-4 bg-slate-100 dark:bg-slate-950 md:col-span-4 lg:col-span-3 2xl:col-span-2">
                            <h3 className="text-2xl font-semibold">Inputs</h3>
                            <Inputs />
                        </div>
                        <div className="overflow-hidden flex flex-col md:col-span-6 lg:col-span-7 2xl:col-span-8">
                            <PickModel />
                            <ImageView />
                        </div>
                    </div>
                </HomeContextProvider>
            </div>
        </main>
    );
}
