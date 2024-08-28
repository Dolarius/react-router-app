"use client";

import { useRouter } from "next/navigation";
import { Navbar } from "./components/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Star Wars Info</h1>
      <Navbar />
      <div className="text-left"></div>
    </div>
  );
}
