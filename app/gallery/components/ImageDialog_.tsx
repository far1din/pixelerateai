import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PUBLIC_IMAGES } from "@/lib/defaults";
import Image from "next/image";
import { useState } from "react";

type ImageDialogProps = {
    children: React.ReactNode;
    modelName: string;
    image: string;
    relatedImages: string[];
    prompt: string;
    negativePrompt: string;
    width: number;
    height: number;
    seed: number;
};

function ImageDialog_(props: ImageDialogProps) {
    const [currentImage, setCurrentImage] = useState(props.image);

    return (
        <Dialog>
            <DialogTrigger asChild>{props.children}</DialogTrigger>
            <DialogContent className="outline-none dark:bg-black">
                <div className="flex flex-col gap-3">
                    <div className="relative">
                        <p className="opacity-70 absolute bottom-2 px-2 font-medium bg-white dark:bg-black rounded-r-lg">
                            {props.modelName}
                        </p>
                        <Image
                            className="w-full h-auto rounded-lg cursor-pointer"
                            src={currentImage}
                            alt="ai generated image"
                            width={1000}
                            height={1000}
                        />
                    </div>

                    <div className="text-sm">
                        <p className="text-neutral-500">Prompt</p>
                        <p>{props.prompt}</p>
                    </div>

                    <div className="text-sm">
                        <p className="text-neutral-500">Negative prompt</p>
                        <p>{props.negativePrompt}</p>
                    </div>

                    <div className="grid grid-cols-3 text-sm">
                        <div>
                            <p className="text-neutral-500">Width</p>
                            <p>{props.width}px</p>
                        </div>
                        <div>
                            <p className="text-neutral-500">Height</p>
                            <p>{props.height}px</p>
                        </div>
                        <div>
                            <p className="text-neutral-500">Seed</p>
                            <p>{props.seed}</p>
                        </div>
                    </div>

                    <div className="text-sm">
                        <p className="text-neutral-500">Related images</p>
                        <div className="flex gap-1.5">
                            {props.relatedImages.map((image, index) => (
                                <Image
                                    onClick={() => setCurrentImage(image)}
                                    key={index}
                                    className={`${
                                        currentImage === image ? "opacity-80" : "opacity-50"
                                    } w-auto h-auto max-w-[73px] max-h-[73px] rounded-lg cursor-pointer`}
                                    src={image}
                                    alt="ai generated image"
                                    width={73}
                                    height={73}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ImageDialog_;
