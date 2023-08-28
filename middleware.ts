import { getToken } from "next-auth/jwt";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextResponse } from "next/server";

export default async function middleware(req: NextRequestWithAuth, event: NextFetchEvent) {
    const token = await getToken({ req });
    const isAuthenticated = !!token;

    const path = req.nextUrl.pathname;
    if (path === "/auth" && isAuthenticated) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    const authMiddleware = withAuth({
        pages: {
            signIn: `/auth`,
        },
    });

    return authMiddleware(req, event);
}

export const config = {
    matcher: "/:path*",
};
