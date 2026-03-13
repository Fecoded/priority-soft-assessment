// Core Packages
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiHelper } from "@src/store/api-helper";
import { METHODS } from "@src/utils/helper";
import { ListResponse } from "@src/store/types";
import { SwapRequest, SwapRequestPayload } from "./types";

const API = {
  SWAP: "/swaps",
};

export const useGetSwapsRequestQuery = () => {
  return useQuery({
    queryKey: [API.SWAP],
    queryFn: async () => {
      const res: ListResponse<SwapRequest[]> = await apiHelper({
        url: API.SWAP,
      });

      return res.data;
    },
  });
};

export const useSwapRequestMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: SwapRequestPayload) => {
      const response: ListResponse<null> = await apiHelper({
        url: API.SWAP,
        requestType: METHODS.POST,
        data: body,
      });
      return response;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [API.SWAP] });
    },
  });
};

export const useAcceptSwapMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: { swapId: string }) => {
      const { swapId } = body;
      const response: ListResponse<null> = await apiHelper({
        url: `${API.SWAP}/${swapId}/accept`,
        requestType: METHODS.POST,
      });
      return response;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [API.SWAP] });
    },
  });
};

export const useRejectSwapMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: { swapId: string }) => {
      const { swapId } = body;
      const response: ListResponse<null> = await apiHelper({
        url: `${API.SWAP}/${swapId}/reject`,
        requestType: METHODS.DELETE,
      });
      return response;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [API.SWAP] });
    },
  });
};
