import { createContext, useContext, useState } from "react";

type TrainAiPopupContextProps = {
    modelName: string;
    setModelName: React.Dispatch<React.SetStateAction<string>>;
    images: (string | ArrayBuffer | null)[];
    setImages: React.Dispatch<React.SetStateAction<(string | ArrayBuffer | null)[]>>;

    errorMessage: null | string;
    imagesUploaded: boolean;

    uploadImagesToAWS: () => void;
};

const TrainAiPopupContext = createContext<TrainAiPopupContextProps | null>(null);

export const TrainAiPopupContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [modelName, setModelName] = useState<string>("");
    const [images, setImages] = useState<(string | ArrayBuffer | null)[]>([]);

    const [errorMessage, setErrorMessage] = useState<null | string>(null);
    const [imagesUploaded, setImagesUploaded] = useState<boolean>(false);

    const uploadImagesToAWS = () => {
        //
        console.log(modelName, images);
    };

    return (
        <TrainAiPopupContext.Provider
            value={{ modelName, setModelName, images, setImages, errorMessage, imagesUploaded, uploadImagesToAWS }}
        >
            {children}
        </TrainAiPopupContext.Provider>
    );
};

export const useTrainAiPopupContext = () => useContext(TrainAiPopupContext) as TrainAiPopupContextProps;
