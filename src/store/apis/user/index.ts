// Core Packages
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiHelper } from "@src/store/api-helper";
import { METHODS } from "@src/utils/helper";
import {
  ListResponse,
  LoginCredential,
  RegisterCredential,
} from "@src/store/types";
import { User } from "generated/prisma";

export const API = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  REGISTER: "/users",
  USER_DETAILS: "/auth",
};

export const useGetUserDetailsQuery = () => {
  return useQuery({
    queryKey: [API.USER_DETAILS],
    queryFn: async () => {
      const res: ListResponse<User> = await apiHelper({
        url: API.USER_DETAILS,
      });

      return res.data;
    },
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (body: LoginCredential) => {
      const response: ListResponse<null> = await apiHelper({
        url: API.LOGIN,
        requestType: METHODS.POST,
        data: body,
      });
      return response;
    },
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (body: RegisterCredential) => {
      const response: ListResponse<null> = await apiHelper({
        url: API.REGISTER,
        requestType: METHODS.POST,
        data: body,
      });
      return response;
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
