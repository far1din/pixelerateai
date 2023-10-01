"use client";
import Navigation from "@/components/Navigation";
import BillingTable from "./components/BillingTable";
import SubscribedCard from "./components/SubscribedCard";

function page() {
    return (
        <main className="h-screen flex flex-col items-center">
            <div className="max-w-5xl w-full">
                <Navigation />
                <div className="flex flex-col p-4 gap-5">
                    {/* header */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold">Billing history</h1>
                        <p className="text-neutral-500 text-lg">Your billing history</p>
                    </div>
                    {/* grid */}
                    <SubscribedCard />
                    <BillingTable />
                </div>
            </div>
        </main>
    );
}

export default page;
