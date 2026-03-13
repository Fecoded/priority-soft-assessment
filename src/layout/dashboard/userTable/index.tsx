import { BasicTable } from "@src/components/table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Certification, Role, Skill, User } from "@src/store/types";
import dayjs from "dayjs";

function createData(
  id: string,
  name: string,
  email: string,
  role: Role,
  skills: Skill[],
  certifications: Certification[],
  createdAt: Date,
) {
  return { id, name, email, role, skills, certifications, createdAt };
}

type UserTableProps = {
  users: User[];
  handleOpenAssignSkill: (user: User) => void;
};

export const UserTable: React.FC<UserTableProps> = ({
  users,
  handleOpenAssignSkill,
}) => {
  const bodyData = (users ?? [])?.map((user) =>
    createData(
      user.id,
      user.name,
      user.email,
      user.role,
      user.skills,
      user.certifications,
      user.createdAt,
    ),
  );
  const headRows = ["Name", "Email", "Role", "Skills", "CreatedAt"];

  const bodyRows = () =>
    bodyData.map((row) => {
      const skillsSet =
        row.skills.length > 0 ? row.skills.map((skill) => skill.name) : ["-"];
      return (
        <TableRow
          key={row.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell
            component="th"
            scope="row"
            sx={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => handleOpenAssignSkill(row as User)}
          >
            {row.name}
          </TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.role}</TableCell>
          <TableCell>{...skillsSet.toString().split("")}</TableCell>
          <TableCell>
            {dayjs(row.createdAt).format("YYYY-MM-DD HH:mm:ss")}
          </TableCell>
        </TableRow>
      );
    });

  return <BasicTable bodyRows={bodyRows} headRows={headRows} />;
};
