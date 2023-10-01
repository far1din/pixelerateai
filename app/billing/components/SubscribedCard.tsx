import { CheckCheck } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PLANS } from "@/lib/defaults";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { headers, showErrorToast } from "@/lib/utils";
import DefaultAlertDialog from "@/components/DefaultAlertDialog";
import { useMainContext } from "@/components/MainContext";
import PricingPopup from "@/components/PricingPopup";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

function SubscribedCard() {
    const { isSubscribed, setIsSubscribed } = useMainContext();
    const { toast } = useToast();

    const handleUpdatePaymen = () => {
        axios
            .post("/api/payment/update-payment", headers)
            .then(async ({ data }) => {
                const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
                await stripe?.redirectToCheckout({ sessionId: data.sessionId });
            })
            .catch((err) => showErrorToast(toast, err));
    };

    const handleCancelSubscription = () => {
        axios
            .put("/api/payment/cancel-subscription", headers)
            .then(async ({ data }) => {
                setIsSubscribed(false);
            })
            .catch((err) => showErrorToast(toast, err));
    };

    return (
        <>
            {isSubscribed === null ? (
                <Skeleton className="w-2/3 h-[100px]" />
            ) : isSubscribed ? (
                <Alert className="max-w-[631px]">
                    <CheckCheck className="h-4 w-4" />
                    <AlertTitle>{PLANS.subscription.name}</AlertTitle>
                    <AlertDescription className="dark:text-neutral-300">
                        You are currently subscribed to {PLANS.subscription.name.toLocaleLowerCase()}. This subscription
                        will give you access to all our features with {PLANS.subscription.credits} credits each mont!
                    </AlertDescription>
                    <AlertDescription className="space-x-4 mt-2">
                        <button
                            onClick={() => handleUpdatePaymen()}
                            className="ease-in duration-75 hover:opacity-100 opacity-80"
                        >
                            Update payment
                        </button>
                        <DefaultAlertDialog
                            title="Are you absolutely sure?"
                            description="This action cannot be undone. This will cancel your subscription..."
                            cancelButtonName="Cancel"
                            continueButtonName="Continue"
                            onContinue={() => handleCancelSubscription()}
                        >
                            <button className="ease-in duration-75 hover:opacity-100 opacity-80">Cancel</button>
                        </DefaultAlertDialog>
                    </AlertDescription>
                </Alert>
            ) : (
                <div className="space-y-1">
                    <p className="text-sm dark:text-neutral-300">You dont have any active subscriptions...</p>
                    <PricingPopup>
                        <div className="text-neutral-100 w-max hover:opacity-80 ease-in duration-75 text-lg px-3 py-1 bg-violet-500 rounded-lg">
                            upgrade now
                        </div>
                    </PricingPopup>
                </div>
            )}
        </>
    );
}

export default SubscribedCard;
