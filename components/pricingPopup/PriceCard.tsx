import { CoinSVG } from "@/lib/svg";

type PriceCardProps = {
    title: string;
    description: string;
    price: number;

    subscription?: boolean;
};

function PriceCard(props: PriceCardProps) {
    return (
        <div className="hover:opacity-80 ease-in duration-75 cursor-pointer border-2 p-4 rounded-lg flex flex-col gap-4 bg-slate-50 dark:bg-slate-950">
            <div>
                <h3 className="flex items-center gap-2 text-2xl font-semibold">
                    {props.title}
                    <CoinSVG width={25} height={25} />
                </h3>
                <p className="text-sm text-neutral-800 dark:text-neutral-300">{props.description}</p>
            </div>

            <div className="flex gap-1 items-end">
                <span className="text-5xl font-semibold">{props.price}</span>
                <span className="text-2xl font-medium">$</span>
                {props.subscription ? (
                    <>
                        <span className="ml-2">per month</span>
                        <span className="ml-2 border-2 px-2 py-0.5 rounded-lg font-medium dark:border-slate-700">
                            PRO
                        </span>
                    </>
                ) : (
                    <span className="ml-2">one time payment</span>
                )}
            </div>
        </div>
    );
}

export default PriceCard;
