export { default } from "next-auth/middleware";

export const config = { matcher: ["/newhabit", "/habit/:path*"] };
