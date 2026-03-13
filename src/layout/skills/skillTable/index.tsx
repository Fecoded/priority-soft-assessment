import { BasicTable } from "@src/components/table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { SkillResponse } from "@src/store/apis/skill/types";

function createData(name: string) {
  return { name };
}

type SkillTableProps = {
  skills: SkillResponse[];
};

export const SkillTable: React.FC<SkillTableProps> = ({ skills }) => {
  const bodyData = (skills ?? [])?.map((skill) => createData(skill.name));
  const headRows = ["Name"];

  const bodyRows = () =>
    bodyData.map((row) => (
      <TableRow
        key={row.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
    ));

  return <BasicTable bodyRows={bodyRows} headRows={headRows} />;
};
