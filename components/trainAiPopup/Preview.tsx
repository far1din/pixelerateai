import { Trash2 } from "lucide-react";
import { useTrainAiPopupContext } from "./TrainAiPopupContext";

function Preview() {
    const { images, setImages } = useTrainAiPopupContext();

    const removeImage = (indexToRemove: number) => {
        setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="overflow-x-auto">
            <div className="flex gap-2 w-max">
                {images
                    .slice()
                    .reverse()
                    .map((image, index) => (
                        <div key={index} className="relative">
                            <Trash2
                                onClick={() => removeImage(images.length - 1 - index)}
                                className="absolute p-1 bg-white/70 dark:bg-slate-900/70 rounded-br-md cursor-pointer hover:stroke-red-500 ease-in duration-75"
                            />
                            {/* eslint-disable-next-line */}
                            <img className="h-20 w-auto rounded-lg" src={String(image)} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Preview;
