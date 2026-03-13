// Core Packages
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiHelper } from "@src/store/api-helper";
import { METHODS } from "@src/utils/helper";
import { ListResponse } from "@src/store/types";
import {
  ShiftRequest,
  Shift,
  AssignShiftRequest,
  AssignShiftResponse,
} from "./types";

const API = {
  SHIFT: "/shifts",
};

export const useGetShiftsQuery = () => {
  return useQuery({
    queryKey: [API.SHIFT],
    queryFn: async () => {
      const res: ListResponse<Shift[]> = await apiHelper({
        url: API.SHIFT,
      });

      return res.data;
    },
  });
};

export const useShiftMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: ShiftRequest) => {
      const response: ListResponse<null> = await apiHelper({
        url: API.SHIFT,
        requestType: METHODS.POST,
        data: body,
      });
      return response;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [API.SHIFT] });
    },
  });
};

export const useAssignShiftMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: AssignShiftRequest) => {
      const { shiftId, userId } = body;
      const response: ListResponse<AssignShiftResponse> = await apiHelper({
        url: `${API.SHIFT}/${shiftId}`,
        requestType: METHODS.POST,
        data: { userId },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [API.SHIFT] });
    },
  });
};
