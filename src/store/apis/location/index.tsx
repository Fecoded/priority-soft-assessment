// Core Packages
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiHelper } from "@src/store/api-helper";
import { METHODS } from "@src/utils/helper";
import { ListResponse } from "@src/store/types";
import { LocationRequest, LocationResponse } from "./types";

const API = {
  LOCATION: "/locations",
};

export const useGetLocationsQuery = () => {
  return useQuery({
    queryKey: [API.LOCATION],
    queryFn: async () => {
      const res: ListResponse<LocationResponse[]> = await apiHelper({
        url: API.LOCATION,
      });

      return res.data;
    },
  });
};

export const useLocationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: LocationRequest) => {
      const response: ListResponse<null> = await apiHelper({
        url: API.LOCATION,
        requestType: METHODS.POST,
        data: body,
      });
      return response;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [API.LOCATION] });
    },
  });
};
