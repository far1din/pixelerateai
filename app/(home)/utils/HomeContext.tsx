import { AiModelProps, useMainContext } from "@/components/MainContext";
import { DefaultDimensionsProps, PUBLIC_IMAGES } from "@/lib/defaults";
import { headers } from "@/lib/utils";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Prediction } from "replicate";

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
    setModelId: React.Dispatch<React.SetStateAction<string | null>>;
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
    const [modelId, setModelId] = useState<string | null>(null);

    const [generatedImages, setGeneratedImages] = useState<string[] | null>(null);
    const [imageIndex, setImageIndex] = useState<number>(0);

    useEffect(() => {
        if (defaultAiModels && customAiModels) {
            setModels([...customAiModels, ...defaultAiModels].filter((model) => model.status === "created"));
        }
    }, [defaultAiModels, customAiModels]);

    useEffect(() => {
        if (models) {
            setModelId(models[0].id);
            setModelVersion(models[0].version);
        }
    }, [models]);

    const handleCreate = () => {
        const data = { prompt, negativePrompt, width, height, numberOfOutputs, modelVersion, modelId };
        setIsCreating(true);
        setGeneratedImages(null);
        setImageIndex(0);

        // create a prediction
        axios
            .post("/api/replicate/create-image", data, headers)
            .then((res) => pollReplicate(res.data.predictionId))
            .catch((err) => {
                setIsCreating(false);
                console.log(err);
            });
    };

    const pollReplicate = async (predictionId: string) => {
        while (true) {
            let prediction: Prediction | null = await axios
                .get(`api/replicate/create-image/prediction/${predictionId}`, headers)
                .then((res) => res.data.prediction)
                .catch((err) => null);

            if (prediction === null) {
                break;
            }

            console.log(prediction);
            if (prediction.status === "succeeded") {
                setIsCreating(false);
                setGeneratedImages(prediction.output);
                break;
            } else if (prediction.status === "failed") {
                console.log(prediction.error); // todo: fix toast error message
                setIsCreating(false);
                break;
            } else if (prediction.status === "canceled") {
                setIsCreating(false);
                break;
            } else {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
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
                setModelId,
                handleCreate,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};

export const useHomeContext = () => useContext(HomeContext) as HomeContextProps;
