import { CheckCheck } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PLANS } from "@/lib/defaults";

function SubscribedCard() {
    const handleUpdatePaymen = () => {
        console.log("update payment");
    };

    const handleCancelSubscription = () => {
        console.log("cancel subscription");
    };

    return (
        <Alert className="max-w-[631px]">
            <CheckCheck className="h-4 w-4" />
            <AlertTitle>{PLANS.subscription.name}</AlertTitle>
            <AlertDescription className="dark:text-neutral-300">
                You are currently subscribed to {PLANS.subscription.name.toLocaleLowerCase()}. This subscription will
                give you access to all our features with {PLANS.subscription.credits} credits each mont!
            </AlertDescription>
            <AlertDescription className="space-x-4 mt-2">
                <button
                    onClick={() => handleUpdatePaymen()}
                    className="ease-in duration-75 hover:opacity-100 opacity-80"
                >
                    Update payment
                </button>
                <button
                    onClick={() => handleCancelSubscription()}
                    className="ease-in duration-75 hover:opacity-100 opacity-80"
                >
                    Cancel
                </button>
            </AlertDescription>
        </Alert>
    );
}

export default SubscribedCard;
