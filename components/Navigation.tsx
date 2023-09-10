"use client";
import { PixelerateLogoSVG } from "@/lib/svg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import MenuSheet from "./MenuSheet";
import { PUBLIC_IMAGES } from "@/lib/defaults";

function Navigation() {
    const { data: session, status } = useSession();

    return (
        <nav className="backdrop-blur-sm sticky top-0 flex justify-between items-center px-4 py-2">
            <Link href={"/"}>
                <PixelerateLogoSVG width={47} height={47} />
            </Link>
            {status === "authenticated" ? (
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
            ) : (
                <Skeleton className="w-[37px] h-[37px] bg-slate-200 rounded-full" />
            )}
        </nav>
    );
}

export default Navigation;
