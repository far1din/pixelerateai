import { useTrainAiPopupContext } from "./TrainAiPopupContext";

function InputFields() {
    const { modelName, setModelName } = useTrainAiPopupContext();
    return (
        <div className="flex flex-col gap-1">
            <label className="text-neutral-500 text-sm">Model name</label>
            <input
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                placeholder="Peter Zanger..."
                type="text"
                className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg outline-none"
            />
        </div>
    );
}

export default InputFields;
