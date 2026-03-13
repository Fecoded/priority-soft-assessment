import { QueryClientConfig } from "@tanstack/react-query";

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnMount: "always",
      refetchOnWindowFocus: "always",
      refetchOnReconnect: "always",
      retry(failureCount) {
        if (failureCount >= 1) {
          return false;
        }

        return true;
      },
    },
    mutations: {},
  },
};

export const handlePathname = (pathname: string) => {
  if (pathname === "/") {
    return "/login";
  }

  return `/login?redirect=${pathname}`;
};

export const METHODS = {
  POST: "POST",
  GET: "GET",
  PATCH: "PATCH",
  PUT: "PUT",
  DELETE: "DELETE",
};
