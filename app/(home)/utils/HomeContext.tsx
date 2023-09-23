import { AiModelProps, useMainContext } from "@/components/MainContext";
import { DefaultDimensionsProps, PUBLIC_IMAGES } from "@/lib/defaults";
import { createContext, useContext, useEffect, useState } from "react";

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

    isCreating: boolean;
    models: AiModelProps;
    modelVersion: string | null;
    generatedImages: string[] | null;
    imageIndex: number;
    setImageIndex: React.Dispatch<React.SetStateAction<number>>;
    setModelVersion: React.Dispatch<React.SetStateAction<string | null>>;
    handleCreate: () => void;
};

const HomeContext = createContext<HomeContextProps | null>(null);

const TEST_IMAGES = [
    PUBLIC_IMAGES.avatarPlaceholder,
    PUBLIC_IMAGES.vanGoghDiffusionCover,
    PUBLIC_IMAGES.sdxlCover,
    PUBLIC_IMAGES.sdxlTngInteriorCover,
];

export const HomeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { defaultAiModels, customAiModels } = useMainContext();

    const [prompt, setPrompt] = useState<string>("");
    const [negativePrompt, setNegativePrompt] = useState<string>("");
    const [width, setWidth] = useState<DefaultDimensionsProps>(896);
    const [height, setHeight] = useState<DefaultDimensionsProps>(896);
    const [numberOfOutputs, setNumberOfOutputs] = useState<number>(1);

    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [models, setModels] = useState<AiModelProps>(null);
    const [modelVersion, setModelVersion] = useState<string | null>(null);

    const [generatedImages, setGeneratedImages] = useState<string[] | null>(null);
    const [imageIndex, setImageIndex] = useState<number>(0);

    useEffect(() => {
        if (defaultAiModels && customAiModels) {
            setModels([...customAiModels, ...defaultAiModels].filter((model) => model.status === "created"));
        }
    }, [defaultAiModels, customAiModels]);

    useEffect(() => {
        if (models) {
            setModelVersion(models[0].version);
        }
    }, [models]);

    const handleCreate = () => {
        const data = { prompt, negativePrompt, width, height, numberOfOutputs, modelVersion };
        setIsCreating(true);
        setGeneratedImages(null);
        setImageIndex(0);

        setTimeout(() => {
            setIsCreating(false);

            setGeneratedImages(TEST_IMAGES);
            console.log(data);
        }, 3000);
    };

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

                isCreating,
                models,
                modelVersion,
                generatedImages,
                imageIndex,
                setImageIndex,
                setModelVersion,
                handleCreate,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};

export const useHomeContext = () => useContext(HomeContext) as HomeContextProps;
