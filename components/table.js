import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ type, rows }) {
  //   const customColumnStyle = { width: 12, backgroundColor: "yellow" };
  return (
    <TableContainer component={Paper} style={{ tableLayout: "auto" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {type === "Food" ? (
            <TableRow>
              <TableCell>Food Item</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell>Exercise Item</TableCell>
              <TableCell align="right">Est Calories Burned</TableCell>
              <TableCell align="right">Length&nbsp;(min)</TableCell>
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {type === "Food"
            ? rows.map((row) => (
                <TableRow
                  key={row.foodTitle}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.foodTitle}
                  </TableCell>
                  <TableCell align="right">
                    {Math.round(row.nf_calories * 100) / 100}
                  </TableCell>
                  <TableCell align="right">
                    {Math.round(row.nf_total_fat * 100) / 100}
                  </TableCell>
                  <TableCell align="right">
                    {Math.round(row.nf_total_carbohydrate * 100) / 100}
                  </TableCell>
                  <TableCell align="right">
                    {Math.round(row.nf_protein * 100) / 100}
                  </TableCell>
                </TableRow>
              ))
            : rows.map((row) => (
                <TableRow
                  key={row.exercise}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.exercise}
                  </TableCell>
                  <TableCell align="right">{row.caloriesBurned}</TableCell>
                  <TableCell align="right">{row.length}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
