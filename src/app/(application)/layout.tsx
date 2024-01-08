import { type ReactNode } from "react";
import Header from "./_components/header";
import SignUpModal from "./_components/modals/signUpModal";
import LoginModal from "./_components/modals/loginModal";

export default function LayoutHome({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      <SignUpModal />
      <LoginModal />
      {children}
    </main>
  );
}
