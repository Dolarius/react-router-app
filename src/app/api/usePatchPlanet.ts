import axios from "axios";
import { PlanetType } from "./useGetPlanets2";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function updatePlanet(id: number, updatedData: Partial<PlanetType>) {
  const { data } = await axios.patch<PlanetType>(
    `http://localhost:4000/planets/${id}`,
    updatedData
  );

  return data;
}

export const useUpdatePlanet = () => {
  const queryClient = useQueryClient();

  const queryKeys = ["planet", "planets"];
  const mutation = useMutation({
    mutationFn: ({
      id,
      updatedData,
    }: {
      id: number;
      updatedData: Partial<PlanetType>;
    }) => updatePlanet(id, updatedData),
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
