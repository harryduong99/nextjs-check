"use client"

import { getCurrentDate } from "@/server/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const date = getCurrentDate();

  const ping = async () => {
    const response = await fetch("/api/ping", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address: "0x8EF54bED4743E98b1Fa44978FAA680541ff219fE",
      }),
    });
  }

  return (
    <>
      <h3>Test</h3>
      <Link href={"https://harryduong.cloud"}>Home</Link>
    </>
  );
}
