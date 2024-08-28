"use client";

import { useGetPlanet } from "@/app/api/useGetPlanet";
import { useUpdatePlanet } from "@/app/api/usePatchPlanet";
import { Planet } from "@/app/components/Planet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { ArrowBigLeft } from "lucide-react";

export default function IndividualPlanet({
  params,
}: {
  params: { id: number };
}) {
  const { data: planetData } = useGetPlanet(params.id);

  const [name, setName] = useState("");
  const updatePlanet = useUpdatePlanet();
  const id = params.id;
  const handleUpdate = () => {
    updatePlanet.mutate({ id, updatedData: { name } });
  };

  return planetData ? (
    <div>
      <Planet planet={planetData} planetId={params.id} />
      <div className="mt-6 flex gap-4">
        <Input
          className="w-52"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={handleUpdate}>Update Name</Button>
      </div>
      <Button className="mt-6" asChild>
        <Link href={"/planets2"}>
          <ArrowBigLeft />
          Go Back
        </Link>
      </Button>
    </div>
  ) : (
    <div>loading</div>
  );
}
