import { PUBLIC_IMAGES } from "@/lib/defaults";

function ImageView() {
    const images = [
        PUBLIC_IMAGES.avatarPlaceholder,
        PUBLIC_IMAGES.vanGoghDiffusionCover,
        PUBLIC_IMAGES.sdxlCover,
        PUBLIC_IMAGES.sdxlTngInteriorCover,
    ];
    return (
        <>
            <div className="border-t-2 relative bg-slate-50 dark:bg-slate-950 flex flex-1 justify-center items-center">
                {/* eslint-disable-next-line */}
                <img className="md:absolute p-2 h-auto w-auto max-w-full max-h-full" src={PUBLIC_IMAGES.sdxlCover} />
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 flex gap-2 justify-center pb-2">
                {images.map((image, index) => (
                    // eslint-disable-next-line
                    <img
                        key={index}
                        className="ease-in duration-75 h-24 w-auto rounded-sm opacity-50 hover:opacity-80 cursor-pointer"
                        src={image}
                    />
                ))}
            </div>
        </>
    );
}

export default ImageView;
