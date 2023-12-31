import { showErrorToast } from "@/lib/utils";
import { $Enums } from "@prisma/client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

type ThemeProps = "dark" | "light";

type MainContextProps = {
    theme: string;
    customAiModels: AiModelProps;
    defaultAiModels: AiModelProps;
    handleThemeChange: () => void;

    credits: number | null;
    setCredits: React.Dispatch<React.SetStateAction<number | null>>;
    isSubscribed: boolean | null;
    setIsSubscribed: React.Dispatch<React.SetStateAction<boolean | null>>;
};

export type AiModelProps =
    | {
          id: string;
          name: string;
          status: $Enums.Status;
          version: string | null;
          imagesTaken: number;
          coverImage: string | null;
          createdAt: Date;
      }[]
    | null;

const MainContext = createContext<MainContextProps | null>(null);

export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { toast } = useToast();

    const [theme, setTheme] = useState<string>("");
    const [customAiModels, setCustomAiModels] = useState<AiModelProps>(null);
    const [defaultAiModels, setDefaultAiModels] = useState<AiModelProps>(null);

    const [credits, setCredits] = useState<number | null>(null);
    const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);

    useEffect(() => {
        const prefersDarkmode: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const systemTheme: ThemeProps = prefersDarkmode ? "dark" : "light";
        const storedTheme = localStorage.getItem("theme");

        const currentTheme = storedTheme === "dark" ? "dark" : storedTheme === "light" ? "light" : systemTheme;
        setTheme(currentTheme);

        axios
            .get("/api/user/info")
            .then((res) => {
                setDefaultAiModels(res.data.defaultAiModels);
                setCustomAiModels(res.data.customAiModels);
                setCredits(res.data.credits);
                setIsSubscribed(res.data.isSubscribed);
            })
            .catch((err) => showErrorToast(toast, err));

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (theme === "light") {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        }
        if (theme === "dark") {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        }
    }, [theme]);

    const handleThemeChange = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <MainContext.Provider
            value={{
                isSubscribed,
                setIsSubscribed,
                credits,
                setCredits,
                theme,
                defaultAiModels,
                customAiModels,
                handleThemeChange,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export const useMainContext = () => useContext(MainContext) as MainContextProps;
