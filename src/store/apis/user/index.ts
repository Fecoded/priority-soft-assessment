// Core Packages
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiHelper } from "@src/store/api-helper";
import { METHODS } from "@src/utils/helper";
import {
  ListResponse,
  LoginCredential,
  RegisterCredential,
  User,
  UserShift,
} from "@src/store/types";
import useStore from "@src/store";
import { Shift } from "../shift/types";

const API = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  USERS: "/users",
  USER_SHIFT: "/users/shifts",
  USER_DETAILS: "/auth",
};

export const useGetUserDetailsQuery = () => {
  return useQuery({
    queryKey: [API.USER_DETAILS],
    queryFn: async () => {
      const res: ListResponse<User> = await apiHelper({
        url: API.USER_DETAILS,
      });
      useStore.getState().setUserDetails(res.data);
      return res.data;
    },
  });
};

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: [API.USERS],
    queryFn: async () => {
      const res: ListResponse<User[]> = await apiHelper({
        url: API.USERS,
      });

      return res.data;
    },
  });
};

export const useAssignSkillMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: { userId: string; skillId: string }) => {
      const { userId, skillId } = body;
      const response: ListResponse<null> = await apiHelper({
        url: `${API.USERS}/${userId}/skills`,
        requestType: METHODS.POST,
        data: { skillId },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [API.USERS] });
    },
  });
};

export const useCertifyLocationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: { userId: string; locationId: string }) => {
      const { userId, locationId } = body;
      const response: ListResponse<null> = await apiHelper({
        url: `${API.USERS}/${userId}/certifications`,
        requestType: METHODS.POST,
        data: { locationId },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [API.USERS] });
    },
  });
};

export const useGetUserShiftQuery = () => {
  return useQuery({
    queryKey: [API.USER_SHIFT],
    queryFn: async () => {
      const res: ListResponse<UserShift[]> = await apiHelper({
        url: API.USER_SHIFT,
      });
      return res.data;
    },
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (body: LoginCredential) => {
      const response: ListResponse<User> = await apiHelper({
        url: API.LOGIN,
        requestType: METHODS.POST,
        data: body,
      });
      useStore.getState().setUserDetails(response.data);
      return response.data;
    },
  });
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: RegisterCredential) => {
      const response: ListResponse<null> = await apiHelper({
        url: API.USERS,
        requestType: METHODS.POST,
        data: body,
      });
      return response;
    },

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [API.USERS] });
    },
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const response: ListResponse<null> = await apiHelper({
        url: API.LOGOUT,
        requestType: METHODS.POST,
      });
      return response;
    },
  });
};
