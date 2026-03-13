import dayjs from "dayjs";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { BasicTable } from "@src/components/table";
import { SwapRequest } from "@src/store/apis/swap/types";
import { SwapRequestData } from "../utils";

function createData(
  id: string,
  name: string,
  timezone: string,
  requester: string,
  status: string,
  createdAt: string,
  expiresAt: string,
) {
  return { id, name, timezone, requester, status, createdAt, expiresAt };
}

type SwapRequestTableProps = {
  swapRequest: SwapRequest[];
  handleSwapRequest: (s: SwapRequestData) => void;
};

export const SwapRequestTable: React.FC<SwapRequestTableProps> = ({
  swapRequest,
  handleSwapRequest,
}) => {
  const bodyData = (swapRequest ?? [])?.map((s) =>
    createData(
      s.id,
      s.shift.location.name,
      s.shift.location.timezone,
      s.requester.name,
      s.status,
      s.createdAt,
      s.expiresAt,
    ),
  );
  const headRows = [
    "Name",
    "TimeZone",
    "Requester",
    "Status",
    "CreatedAt",
    "ExpiresAt",
  ];

  const bodyRows = () =>
    bodyData.map((row) => (
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
          onClick={() => handleSwapRequest(row)}
        >
          {row.name}
        </TableCell>
        <TableCell>{row.timezone}</TableCell>
        <TableCell>{row.requester}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>
          {dayjs(row.createdAt).format("YYYY-MM-DD HH:mm:ss A")}
        </TableCell>
        <TableCell>
          {dayjs(row.expiresAt).format("YYYY-MM-DD HH:mm:ss A")}
        </TableCell>
      </TableRow>
    ));

  return <BasicTable bodyRows={bodyRows} headRows={headRows} />;
};
