import Navigation from "@/components/Navigation";
import CreateModel from "./components/CreateModel";
import GeneratingModelCard from "./components/GeneratingModelCard";
import TrainedModelCard from "./components/TrainedModelCard";
import LoaderCard from "./components/LoaderCard";

function page() {
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
                        <GeneratingModelCard name="My test model 123" />
                        <TrainedModelCard
                            image="/images/generated2.jpg"
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
                        <TrainedModelCard
                            image="/images/van_gogh_d_cover.jpeg"
                            name="Van Gogh Diffusion"
                            createdAt="22.22.2010"
                            imagesTaken={19060}
                            public
                        />
                        <LoaderCard />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default page;
