"use client";
import { SessionProvider } from "next-auth/react";
import { MainContextProvider } from "./MainContext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

function MainProvider({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const successMessage = searchParams.get("success-message");
    const errorMessage = searchParams.get("error-message");
    const { toast } = useToast();
    useEffect(() => {
        if (successMessage) {
            toast({
                description: successMessage,
                className: "text-neutral-100 bg-green-600 dark:bg-green-500 font-medium",
            });
        }
        if (errorMessage) {
            toast({
                variant: "destructive",
                description: errorMessage,
            });
        }
        // eslint-disable-next-line
    }, [searchParams]);

    return (
        <SessionProvider>
            <MainContextProvider>{children}</MainContextProvider>
        </SessionProvider>
    );
}

export default MainProvider;
