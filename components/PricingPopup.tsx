import PriceCard from "./pricingPopup/PriceCard";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type PricingPopupProps = {
    children: React.ReactNode;
};
function PricingPopup(props: PricingPopupProps) {
    return (
        <Dialog>
            <DialogTrigger>{props.children}</DialogTrigger>
            <DialogContent className="max-w-3xl dark:bg-black">
                <div className="flex flex-col gap-1">
                    <h3 className="text-3xl font-semibold">Pricing Made Simple</h3>
                    <p className="text-neutral-500">
                        At pixelerate, we believe that everyone should have simple access to AI!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <PriceCard
                        title="251 Credits / Month"
                        description="At pixelerate, we believe that everyone should have simple access to AI!"
                        price={15}
                        planType="subscription"
                        subscription
                    />
                    <PriceCard
                        title="101 Credits"
                        description="Perfect if you just want to test pixelerate and everything we offer!"
                        planType="payment"
                        price={7}
                    />
                </div>

                <div className="text-neutral-200">
                    <p className="text-xl font-medium mb-1">How do everything work?</p>
                    <p>🤖 Training Custom AI - 50 credits</p>
                    <p>📸 Everything else - 1 credits</p>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default PricingPopup;
