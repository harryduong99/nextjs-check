"use client"

import { getCurrentDate } from "@/server/utils";
import Image from "next/image";

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
    <h4>Date: {date}</h4>
    
    <button onClick={ping}>Ping</button>
    </>
  );
}
