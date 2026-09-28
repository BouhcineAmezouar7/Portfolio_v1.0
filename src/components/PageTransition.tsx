"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 1, ease: "easeInOut" },
          }}
          exit={{ opacity: 0 }}
          className="h-screen w-screen fixed bg-black/50 top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
