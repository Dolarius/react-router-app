"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Person } from "../components/Person";
import { useGetPeople } from "../api/useGetPeople";

export default function People() {
  const [page, setPage] = useState(1);
  const {
    data: peopleData,
    isPlaceholderData,
    isLoading,
    isError,
    status,
  } = useGetPeople(page);

  const { results: people, next, previous } = peopleData || {};

  const router = useRouter();

  return (
    <div>
      <div>People</div>
      <div className="flex justify-center items-center">
        <button
          className="mx-[10px] my-[0] bg-transparent border-[3px] border-[solid] border-[#ccc] rounded-[20px] p-[10px] text-[#ccc] text-[0.8em] cursor-pointer hover:text-[#fff] hover:border-[#fff]"
          onClick={() => router.push("/")}
        >
          Go Back
        </button>
        <button
          className={`disabled:opacity-75 ${
            !previous ? "pointer-events-none" : ""
          } mx-[10px] my-[0] bg-transparent border-[3px] border-[solid] border-[#ccc] rounded-[20px] p-[10px] text-[#ccc] text-[0.8em] cursor-pointer hover:text-[#fff] hover:border-[#fff]`}
          onClick={() => setPage((prevState) => prevState - 1)}
          disabled={!previous}
        >
          Previous Page
        </button>
        <h4>Page {page}</h4>
        <button
          className={`disabled:opacity-75 ${
            !next ? "pointer-events-none" : ""
          } mx-[10px] my-[0] bg-transparent border-[3px] border-[solid] border-[#ccc] rounded-[20px] p-[10px] text-[#ccc] text-[0.8em] cursor-pointer hover:text-[#fff] hover:border-[#fff]`}
          onClick={() => {
            if (!isPlaceholderData && next) {
              setPage((prevState) => prevState + 1);
            }
          }}
          disabled={!next}
        >
          Next Page
        </button>
      </div>
      {isLoading && <div>Loading data</div>}
      {isError && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {people?.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
}
