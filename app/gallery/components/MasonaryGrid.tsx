import { PUBLIC_IMAGES } from "@/lib/defaults";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageDialog_ from "./ImageDialog_";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const DATA = [
    {
        image: PUBLIC_IMAGES.generated1,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.avatarPlaceholder,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.generated3,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.sdxlCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [],
    },
    {
        image: PUBLIC_IMAGES.sdxlTngInteriorCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.vanGoghDiffusionCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.vanGoghDiffusionCover,
            PUBLIC_IMAGES.sdxlTngInteriorCover,
            PUBLIC_IMAGES.avatarPlaceholder,
        ],
    },
    {
        image: PUBLIC_IMAGES.generated1,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.avatarPlaceholder,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.generated3,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.generated1,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.avatarPlaceholder,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.generated3,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.sdxlCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [],
    },
    {
        image: PUBLIC_IMAGES.sdxlTngInteriorCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.vanGoghDiffusionCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.vanGoghDiffusionCover,
            PUBLIC_IMAGES.sdxlTngInteriorCover,
            PUBLIC_IMAGES.avatarPlaceholder,
        ],
    },
    {
        image: PUBLIC_IMAGES.generated1,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.avatarPlaceholder,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.generated3,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.generated1,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.avatarPlaceholder,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.generated3,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.sdxlCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [],
    },
    {
        image: PUBLIC_IMAGES.sdxlTngInteriorCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.vanGoghDiffusionCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.vanGoghDiffusionCover,
            PUBLIC_IMAGES.sdxlTngInteriorCover,
            PUBLIC_IMAGES.avatarPlaceholder,
        ],
    },
    {
        image: PUBLIC_IMAGES.generated1,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.avatarPlaceholder,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.generated3,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.generated1,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.avatarPlaceholder,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.generated3,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.sdxlCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [],
    },
    {
        image: PUBLIC_IMAGES.sdxlTngInteriorCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.vanGoghDiffusionCover,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.vanGoghDiffusionCover,
            PUBLIC_IMAGES.sdxlTngInteriorCover,
            PUBLIC_IMAGES.avatarPlaceholder,
        ],
    },
    {
        image: PUBLIC_IMAGES.generated1,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
    {
        image: PUBLIC_IMAGES.avatarPlaceholder,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [PUBLIC_IMAGES.sdxlCover, PUBLIC_IMAGES.sdxlTngInteriorCover, PUBLIC_IMAGES.avatarPlaceholder],
    },
    {
        image: PUBLIC_IMAGES.generated3,
        prompt: "A photo of TOK, matrix style, wearing a suit and tie, sitting in jail, ultra realistic, 8k",
        negativePrompt: "Too many fingers",
        width: 896,
        height: 756,
        seed: 545587,
        modelName: "Stable diffusion XL",
        relatedImages: [
            PUBLIC_IMAGES.generated1,
            PUBLIC_IMAGES.generated2,
            PUBLIC_IMAGES.generated3,
            PUBLIC_IMAGES.generated4,
        ],
    },
];

type GeneratedImagesProps = {
    image: string;
    prompt: string;
    negativePrompt: string;
    width: number;
    height: number;
    seed: number;
    modelName: string;
    relatedImages: string[];
}[];

function MasonaryGrid() {
    const [generatedImages, setGeneratedImages] = useState<GeneratedImagesProps | null>(null);
    const [page, setPage] = useState<number>(1);
    const [stopScroll, setStopScroll] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`/api/user/generated-images?page=${page}`).then(({ data }) => {
            setGeneratedImages((prev) => (prev === null ? data.generatedImages : [...prev, ...data.generatedImages]));
            if (page === data.totalPages) {
                setStopScroll(true);
            }
        });
    }, [page]);

    useEffect(() => {
        const onScrollEnd = () => {
            if (stopScroll) {
                window.removeEventListener("scroll", onScrollEnd);
            }
            if (window.innerHeight + window.scrollY >= window.document.body.scrollHeight - 350) {
                setPage((prev) => prev + 1);
                window.removeEventListener("scroll", onScrollEnd);
            }
        };
        if (generatedImages != null) {
            window.addEventListener("scroll", onScrollEnd);
        }
    }, [generatedImages, stopScroll]);

    return (
        <>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
                {generatedImages === null ? (
                    <Masonry gutter="15px">
                        <Skeleton className="w-full h-80 bg-slate-200 dark:bg-slate-800" />
                        <Skeleton className="w-full h-96 bg-slate-200 dark:bg-slate-800" />
                        <Skeleton className="w-full h-56 bg-slate-200 dark:bg-slate-800" />
                        <Skeleton className="w-full h-80 bg-slate-200 dark:bg-slate-800" />
                    </Masonry>
                ) : (
                    <Masonry gutter="15px">
                        {generatedImages.map((image, index) => (
                            <ImageDialog_
                                key={index}
                                modelName={image.modelName}
                                height={image.height}
                                width={image.width}
                                image={image.image}
                                negativePrompt={image.negativePrompt}
                                prompt={image.prompt}
                                seed={image.seed}
                                relatedImages={image.relatedImages}
                            >
                                <Image
                                    className="w-full h-auto rounded-lg cursor-pointer"
                                    src={image.image}
                                    alt="ai generated image"
                                    width={image.width}
                                    height={image.height}
                                />
                            </ImageDialog_>
                        ))}
                    </Masonry>
                )}
            </ResponsiveMasonry>
            {!stopScroll && generatedImages != null && (
                <div className="flex justify-center">
                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 px-2 rounded-lg text-lg"
                    >
                        Load more images <ChevronDown width={25} height={25} />
                    </button>
                </div>
            )}
        </>
    );
}

export default MasonaryGrid;
