import TrainAiPopup from "@/components/TrainAiPopup";
import { PlusIcon } from "lucide-react";

function CreateModel() {
    return (
        <TrainAiPopup>
            <div className="flex justify-center border-2 border-dashed rounded-lg cursor-pointer hover:opacity-80 hover:bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-950 ease-in duration-75">
                <PlusIcon className="w-3/4 h-auto stroke-slate-700" />
            </div>
        </TrainAiPopup>
    );
}

export default CreateModel;
