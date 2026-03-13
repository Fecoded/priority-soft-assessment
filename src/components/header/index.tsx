import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { handlePathname } from "@src/utils";
import { deleteCookie } from "cookies-next";
import { useLogoutMutation } from "@src/store/apis";
import { Role } from "@src/store/types";
import useStore from "@src/store";

type HeaderProps = {
  role?: Role;
};

export const Header: React.FC<HeaderProps> = () => {
  const user = useStore.getState().userDetails;
  const { mutateAsync: logout } = useLogoutMutation();

  const handleLogout = () => {
    logout()
      .then(() => {
        deleteCookie("USER_TOKEN");
        if (typeof window !== "undefined") {
          if (window.location.pathname !== "/login") {
            window.location.href = handlePathname(window.location.pathname);
          }
        }
      })
      .catch((err) => console.error("error in logout", err));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">
        {user.role ? `Hi, ${user.role}` : "Welcome"}
      </Typography>
      <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
        {user.role !== "STAFF" && (
          <Typography variant="body1" color="blue" sx={{ cursor: "pointer" }}>
            <Link href="/">Users</Link>
          </Typography>
        )}
        <Typography variant="body1" color="blue" sx={{ cursor: "pointer" }}>
          <Link href="/shifts">Shifts</Link>
        </Typography>
        <Typography variant="body1" color="blue" sx={{ cursor: "pointer" }}>
          <Link href="/swaps">Swaps</Link>
        </Typography>
        <Typography variant="body1" color="blue" sx={{ cursor: "pointer" }}>
          <Link href="/locations">Locations</Link>
        </Typography>
        <Typography variant="body1" color="blue" sx={{ cursor: "pointer" }}>
          <Link href="/skills">Skills</Link>
        </Typography>
        <Box onClick={handleLogout} sx={{ cursor: "pointer" }}>
          <Typography variant="body1" color="red" sx={{ cursor: "pointer" }}>
            Logout
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
