import { headers } from "@/lib/utils";
import axios from "axios";
import JSZip from "jszip";
import { createContext, useContext, useState } from "react";

type TrainAiPopupContextProps = {
    modelName: string;
    setModelName: React.Dispatch<React.SetStateAction<string>>;
    images: (string | ArrayBuffer | null)[];
    setImages: React.Dispatch<React.SetStateAction<(string | ArrayBuffer | null)[]>>;

    isLoading: boolean;
    errorMessage: null | string;
    imagesUploaded: boolean;

    uploadImagesToAWS: () => void;
};

const TrainAiPopupContext = createContext<TrainAiPopupContextProps | null>(null);

export const TrainAiPopupContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [modelName, setModelName] = useState<string>("");
    const [images, setImages] = useState<(string | ArrayBuffer | null)[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<null | string>(null);
    const [imagesUploaded, setImagesUploaded] = useState<boolean>(false);

    const zipImages = async () => {
        const zip = new JSZip();
        for (let i = 0; i < images.length; i++) {
            const imageBase64 = images[i] as any;
            const extension = imageBase64.match(/\/([a-zA-Z0-9]+);/)[1];
            const imageData = imageBase64.split(";base64,").pop();

            zip.file(`image_${i + 1}.${extension}`, imageData, { base64: true });
        }

        return await zip.generateAsync({ type: "blob" });
    };

    const uploadModelToReplicate = (zipUrl: string) => {
        axios
            .post("/api/replicate/train-model", { zipUrl, modelName }, headers)
            .then((res) => {
                location.reload();
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
        //
    };

    const uploadImagesToAWS = async () => {
        setImagesUploaded(false);
        setIsLoading(true);
        setErrorMessage(null);
        const content = await zipImages();

        // presigned url
        const response = await axios
            .get("/api/aws/presign")
            .then((res) => ({ presignedUrl: res.data.presignedUrl, zipUrl: res.data.zipUrl }))
            .catch((err) => {
                setIsLoading(false);
                setErrorMessage("Failed to upload the images");
            });

        if (!response) return;

        // put request to AWS
        await axios
            .put(response.presignedUrl, content, { headers: { "Content-Type": "application/zip" } })
            .then((res) => {
                // post request to replicate
                setImagesUploaded(true);
                uploadModelToReplicate(response.zipUrl);
            })
            .catch((err) => {
                setIsLoading(false);
                setErrorMessage("Failed to upload the images");
            });
    };

    return (
        <TrainAiPopupContext.Provider
            value={{
                modelName,
                setModelName,
                images,
                setImages,
                isLoading,
                errorMessage,
                imagesUploaded,
                uploadImagesToAWS,
            }}
        >
            {children}
        </TrainAiPopupContext.Provider>
    );
};

export const useTrainAiPopupContext = () => useContext(TrainAiPopupContext) as TrainAiPopupContextProps;
