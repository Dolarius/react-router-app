import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

export type PlanetType = {
  id?: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};
export type PlanetsType = {
  count: number;
  next: string;
  previous: string | null;
  results: PlanetType[];
};

export async function fetchPlanets(page?: number) {
  const { data } = await axios.get<PlanetsType>(
    `https://swapi.dev/api/planets/`
  );

  return data;
}

export const useGetPlanets = (page?: number) => {
  const { data, isPlaceholderData, isLoading, isError, status } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => fetchPlanets(page),
    placeholderData: keepPreviousData,
  });

  return { data, isPlaceholderData, isLoading, isError, status };
};
