"use client";
import Navigation from "@/components/Navigation";
import CreateModel from "./components/CreateModel";
import GeneratingModelCard from "./components/GeneratingModelCard";
import TrainedModelCard from "./components/TrainedModelCard";
import LoaderCard from "./components/LoaderCard";
import { DEFAULT_MODELS, PUBLIC_IMAGES } from "@/lib/defaults";
import { useMainContext } from "@/components/MainContext";
import FailedModelCard from "./components/FailedModelCard";

function Page() {
    const { defaultAiModels, customAiModels } = useMainContext();

    return (
        <main className="h-screen flex flex-col items-center">
            <div className="max-w-7xl w-full">
                <Navigation />
                <div className="flex flex-col p-4 gap-5">
                    {/* header */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold">My AI models</h1>
                        <p className="text-neutral-500 text-lg">Build your custom AI models now! 🤖</p>
                    </div>
                    {/* grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <CreateModel />
                        {customAiModels ? (
                            customAiModels.map((model, index) =>
                                model.status === "created" ? (
                                    <TrainedModelCard
                                        key={index}
                                        image={model.coverImage || PUBLIC_IMAGES.avatarPlaceholder}
                                        name={model.name}
                                        createdAt={new Date(model.createdAt).toLocaleDateString("en")}
                                        imagesTaken={model.imagesTaken}
                                    />
                                ) : model.status === "generating" ? (
                                    <GeneratingModelCard key={index} name={model.name} />
                                ) : (
                                    <FailedModelCard
                                        key={index}
                                        createdAt={new Date(model.createdAt).toLocaleDateString("en")}
                                        name={model.name}
                                    />
                                )
                            )
                        ) : (
                            <>
                                <LoaderCard />
                                <LoaderCard />
                                <LoaderCard />
                            </>
                        )}
                        {defaultAiModels &&
                            defaultAiModels.map((model, index) => (
                                <TrainedModelCard
                                    key={index}
                                    image={model.coverImage || PUBLIC_IMAGES.avatarPlaceholder}
                                    name={model.name}
                                    createdAt={new Date(model.createdAt).toLocaleDateString("en")}
                                    imagesTaken={model.imagesTaken}
                                    public
                                />
                            ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;
