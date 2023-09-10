import { BrokenHeartSVG, RobotSVG } from "@/lib/svg";

type FailedModelCardProps = {
    name: string;
    createdAt: string;
};

function FailedModelCard(props: FailedModelCardProps) {
    return (
        <div className="border-2 rounded-lg">
            <div className="bg-slate-100 dark:bg-slate-950 h-80 flex flex-col justify-center">
                <BrokenHeartSVG className="fill-red-500/50" />
            </div>
            <div className="p-2">
                <p className="font-semibold">{props.name}</p>
                <div className="flex justify-between text-xs">
                    <p>Created: {props.createdAt}</p>
                    <p className="px-1 bg-red-500 text-xs w-max rounded-sm text-neutral-100">FAILED</p>
                </div>
            </div>
        </div>
    );
}

export default FailedModelCard;
