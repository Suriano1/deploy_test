"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { Container } from "../container";

export default function Header() {
  const pathName = usePathname();
  const { status } = useSession();
  const router = useRouter();
  async function logout() {
    await signOut({
      redirect: false,
    });
    router.replace("/");
  }
  return (
    <Container>
      <header className="w-full flex item-center px-2 py-4 bg-white h-28 shadow-sm">
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/dashboard">
            <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
              <span className="text-[#116618a4]">GREEN</span>
              <span className="text-[#067285d7]"> FUEL</span>
            </h1>
          </Link>

          {status === "unauthenticated" || status === "loading" ? (
            <></>
          ) : (
            <div className="flex items-center justify-between gap-4">
              {pathName === "/dashboard" ? (
                <Link href="/dashboard" className="pointer-events-none">
                  <RxDashboard className="text-[#c7ccc7a4] w-7 h-7 pointer-events-none" />
                </Link>
              ) : (
                <Link href="/dashboard">
                  <RxDashboard className="text-[#3b3b3bc7] w-7 h-7 hover:text-[#727472a4]" />
                </Link>
              )}
              <button onClick={logout}>
                <FiLogOut className="text-[#3b3b3bc7] w-7 h-7 hover:text-[#727472a4]" />
              </button>
            </div>
          )}
        </div>
      </header>
    </Container>
  );
}
