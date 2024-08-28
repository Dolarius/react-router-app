import axios from "axios";
import { PlanetType } from "./useGetPlanets2";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function addPlanet(updatedData: Partial<PlanetType>) {
  console.log(updatedData);
  const { data } = await axios.post<PlanetType>(
    "http://localhost:4000/planets",
    updatedData
  );

  return data;
}

export const useAddPlanet = () => {
  const queryClient = useQueryClient();

  const queryKeys = ["planet", "planets"];
  const mutation = useMutation({
    mutationFn: ({ updatedData }: { updatedData: Partial<PlanetType> }) =>
      addPlanet(updatedData),
    onSuccess: (data, variables) => {
      // Optionally, you can update the cache with the new data
      queryKeys.map((key) =>
        queryClient.refetchQueries({
          queryKey: [key],
        })
      );
    },
  });

  return mutation;
};
