import { Skeleton } from "@/components/ui/skeleton";

function LoaderCard() {
    return (
        <div className="border-2 rounded-lg overflow-hidden">
            <Skeleton className="w-full h-80 rounded-[0] bg-slate-200 dark:bg-slate-600" />
            <div className="p-2 flex flex-col gap-2">
                <Skeleton className="w-1/2 h-[17px] rounded-md bg-slate-200 dark:bg-slate-600" />
                <div className="flex justify-between">
                    <Skeleton className="w-1/3 h-[15px] rounded-md bg-slate-200 dark:bg-slate-600" />
                    <Skeleton className="w-1/4 h-[15px] rounded-md bg-slate-200 dark:bg-slate-600" />
                </div>
            </div>
        </div>
    );
}

export default LoaderCard;
