import { useGetUserDetailsQuery, useGetUsersQuery } from "@src/store/apis";

export const useGetUserInfo = () => {
  const { data: userDetails } = useGetUserDetailsQuery();

  const { data: users } = useGetUsersQuery();

  return { userDetails, users };
};
