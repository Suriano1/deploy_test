import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Footer from "@/components/ui/footer";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/");
  }
  return (
    <>
      {children} <Footer />{" "}
    </>
  );
}
