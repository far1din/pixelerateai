import { DefaultDimensionsProps } from "@/lib/defaults";
import { createContext, useContext, useState } from "react";

type HomeContextProps = {
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
    negativePrompt: string;
    setNegativePrompt: React.Dispatch<React.SetStateAction<string>>;
    width: DefaultDimensionsProps;
    setWidth: React.Dispatch<React.SetStateAction<DefaultDimensionsProps>>;
    height: DefaultDimensionsProps;
    setHeight: React.Dispatch<React.SetStateAction<DefaultDimensionsProps>>;
    numberOfOutputs: number;
    setNumberOfOutputs: React.Dispatch<React.SetStateAction<number>>;
};

const HomeContext = createContext<HomeContextProps | null>(null);

export const HomeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [prompt, setPrompt] = useState<string>("");
    const [negativePrompt, setNegativePrompt] = useState<string>("");
    const [width, setWidth] = useState<DefaultDimensionsProps>(896);
    const [height, setHeight] = useState<DefaultDimensionsProps>(896);
    const [numberOfOutputs, setNumberOfOutputs] = useState<number>(1);

    return (
        <HomeContext.Provider
            value={{
                prompt,
                setPrompt,
                negativePrompt,
                setNegativePrompt,
                width,
                setWidth,
                height,
                setHeight,
                numberOfOutputs,
                setNumberOfOutputs,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};

export const useHomeContext = () => useContext(HomeContext) as HomeContextProps;
