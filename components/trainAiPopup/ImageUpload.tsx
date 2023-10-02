import { UploadCloud } from "lucide-react";
import { useCallback, useState } from "react";

import { useDropzone, FileWithPath } from "react-dropzone";
import { useTrainAiPopupContext } from "./TrainAiPopupContext";

function ImageUpload() {
    const { images, setImages } = useTrainAiPopupContext();

    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        acceptedFiles.map((image) => {
            const reader = new FileReader();
            reader.onload = () => setImages((prev) => [...prev, reader.result]);
            reader.readAsDataURL(image);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

    return (
        <div
            {...getRootProps()}
            className={`${
                isDragActive && "opacity-70 "
            } hover:opacity-70 cursor-pointer border-2 border-dashed bg-slate-100 dark:bg-slate-900 rounded-lg h-40 flex flex-col justify-center items-center text-slate-500`}
        >
            <UploadCloud className="h-1/2 w-auto" />
            {isDragActive ? (
                <p className="text-sm font-bold">Drop </p>
            ) : (
                <p className="text-sm">
                    <span className="font-bold">Click to upload</span> or drag and drop
                </p>
            )}
            <p className="text-sm">PNG, JPEG and JPG </p>
            <input {...getInputProps()} />
        </div>
    );
}

export default ImageUpload;
