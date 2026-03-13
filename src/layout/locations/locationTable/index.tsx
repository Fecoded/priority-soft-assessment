import { BasicTable } from "@src/components/table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { LocationResponse } from "@src/store/apis/location/types";

function createData(name: string, timezone: string) {
  return { name, timezone };
}

type LocationTableProps = {
  locations: LocationResponse[];
};

export const LocationTable: React.FC<LocationTableProps> = ({ locations }) => {
  const bodyData = (locations ?? [])?.map((location) =>
    createData(location.name, location.timezone),
  );
  const headRows = ["Name", "TimeZone"];

  const bodyRows = () =>
    bodyData.map((row) => (
      <TableRow
        key={row.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.timezone}</TableCell>
      </TableRow>
    ));

  return <BasicTable bodyRows={bodyRows} headRows={headRows} />;
};
