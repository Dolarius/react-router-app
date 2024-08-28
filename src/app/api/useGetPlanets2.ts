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

async function fetchPlanets() {
  const { data } = await axios.get<PlanetType[]>(
    "http://localhost:4000/planets"
  );

  return data;
}

export const useGetPlanets2 = () => {
  const { data, isPlaceholderData, isLoading, isError, status } = useQuery({
    queryKey: ["planets"],
    queryFn: () => fetchPlanets(),
    placeholderData: keepPreviousData,
  });

  return { data, isPlaceholderData, isLoading, isError, status };
};

// const me = axios.patch<PlanetType[]>("http://localhost:4000/planets");
