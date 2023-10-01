import { CheckCircle2, Loader, Loader2 } from "lucide-react";
import { useTrainAiPopupContext } from "./TrainAiPopupContext";
import { CoinSVG } from "@/lib/svg";

function UploadButton() {
    const { isLoading, images, modelName, errorMessage, imagesUploaded, uploadImagesToAWS } = useTrainAiPopupContext();

    const disabled = images.length < 5 || modelName.length < 3 || isLoading;
    return (
        <div className="flex justify-between">
            <div className="flex gap-4 items-center">
                <button
                    disabled={disabled}
                    onClick={() => uploadImagesToAWS()}
                    className={`${
                        disabled ? "bg-neutral-500" : "bg-violet-500"
                    } ease-in duration-100 h-max py-1 px-3 text-neutral-100 rounded-lg text-lg`}
                >
                    {isLoading ? <Loader2 width={28} height={28} className="animate-spin" /> : "Create"}
                </button>
                <div className="bg-slate-50 dark:bg-slate-900 flex gap-3 text-lg items-center border-2 px-3 rounded-full">
                    50 <CoinSVG width={21} height={21} />
                </div>
            </div>
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
