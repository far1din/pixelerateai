import DefaultTooltip from "@/components/DefaultTooltip";
import { InfoIcon, Loader2 } from "lucide-react";
import Dropdown_ from "./Dropdown_";
import Counter_ from "./Counter_";
import { useHomeContext } from "../utils/HomeContext";

function Inputs() {
    const {
        isCreating,
        prompt,
        setPrompt,
        negativePrompt,
        setNegativePrompt,
        width,
        setWidth,
        height,
        setHeight,
        handleCreate,
    } = useHomeContext();

    const disabled = prompt.length < 1 || isCreating;
    return (
        <>
            {/* Prompt */}
            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-neutral-500 text-sm">
                    Prompt
                    <DefaultTooltip text="What do you want to create? 📸">
                        <InfoIcon width={17} height={17} />
                    </DefaultTooltip>
                </label>
                <textarea
                    onChange={(e) => setPrompt(e.target.value)}
                    value={prompt}
                    rows={3}
                    placeholder="A professional portrait of ((me)), wearing a suit, 8k, ultra realistic, ultra high resolution..."
                    className="p-2 outline-none text-lg bg-white dark:bg-slate-800 rounded-lg"
                />
            </div>

            {/* Negative Prompt */}
            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-neutral-500 text-sm">
                    Negative prompt
                    <DefaultTooltip text='What do you want to "remove" from the image? ❌'>
                        <InfoIcon width={17} height={17} />
                    </DefaultTooltip>
                </label>
                <textarea
                    onChange={(e) => setNegativePrompt(e.target.value)}
                    value={negativePrompt}
                    rows={1}
                    placeholder="Weird eyes, too many fingers..."
                    className="p-2 outline-none text-lg bg-white dark:bg-slate-800 rounded-lg"
                />
            </div>

            {/* Dimensions */}
            <div className="grid grid-cols-2 gap-4 text-lg">
                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-2 text-neutral-500 text-sm">
                        Width
                        <DefaultTooltip text="Width of the photo 🐳">
                            <InfoIcon width={17} height={17} />
                        </DefaultTooltip>
                    </label>
                    <Dropdown_ onSelect={(dimension) => setWidth(dimension)} display={width} />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-2 text-neutral-500 text-sm">
                        Height
                        <DefaultTooltip text="Height of the photo 🏔️">
                            <InfoIcon width={17} height={17} />
                        </DefaultTooltip>
                    </label>
                    <Dropdown_ onSelect={(dimension) => setHeight(dimension)} display={height} />
                </div>
            </div>

            {/* Number of outputs */}
            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-neutral-500 text-sm">
                    Outputs
                    <DefaultTooltip text="How many images do you want? Max 4 at the time... 🍜">
                        <InfoIcon width={17} height={17} />
                    </DefaultTooltip>
                </label>
                <Counter_ />
            </div>

            {/* Create */}
            <div>
                <button
                    disabled={disabled}
                    onClick={() => handleCreate()}
                    className={`${
                        disabled ? "bg-neutral-500" : "hover:opacity-80 bg-violet-500"
                    } ease-in duration-75 text-xl px-2 py-1 rounded-lg text-neutral-100`}
                >
                    {isCreating ? <Loader2 width={28} height={28} className="animate-spin" /> : "Create"}
                </button>
            </div>
        </>
    );
}

export default Inputs;
