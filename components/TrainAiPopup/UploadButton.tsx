import { CheckCircle2, Loader } from "lucide-react";
import { useTrainAiPopupContext } from "./TrainAiPopupContext";

function UploadButton() {
    const { images, modelName, errorMessage, imagesUploaded, uploadImagesToAWS } = useTrainAiPopupContext();

    const disabled = images.length < 5 || modelName.length < 3;
    return (
        <div className="flex justify-between">
            <button
                disabled={disabled}
                onClick={() => uploadImagesToAWS()}
                className={`${
                    disabled ? "bg-neutral-500" : "bg-violet-500"
                } ease-in duration-100 h-max py-1 px-3 text-neutral-100 rounded-lg text-lg`}
            >
                Create
            </button>
            <div className="flex flex-col gap-2">
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                {imagesUploaded && (
                    <>
                        <p className="text-sm flex gap-2 items-center">
                            <CheckCircle2 className="stroke-violet-500" /> Images uploaded
                        </p>
                        <p className="text-sm flex gap-2 items-center animate-pulse">
                            <Loader className="stroke-violet-500 animate-spin" /> Uploading model
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default UploadButton;
