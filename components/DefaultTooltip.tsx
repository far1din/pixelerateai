import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type DefaultTooltipProps = {
    children: React.ReactNode;
    text: string;
    delayDuration?: number;
};

function DefaultTooltip(props: DefaultTooltipProps) {
    return (
        <TooltipProvider delayDuration={props.delayDuration || 0}>
            <Tooltip>
                <TooltipTrigger>{props.children}</TooltipTrigger>
                <TooltipContent className="max-w-[251px] text-center">
                    <p>{props.text}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default DefaultTooltip;
