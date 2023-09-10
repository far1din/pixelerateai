import { $Enums } from "@prisma/client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type ThemeProps = "dark" | "light";

type MainContextProps = {
    theme: string;
    customAiModels: CustomAiModelProps;
    handleThemeChange: () => void;
};

type CustomAiModelProps =
    | {
          name: string;
          staus: $Enums.CustomAiModelStatus;
          version: "created" | null;
          coverImage: string | null;
          createdAt: Date;
      }[]
    | null;

const MainContext = createContext<MainContextProps | null>(null);

export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string>("");
    const [customAiModels, setCustomAiModels] = useState<CustomAiModelProps>(null);

    useEffect(() => {
        const prefersDarkmode: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const systemTheme: ThemeProps = prefersDarkmode ? "dark" : "light";
        const storedTheme = localStorage.getItem("theme");

        const currentTheme = storedTheme === "dark" ? "dark" : storedTheme === "light" ? "light" : systemTheme;
        setTheme(currentTheme);

        axios
            .get("/api/user/models")
            .then((res) => setCustomAiModels(res.data.customAiModels))
            .catch((err) => console.log(err));
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

    return <MainContext.Provider value={{ theme, customAiModels, handleThemeChange }}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext) as MainContextProps;
