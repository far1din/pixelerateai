import { RobotSVG } from "@/lib/svg";

type GeneratingModelCardProps = {
    name: string;
};

function GeneratingModelCard(props: GeneratingModelCardProps) {
    return (
        <div className="border-2 rounded-lg">
            <div className="animate-pulse bg-slate-100 dark:bg-slate-950 h-80 flex flex-col justify-center">
                <RobotSVG className="stroke-slate-600 dark:stroke-slate-500" />
            </div>
            <div className="p-2">
                <p className="font-semibold">{props.name}</p>
                <p className="px-1 bg-yellow-500 text-xs w-max rounded-sm text-neutral-100">Generating</p>
            </div>
        </div>
    );
}

export default GeneratingModelCard;
