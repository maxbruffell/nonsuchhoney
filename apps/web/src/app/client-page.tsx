"use client";

import nextDynamic from "next/dynamic";


const HomePage = nextDynamic(() => import("@/views/Home"), {
  ssr: false,
});

export default function ClientPage() {
  return <HomePage />;
}
