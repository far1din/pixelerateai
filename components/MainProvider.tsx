"use client";
import { SessionProvider } from "next-auth/react";
import { MainContextProvider } from "./MainContext";

function MainProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <MainContextProvider>{children}</MainContextProvider>
        </SessionProvider>
    );
}

export default MainProvider;
