import { useQuery } from "@tanstack/react-query";
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

async function fetchPlanet(id: number) {
  const { data } = await axios.get<PlanetType>(
    `http://localhost:4000/planets/${id}`
  );

  return data;
}

export const useGetPlanet = (id: number) => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["planet"],
    queryFn: () => fetchPlanet(id),
  });

  return { data, isLoading, isError, status };
};
