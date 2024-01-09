import { type ReactNode } from "react";
import Header from "./_components/header";
import SignUpModal from "./_components/modals/signUpModal";
import LoginModal from "./_components/modals/loginModal";
import { getServerAuthSession } from "~/server/auth";

export default async function LayoutHome({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerAuthSession();

  return (
    <main>
      <Header session={session} />
      <SignUpModal />
      <LoginModal />
      {children}
    </main>
  );
}
