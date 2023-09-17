import { MinusIcon, PlusIcon } from "lucide-react";
import { useHomeContext } from "../utils/HomeContext";

function Counter_() {
    const { numberOfOutputs, setNumberOfOutputs } = useHomeContext();

    const handleAdd = () => {
        setNumberOfOutputs((prev) => (prev < 4 ? prev + 1 : prev));
    };

    const handleSubtract = () => {
        setNumberOfOutputs((prev) => (prev > 1 ? prev - 1 : prev));
    };

    return (
        <div className="flex items-center">
            <button>
                <MinusIcon
                    onClick={() => handleSubtract()}
                    width={28}
                    height={28}
                    className="opacity-70 hover:opacity-100 ease-in duration-75 border-2 border-slate-500 rounded-lg"
                />
            </button>
            <input
                value={numberOfOutputs}
                onChange={() => null}
                disabled
                className="text-center text-lg w-8 bg-transparent"
            />

            <button>
                <PlusIcon
                    onClick={() => handleAdd()}
                    width={28}
                    height={28}
                    className="opacity-70 hover:opacity-100 ease-in duration-75 border-2 border-slate-500 rounded-lg"
                />
            </button>
        </div>
    );
}

export default Counter_;
