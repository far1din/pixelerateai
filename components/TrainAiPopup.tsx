"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InputFields from "./TrainAiPopup/InputFields";
import ImageUpload from "./TrainAiPopup/ImageUpload";
import Preview from "./TrainAiPopup/Preview";
import UploadButton from "./TrainAiPopup/UploadButton";
import { TrainAiPopupContextProvider } from "./TrainAiPopup/TrainAiPopupContext";

type TrainAiPopupProps = {
    children: React.ReactNode;
};

function TrainAiPopup(props: TrainAiPopupProps) {
    return (
        <TrainAiPopupContextProvider>
            <Dialog>
                <DialogTrigger asChild>{props.children}</DialogTrigger>
                <DialogContent className="flex flex-col gap-3 dark:bg-black">
                    <div>
                        <h1 className="text-2xl font-semibold">Train custom AI ✨</h1>
                        <p className="text-neutral-500 text-sm">
                            Train your own custom AI model in a few simple steps!
                        </p>
                    </div>
                    <InputFields />
                    <ImageUpload />
                    <Preview />
                    <UploadButton />
                </DialogContent>
            </Dialog>
        </TrainAiPopupContextProvider>
    );
}

export default TrainAiPopup;
