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
    const { customAiModels } = useMainContext();

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
                                model.staus === "created" ? (
                                    <TrainedModelCard
                                        key={index}
                                        image={model.coverImage || PUBLIC_IMAGES.avatarPlaceholder}
                                        name={model.name}
                                        createdAt={new Date(model.createdAt).toLocaleDateString("en")}
                                        imagesTaken={103}
                                    />
                                ) : model.staus === "generating" ? (
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
                        {/* <CreateModel />
                        <GeneratingModelCard name="My test model 123" />
                        <TrainedModelCard
                            image={PUBLIC_IMAGES.avatarPlaceholder}
                            name="Kris"
                            createdAt="22.22.2010"
                            imagesTaken={103}
                        />
                        <LoaderCard />
                        <TrainedModelCard
                            image="/images/sdxl_cover.jpg"
                            name="Stable diffusion XL"
                            createdAt="22.22.2010"
                            imagesTaken={19060}
                            public
                        />
                        <LoaderCard /> */}

                        {DEFAULT_MODELS.map((model, index) => (
                            <TrainedModelCard
                                key={index}
                                image={model.coverImage}
                                name={model.name}
                                createdAt={model.createdAt.toLocaleDateString("en")}
                                imagesTaken={19060}
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
