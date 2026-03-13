import dayjs from "dayjs";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { BasicTable } from "@src/components/table";
import { Assignment, Shift } from "@src/store/apis/shift/types";
import { CreateData } from "../utils";

function createData(
  id: string,
  locationName: string,
  locationTimezone: string,
  skillName: string,
  headCount: number,
  status: string,
  startDate: string,
  endDate: string,
  assignments: Assignment[],
) {
  return {
    id,
    locationName,
    locationTimezone,
    skillName,
    headCount,
    status,
    startDate,
    endDate,
    assignments,
  };
}

type ShiftTableProps = {
  shifts: Shift[];
  handleOpenAssignShift: (shift: CreateData) => void;
};

export const ShiftTable: React.FC<ShiftTableProps> = ({
  shifts,
  handleOpenAssignShift,
}) => {
  const bodyData = (shifts ?? [])?.map((s) =>
    createData(
      s.id,
      s.location.name,
      s.location.timezone,
      s.requiredSkill.name,
      s.headCount,
      s.status,
      s.startDate,
      s.endDate,
      s.assignments,
    ),
  );
  const headRows = [
    "Location",
    "TimeZone",
    "Skill",
    "Headcount",
    "Status",
    "StartDate",
    "EndDate",
  ];

  const bodyRows = () =>
    bodyData.map((row) => (
      <TableRow
        key={row.id}
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
          onClick={() => handleOpenAssignShift(row)}
        >
          {row.locationName}
        </TableCell>
        <TableCell>{row.locationTimezone}</TableCell>
        <TableCell>{row.skillName}</TableCell>
        <TableCell>{row.headCount}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>
          {dayjs(row.startDate).format("YYYY-MM-DD HH:mm:ss")}
        </TableCell>
        <TableCell>
          {dayjs(row.endDate).format("YYYY-MM-DD HH:mm:ss")}
        </TableCell>
      </TableRow>
    ));

  return <BasicTable bodyRows={bodyRows} headRows={headRows} />;
};
