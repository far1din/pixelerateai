import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import ToggleTheme from "./ToggleTheme";
import { PUBLIC_IMAGES } from "@/lib/defaults";
import { Receipt } from "lucide-react";

function MenuSheet(props: { session: Session }) {
    return (
        <SheetContent className="dark:bg-black">
            <SheetHeader className="items-start">
                <Image
                    src={props.session.user?.image || PUBLIC_IMAGES.avatarPlaceholder}
                    alt="Profile picture"
                    width={69}
                    height={69}
                    className="rounded-full cursor-pointer"
                />
                <SheetTitle>Hey 👋, {props.session.user?.name}</SheetTitle>
                <SheetDescription className="!mt-0">Ready to snap some photos? 📸</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 py-4">
                <Link className="hover:opacity-80 ease-in duration-75" href={"/"}>
                    Home
                </Link>
                <Link className="hover:opacity-80 ease-in duration-75" href={"/my-models"}>
                    My models
                </Link>
                <Link className="hover:opacity-80 ease-in duration-75" href={"/gallery"}>
                    Gallery
                </Link>
                <Link className="flex gap-2 hover:opacity-80 ease-in duration-75" href={"/billing"}>
                    Billing <Receipt />{" "}
                </Link>
            </div>
            <SheetFooter className="border-t-2 py-2 justify-between">
                <button onClick={() => signOut()} className="outline-none text-neutral-500">
                    Sign out
                </button>
                <ToggleTheme />
            </SheetFooter>
        </SheetContent>
    );
}

export default MenuSheet;
