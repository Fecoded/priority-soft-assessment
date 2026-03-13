import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type BaseTableProps = {
  bodyRows: () => React.ReactNode;
  headRows: string[];
};

export const BasicTable = ({ bodyRows, headRows }: BaseTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headRows.map((row, idx) => (
              <TableCell key={idx}>{row}</TableCell>
            ))}
            {/* <TableCell>Calories</TableCell>
            <TableCell>Fat&nbsp;(g)</TableCell>
            <TableCell>Carbs&nbsp;(g)</TableCell>
            <TableCell>Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>{bodyRows()}</TableBody>
      </Table>
    </TableContainer>
  );
};
