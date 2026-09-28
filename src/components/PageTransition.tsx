"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 1, ease: "easeInOut" },
        }}
        className="pointer-events-none fixed left-0 top-0 h-screen w-screen bg-black/50"
      />
      {children}
    </>
  );
}
