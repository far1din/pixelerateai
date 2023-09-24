import { DEFAULT_MODELS, PUBLIC_IMAGES } from "@/lib/defaults";
import Image from "next/image";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CreateModel from "@/app/my-models/components/CreateModel";
import { useHomeContext } from "../utils/HomeContext";
import { Skeleton } from "@/components/ui/skeleton";

function PickModel() {
    const { models, modelVersion, setModelId, setModelVersion } = useHomeContext();

    const [constraint, setConstraint] = useState({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const overflowWidth = (containerRef.current?.clientWidth || 0) - (contentRef.current?.clientWidth || 0);

        if (overflowWidth < 0) {
            setConstraint((prev) => ({ ...prev, left: overflowWidth }));
        }
    }, [models]);

    return (
        <div className="flex flex-col gap-1 p-2">
            <h3 className="text-2xl font-semibold">Pick a model</h3>
            <div ref={containerRef}>
                <motion.div ref={contentRef} drag="x" dragConstraints={constraint} className="w-max flex gap-2">
                    <div className="w-40">
                        <CreateModel />
                    </div>
                    {models ? (
                        models.map((model, index) => (
                            <div
                                onClick={() => {
                                    setModelId(model.id);
                                    setModelVersion(model.version);
                                }}
                                key={index}
                                className={`${
                                    modelVersion != model.version && "opacity-50 hover:opacity-80"
                                } relative ease-in duration-75 cursor-pointer w-40 rounded-lg overflow-hidden border-2`}
                            >
                                <div className="absolute w-full h-full" />
                                <Image
                                    alt="ai model"
                                    src={model.coverImage || PUBLIC_IMAGES.avatarPlaceholder}
                                    width={100}
                                    height={100}
                                    className="w-full h-28 object-cover"
                                />
                                <div className="truncate p-1.5 text-sm">
                                    <p>{model.name}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
                            <Skeleton className="w-[156px] h-[144px] bg-slate-200 dark:bg-slate-800" />
                            <Skeleton className="w-[156px] h-[144px] bg-slate-200 dark:bg-slate-800" />
                            <Skeleton className="w-[156px] h-[144px] bg-slate-200 dark:bg-slate-800" />
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default PickModel;
