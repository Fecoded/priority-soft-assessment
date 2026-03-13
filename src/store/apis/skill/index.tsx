// Core Packages
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiHelper } from "@src/store/api-helper";
import { METHODS } from "@src/utils/helper";
import { ListResponse } from "@src/store/types";
import { SkillRequest, SkillResponse } from "./types";

const API = {
  SKILL: "/skills",
};

export const useGetSkillsQuery = () => {
  return useQuery({
    queryKey: [API.SKILL],
    queryFn: async () => {
      const res: ListResponse<SkillResponse[]> = await apiHelper({
        url: API.SKILL,
      });

      return res.data;
    },
  });
};

export const useSkillMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: SkillRequest) => {
      const response: ListResponse<null> = await apiHelper({
        url: API.SKILL,
        requestType: METHODS.POST,
        data: body,
      });
      return response;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [API.SKILL] });
    },
  });
};
