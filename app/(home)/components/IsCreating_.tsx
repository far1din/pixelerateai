import { MovingStarsSVG } from "@/lib/svg";
import { useEffect, useState } from "react";

function IsCreating_() {
    return (
        <>
            <div className="text-center">
                <pre className="animate-pulse">Hang tight. Your image is being created!</pre>
                <SecondCounter_ />
            </div>
            <MovingStarsSVG className="absolute w-full h-full" />
        </>
    );
}

export default IsCreating_;

function SecondCounter_() {
    const [startTime, setStartTime] = useState(Date.now());
    const [currentTime, setCurrentTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1);

        return () => clearInterval(interval);
    }, []);

    const elapsedTime = (currentTime - startTime) / 1000;
    return <pre>{elapsedTime} sec</pre>;
}
