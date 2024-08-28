import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

export type PersonType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};
export type PeopleType = {
  count: number;
  next: string;
  previous: string | null;
  results: PersonType[];
};

async function fetchPeople(page?: number) {
  const { data } = await axios.get<PeopleType>(
    `https://swapi.dev/api/people?page=${page}`
  );
  return data;
}

export const useGetPeople = (page?: number) => {
  const { data, isLoading, isError, status, isPlaceholderData } = useQuery({
    queryKey: ["people", page],
    queryFn: () => fetchPeople(page),
    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isError, status, isPlaceholderData };
};
