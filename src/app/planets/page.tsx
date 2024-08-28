"use client";

import { useRouter } from "next/navigation";
import { useGetPlanets } from "../api/useGetPlanets";
import { Planet } from "../components/Planet";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Planets() {
  const [page, setPage] = useState(1);

  const {
    data: planetsData,
    isLoading,
    isError,
    status,
    isPlaceholderData,
  } = useGetPlanets(page);

  const { results: planets, next, previous } = planetsData || {};

  const router = useRouter();
  console.log("planetsData", planets);

  return (
    <div>
      <div>Planets</div>
      <div className="flex justify-center items-center">
        <Button variant={"default"} onClick={() => router.push("/")}>
          Go Back
        </Button>
        <Button
          className={`disabled:opacity-75 ${
            !previous ? "pointer-events-none" : ""
          } `}
          onClick={() => setPage((prevState) => prevState - 1)}
          disabled={!previous}
        >
          Previous Page
        </Button>
        <h4>Page {page}</h4>
        <Button
          className={`disabled:opacity-75 ${
            !next ? "pointer-events-none" : ""
          }`}
          onClick={() => {
            if (!isPlaceholderData && next) {
              setPage((prevState) => prevState + 1);
            }
          }}
          disabled={!next}
        >
          Next Page
        </Button>
      </div>
      {isLoading && <div>Loading data</div>}
      {isError && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {planets?.map((planet) => (
            <Planet key={planet.name} planet={planet} planetId={planet.id} />
          ))}
        </div>
      )}
    </div>
  );
}
