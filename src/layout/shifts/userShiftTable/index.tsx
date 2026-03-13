import dayjs from "dayjs";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { BasicTable } from "@src/components/table";
import { UserShift } from "@src/store/types";
import { CreateData, OmitAssignment } from "../utils";

function createData(
  id: string,
  shiftId: string,
  locationName: string,
  locationTimezone: string,
  skillName: string,
  headCount: number,
  status: string,
  startDate: string,
  endDate: string,
) {
  return {
    id,
    shiftId,
    locationName,
    locationTimezone,
    skillName,
    headCount,
    status,
    startDate,
    endDate,
  };
}

type UserShiftTableProps = {
  shifts: UserShift[];
  handleOpenSwapShift: (shift: OmitAssignment) => void;
};

export const UserShiftTable: React.FC<UserShiftTableProps> = ({
  shifts,
  handleOpenSwapShift,
}) => {
  const bodyData = (shifts ?? [])?.map((s) =>
    createData(
      s.id,
      s.shift.id,
      s.shift?.location.name,
      s.shift?.location.timezone,
      s.shift?.requiredSkill.name,
      s.shift?.headCount,
      s.shift?.status,
      s.shift?.startDate,
      s.shift?.endDate,
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
          sx={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => handleOpenSwapShift(row)}
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
