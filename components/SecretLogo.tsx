"use client";

import { useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function SecretLogo() {
  const router = useRouter();
  const pathname = usePathname();
  const count = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleClick() {
    count.current += 1;
    console.log("logo click count:", count.current);
    if (timer.current) clearTimeout(timer.current);

    if (count.current >= 5) {
      count.current = 0;
      router.push("/portal");
      return;
    }

    timer.current = setTimeout(() => {
      if (count.current < 5 && pathname !== "/") {
        router.push("/");
      }
      count.current = 0;
    }, 600);
  }

  return (
    <button onClick={handleClick} className="cursor-pointer bg-transparent border-0 p-0">
      <Image src="/images/YMLogoNavBar.png" alt="YM" width={120} height={105} />
    </button>
  );
}