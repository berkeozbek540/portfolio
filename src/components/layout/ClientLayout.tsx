"use client";
import { AnimatePresence } from "framer-motion";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default ClientLayout;
