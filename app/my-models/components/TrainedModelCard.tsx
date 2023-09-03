import DefaultTooltip from "@/components/DefaultTooltip";
import { CameraIcon, EyeOffIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TrainedModelCardProps = {
    image: string;
    name: string;
    imagesTaken: number;
    createdAt: string;
    public?: boolean;
};

function TrainedModelCard(props: TrainedModelCardProps) {
    return (
        <Link href={"#"} className="border-2 rounded-lg overflow-hidden">
            <Image className="w-full h-80 object-cover" width={1000} height={1000} src={props.image} alt={"AI model"} />
            <div className="p-2">
                <p className="font-semibold">{props.name}</p>
                <div className="flex justify-between text-xs">
                    <p>Created: {props.createdAt}</p>
                    <div className="flex gap-1 items-center">
                        <p>{props.imagesTaken.toLocaleString()}</p>
                        <DefaultTooltip text={`${props.imagesTaken.toLocaleString()} images taken`}>
                            <CameraIcon width={16} height={16} />
                        </DefaultTooltip>

                        {props.public ? (
                            <DefaultTooltip text="Public model. Available for everyone to use.">
                                <GlobeIcon width={16} height={16} />
                            </DefaultTooltip>
                        ) : (
                            <DefaultTooltip text="Private model. Only you can see and use it.">
                                <EyeOffIcon width={16} height={16} />
                            </DefaultTooltip>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default TrainedModelCard;
