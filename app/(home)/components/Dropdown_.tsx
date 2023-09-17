import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DEFAULT_DIMENSIONS, DefaultDimensionsProps } from "@/lib/defaults";
import { ChevronDownIcon } from "lucide-react";

type DropdownProps = {
    display: DefaultDimensionsProps;
    onSelect: (dimension: DefaultDimensionsProps) => void;
};

function Dropdown_(props: DropdownProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="outline-none bg-white dark:bg-slate-800 rounded-lg">
                <button className="flex justify-between p-2 items-center">
                    <p>{props.display}</p>
                    <ChevronDownIcon width={28} height={28} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    {DEFAULT_DIMENSIONS.map((dimension, index) => (
                        <DropdownMenuItem
                            onClick={() => props.onSelect(dimension)}
                            key={index}
                            className={`${
                                props.display === dimension && "bg-slate-100 dark:bg-slate-800 "
                            } cursor-pointer text-lg`}
                        >
                            <span>{dimension}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Dropdown_;
