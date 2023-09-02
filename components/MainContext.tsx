import { createContext, useContext, useEffect, useState } from "react";

type ThemeProps = "dark" | "light";

type MainContextProps = {
    theme: string;
    handleThemeChange: () => void;
};

const MainContext = createContext<MainContextProps | null>(null);

export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string>("");

    useEffect(() => {
        const prefersDarkmode: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const systemTheme: ThemeProps = prefersDarkmode ? "dark" : "light";
        const storedTheme = localStorage.getItem("theme");

        const currentTheme = storedTheme === "dark" ? "dark" : storedTheme === "light" ? "light" : systemTheme;
        setTheme(currentTheme);
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

    return <MainContext.Provider value={{ theme, handleThemeChange }}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext) as MainContextProps;
