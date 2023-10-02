"use client";
import { CoinSVG, PixelerateLogoSVG } from "@/lib/svg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import MenuSheet from "@/components/MenuSheet";
import { PUBLIC_IMAGES } from "@/lib/defaults";
import { Plus } from "lucide-react";
import PricingPopup from "@/components/PricingPopup";
import { useMainContext } from "@/components/MainContext";

function Navigation() {
    const { credits } = useMainContext();
    const { data: session, status } = useSession();

    return (
        <nav className="border-b-2 backdrop-blur-sm sticky top-0 flex justify-between items-center px-4 py-2">
            <Link href={"/"}>
                <PixelerateLogoSVG width={47} height={47} />
            </Link>
            <div className="flex items-center gap-4">
                {status === "authenticated" ? (
                    <>
                        {credits != null ? (
                            <PricingPopup>
                                <div className="hover:opacity-80 cursor-pointer ease-in duration-75 flex items-center gap-3 bg-violet-500 text-neutral-100 px-1 rounded-full font-medium text-lg">
                                    <Plus />
                                    <span className="flex items-center gap-1">
                                        {credits} <CoinSVG width={21} height={21} />
                                    </span>
                                </div>
                            </PricingPopup>
                        ) : (
                            <Skeleton className="w-[79px] h-[28px] bg-slate-200 rounded-full" />
                        )}

                        <Sheet>
                            <SheetTrigger asChild>
                                <Image
                                    src={session.user?.image || PUBLIC_IMAGES.avatarPlaceholder}
                                    alt="Profile picture"
                                    width={37}
                                    height={37}
                                    className="rounded-full cursor-pointer"
                                />
                            </SheetTrigger>
                            <MenuSheet session={session} />
                        </Sheet>
                    </>
                ) : (
                    <>
                        <Skeleton className="w-[79px] h-[28px] bg-slate-200 rounded-full" />
                        <Skeleton className="w-[37px] h-[37px] bg-slate-200 rounded-full" />
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navigation;
