import IsCreating_ from "./IsCreating_";
import { useHomeContext } from "../utils/HomeContext";
import { PixelSmileySVG } from "@/lib/svg";

function ImageView() {
    const { isCreating, generatedImages, imageIndex, setImageIndex } = useHomeContext();

    return (
        <>
            <div className="border-t-2 relative bg-slate-50 dark:bg-slate-950 flex flex-1 justify-center items-center">
                {isCreating ? (
                    <IsCreating_ />
                ) : generatedImages === null ? (
                    <div className="flex flex-col w-full h-full justify-center items-center text-center">
                        <PixelSmileySVG className="w-1/2 xl:w-1/3 h-auto fill-slate-500 dark:fill-slate-800" />
                        <pre className="whitespace-pre-wrap text-lg text-neutral-500">
                            Fill in the prompt and start creating images now!
                        </pre>
                    </div>
                ) : (
                    // eslint-disable-next-line
                    <img
                        className="md:absolute p-2 h-auto w-auto max-w-full max-h-full"
                        src={generatedImages[imageIndex]}
                    />
                )}
            </div>

            {generatedImages && generatedImages.length > 1 && (
                <div className="bg-slate-50 dark:bg-slate-950 flex gap-2 justify-center pb-2">
                    {generatedImages.map((image, index) => (
                        // eslint-disable-next-line
                        <img
                            onClick={() => setImageIndex(index)}
                            key={index}
                            className={`${
                                imageIndex === index ? "opacity-80" : "opacity-50 hover:opacity-80"
                            } ease-in duration-75 h-24 w-auto rounded-sm cursor-pointer`}
                            src={image}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default ImageView;
