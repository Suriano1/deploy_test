import { nextAuthOptions } from "@/lib/auth";

import NextAuth from "next-auth";

const handler = NextAuth(nextAuthOptions) as never;
export { handler as GET, handler as POST };
